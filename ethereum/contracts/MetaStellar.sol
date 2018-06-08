pragma solidity ^0.4.24;

contract MetaStellar {

    struct MetaID {
        address owner;
        string name;
        string sns;
    }

    struct Astro {
        uint id; // foreign key
        string name; // Name of the star
        int raDecimal; // multiplied by 1000
        int decDecimal; // multiplied by 1000
        MetaID metaID; // owner's MetaID.
        uint lastBid; // default 0
    }

    address public cosmos;
    mapping(address => mapping(uint => uint)) public astroBucketIndex;
    mapping(address => uint[]) public astroBucket; // ids of stars each MetaID has.
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

    function registerAstro(int _raDecimal, int _decDecimal, string _name) public payable cosmosOnly {
        MetaID memory metaID = MetaID({owner : msg.sender, name : 'Metadium', sns: 'metadium.com'});
        uint newAstroId = ++lastId;
        Astro memory astro = Astro({
            id : newAstroId,
            name : _name,
            raDecimal : _raDecimal,
            decDecimal : _decDecimal,
            metaID : metaID,
            lastBid : 0
            });

        constellation[newAstroId] = astro;
        addToBucket(msg.sender, newAstroId);
    }

    function buyAstro(uint _targetAstroId, string _metaIDName, string _metaIDSns) public payable {
        Astro storage targetAstro = constellation[_targetAstroId];

        require(msg.value >= minimumPrice + targetAstro.lastBid);

        MetaID memory lastMetaID = targetAstro.metaID;
        MetaID memory newMetaID = MetaID({
            owner : msg.sender,
            name : _metaIDName,
            sns : _metaIDSns
            });
        targetAstro.metaID = newMetaID;
        targetAstro.lastBid = msg.value;
        lastMetaID.owner.transfer(msg.value);
        removeFromBucket(lastMetaID.owner, _targetAstroId);
        addToBucket(msg.sender, _targetAstroId);
    }

    function addToBucket(address _hodler, uint _astroId) internal {
        uint bucketId = astroBucket[_hodler].length;
        astroBucketIndex[_hodler][_astroId] = bucketId;
        astroBucket[_hodler].push(_astroId);
    }

    function removeFromBucket(address _hodler, uint _astroId ) internal {
        uint bucketId = astroBucketIndex[_hodler][_astroId];
        uint bucketLength = astroBucket[_hodler].length;
        uint lastAstroInBucket = astroBucket[_hodler][bucketLength-1];
        delete astroBucket[_hodler][bucketId];
        astroBucket[_hodler][bucketId] = lastAstroInBucket;
        delete astroBucket[_hodler][bucketLength-1];
        astroBucket[_hodler].length--;
    }

    function getBucketLength(address _hodler) view public returns (uint length) {
        return astroBucket[_hodler].length;
    }

    function getAstro(uint _id) view public returns (
        uint id,
        int raDecimal,
        int decDecimal,
        string name,
        string metaIDName,
        address metaIDOwner,
        string metaIDSns,
        uint lastBid)
    {
        Astro storage currentAstro = constellation[_id];
        MetaID memory currentMetaID = currentAstro.metaID;

        id = _id;
        raDecimal = currentAstro.raDecimal;
        decDecimal = currentAstro.decDecimal;
        name = currentAstro.name;
        metaIDName = currentMetaID.name;
        metaIDOwner = currentMetaID.owner;
        metaIDSns = currentMetaID.sns;
        lastBid = currentAstro.lastBid;

        return (id, raDecimal, decDecimal, name, metaIDName, metaIDOwner, metaIDSns, lastBid);
    }
}