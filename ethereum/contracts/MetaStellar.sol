pragma solidity ^0.4.24;

contract MetaStellar {
    struct Ra {
        int raDecimal; int raHour; int raMinute; int raSecond;
    }

    struct Dec {
        int decDecimal; int decDegree; int decMinute; int decSecond;
    }

    struct Voyager {
        address owner; string name;
    }

    struct Astro {
        uint id; // foreign key
        string name; // Name of the star
        Ra ra; // Right Ascension info
        Dec dec; // Declination info
        Voyager voyager; // owner's informations.
        //mapping(uint => bool) characteristics; // to demonstrate star's appearance !! ??
        uint lastBid; // default 0
        string url; // Initially everipedia url for matching star. Let users to change this.
    }

    address public cosmos;
    mapping(address => uint) galaxy; // number of stars each Voyager has.
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

    function registerAstro(int raD, int raH, int raM, int raS, int decDec, int decDeg, int decM, int decS, string name, string url) public payable cosmosOnly {
        Ra memory ra = Ra({raDecimal : raD, raHour : raH, raMinute : raM, raSecond : raS});
        Dec memory dec = Dec({decDecimal : decDec, decDegree : decDeg, decMinute : decM, decSecond : decS});
        Voyager memory voyager = Voyager({owner : msg.sender, name : 'Astro'});
        Astro memory astro = Astro({
            id : lastId + 1,
            name : name,
            ra : ra,
            dec : dec,
            voyager : voyager,
            lastBid : 0,
            url : url
            });

        lastId++;
        constellation[lastId] = astro;
    }

    function buyAstro(uint id, string voyagerName, string url) public payable {
        require(msg.value > minimumPrice);
        Astro storage targetAstro = constellation[id];
        Voyager memory lastVoyager = targetAstro.voyager;
        Voyager memory newVoyager = Voyager({
            owner : msg.sender,
            name : voyagerName
            });
        targetAstro.voyager = newVoyager;
        targetAstro.url = url;
        lastVoyager.owner.transfer(msg.value);
        galaxy[lastVoyager.owner]--;
        galaxy[msg.sender]++;
    }

/*
    function getAstro(uint _id) public returns (
        uint id,
        int raD,
        int raH,
        int raM,
        int raS,
        int decDec,
        int decDeg,
        int decM,
        int decS,
        string voyagerName,
        address voyagerOwner,
        string name,
        string url,
        uint lastBid)
    {
        Astro storage current_astro = constellation[_id];
        Voyager memory current_voyager = current_astro.voyager;
        Ra memory current_ra = current_astro.ra;
        Dec memory current_dec = current_astro.dec;

        id = _id;
        raD = current_ra.raDecimal;
        raH = current_ra.raHour;
        raM = current_ra.raMinute;
        raS = current_ra.raSecond;
        decDec = current_dec.decDecimal;
        decDeg = current_dec.decDegree;
        decM = current_dec.decMinute;
        decS = current_dec.decSecond;
        voyagerName = current_voyager.name;
        voyagerOwner = current_voyager.owner;
        name = current_astro.name;
        url = current_astro.url;
        lastBid = current_astro.lastBid;

        return (id, raD, raH, raM, raS, decDec, decDeg, decM, decS, voyagerName, voyagerOwner, name, url, lastBid);
    }
*/

}

