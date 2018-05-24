pragma solidity ^0.4.24;

contract MetaStellar {
    struct Ra {
        uint raDecimal; uint raHour; uint raMinute; uint raSecond;
    }

    struct Dec {
        uint decDecimal; int decDegree; uint decMinute; uint decSecond;
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

    modifier cosmosOnly() {
        require(msg.sender == cosmos);
        _;
    }

    constructor(address creator, uint minPrice) public {
        cosmos = creator;
        minimumPrice = minPrice;
        lastId = 0;
    }

    function registerAstro(uint raD, uint raH, uint raM, uint raS, uint decDec, int decDeg, uint decM, uint decS, string name, string url) public payable cosmosOnly {
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

}

