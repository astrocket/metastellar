pragma solidity ^0.4.24;

contract MetaStellar {

    struct MetaID {
        address owner;
        string name;
    }

    struct Astro {
        uint id; // foreign key
        string name; // Name of the star
        int raDecimal; // multiplied by 1000
        int decDecimal; // multiplied by 1000
        MetaID metaID; // owner's MetaID.
        uint lastBid; // default 0
        string url; // Initially everipedia url for matching star. Let users to change this.
    }

    address public cosmos;
    mapping(address => uint) starBucket; // number of stars each MetaID has.
    mapping(uint => Astro) public constellation; // find Astro by id(foreign key).
    uint public minimumPrice;
    uint public lastId;
    uint public multiplier;

    modifier cosmosOnly() {
        require(msg.sender == cosmos);
        _;
    }

    constructor(address creator, uint minPrice) public {
        cosmos = creator;
        minimumPrice = minPrice;
        lastId = 0;
        multiplier = 18;
    }

    function registerAstro(int _raDecimal, int _decDecimal, string _name, string _url) public payable cosmosOnly {
        MetaID memory metaID = MetaID({owner : msg.sender, name : 'Metadium'});

        Astro memory astro = Astro({
            id : lastId + 1, // increment!
            name : _name,
            raDecimal : _raDecimal,
            decDecimal : _decDecimal,
            metaID : metaID,
            lastBid : 0,
            url : _url
            });

        lastId++;
        constellation[lastId] = astro;
        starBucket[msg.sender];
    }

    function buyAstro(uint _targetAstroId, string _metaIDName, string _url) public payable {
        Astro storage targetAstro = constellation[_targetAstroId];

        require(msg.value > minimumPrice + targetAstro.lastBid);

        MetaID memory lastMetaID = targetAstro.metaID;
        MetaID memory newMetaID = MetaID({
            owner : msg.sender,
            name : _metaIDName
            });
        targetAstro.metaID = newMetaID;
        targetAstro.url = _url;
        lastMetaID.owner.transfer(msg.value);
        starBucket[lastMetaID.owner]--;
        starBucket[msg.sender]++;
    }

    function getAstro(uint _id) view public returns (
        uint id,
        int raDecimal,
        int decDecimal,
        string metaIDName,
        address metaIDOwner,
        string name,
        string url,
        uint lastBid)
    {
        Astro storage currentAstro = constellation[_id];
        MetaID memory currentMetaID = currentAstro.metaID;

        id = _id;
        raDecimal = currentAstro.raDecimal;
        decDecimal = currentAstro.decDecimal;
        metaIDName = currentMetaID.name;
        metaIDOwner = currentMetaID.owner;
        name = currentAstro.name;
        url = currentAstro.url;
        lastBid = currentAstro.lastBid;

        return (id, raDecimal, decDecimal, metaIDName, metaIDOwner, name, url, lastBid);
    }

}