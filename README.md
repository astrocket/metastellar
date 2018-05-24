## Metastellar project.

Constellation market on Ethereum & EOS Blockchain.



#### What is this project about ?

There are number of stars with familiar names on constellation. It would be really awesome if we could draw them on blockchain and let people own it.

There are number of features that could be an appealing point.

1. Comparison of EOS & Ethereum blockchain.
   - Giving user a choice for selecting different chain base. EOS will overcome Ethereum upon constellation dominance rate since it doesn't require transaction fees.
2. Identity Integration
   - Whoever purchases the star will want to show their identity that it's their's. Just showing off random addresses are quite meaningless. Using Identity platforms like Metadium or uPort, Metastellar can access to user's information like name, url, and etc. They will shine upon constellation.
3. DEX for selling stars.



#### Technical specs.

1. React for Front-end application.
2. Semantic UI for UI framework.
3. Next.js for routing & server-side rendering.
4. MobX for state management.
5. [VirtualSky](https://github.com/slowe/VirtualSky) for constellation draw.
6. Solidity for Ethereum smart contract.
7. Mocha for testing.



#### Smart Contract Requirements

1. Initial setup function for stars.
   1. Initial registration of stars.
   2. Contract owner registration.
2. Tracking and purchasing functions for purchased user.
3. Option for adding or subtracting unique characteristic of each stars.

```javascript
// Mockup code.
pragma solidity ^0.4.19;

contract MetaStellar {
    address public cosmos;
    mapping(address => uint) galaxy; // number of stars each Voyager has.
    mapping(int => Astro) constellation; // find Astro by id(foreign key).
    uint public minimumPrice;
    uint public lastId;
    
    struct Astro {
        int id; // foreign key
        string name; // Name of the star
        uint brightness; // Brightness data
        Ra ra; // Right Ascension info
        Dec dec; // Declination info
        Voyager voyager; // owner's informations.
        mapping(uint => bool) characteristics; // to demonstrate star's appearance !! ??
        uint lastbid; // default 0
        string url; // Initially everipedia url for matching star. Let users to change this.
    }

    struct Ra {
        fixed decimals;
        uint hours;
        uint minutes;
        ufixed seconds;
    }

    struct Dec {
        fixed decimals;
        int degrees;
        uint aminutes;
        ufixed aseconds;
    }
    
    struct Voyager {
        address owner;
        string name; // retrieved name from Identification service.
    }
    
    modifier cosmosOnly() {
        require(msg.sender == cosmos);
        _;
    }

    // functions
    function MetaStellar(address creator, uint minPrice) {
        cosmos = creator;
        minimumPrice = minPrice;
    }
    
    function registerAstro(uint hours, uint minutes, uint seconds, int degrees, uint aminutes, uint aseconds, string name, uint brightness, string url) public cosmosOnly {
        Ra memory ra = Ra({
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
        
        Dec memory dec = Dec({
            degrees: degress,
            aminutes: aminutes,
            aseconds: aseconds
        });
        
        Voyager memory voyager = Voyager({
            owner: msg.sender,
            name: 'Astro'
        })
        
        Astro memory astro = Astro({
            id: lastId + 1;
            name: name;
            brightness: brightness;
            ra: ra,
            dec: dec,
            voyager: votager,
            lastbid: 0
        });
        
        lastId++;
        constellation[lastId] = astro;
    }
    
    function buyAstro(int id, string voyagerName, string url) public {
        require(msg.value > minimumPriceBid)
        Astro storageee targetAstro = constellation[id];
        Voyager memory lastVoyager = targetAstro.voyager; // last Owner
        Voyager memory newVoyager = Voyager({
            owner: msg.sender,
            name: voyagerName
        })
        
        targetAstro.voyager = newVoyager; // allocate new Owner.
        targetAstro.url = url; // address new url. filter required?
        lastVoyager.owner.transfer(msg.value); // last Onwer gets new Owner's bid.
        galaxy[msg.sender]++; // Is this correct in Solidity? Increment Owner's star num.
    }
}

```

> RA (right ascension) and DEC (declination) are to the sky what longitude and latitude are to the surface of the Earth. RA corresponds to east/west direction (like longitude), while Dec measures north/south directions, like latitude.

[Reference](http://curious.astro.cornell.edu/about-us/112-observational-astronomy/stargazing/technical-questions/699-what-are-ra-and-dec-intermediate)

```json
// Example json structure for star.
{
	"target": {"name": "M4", "alt":"" },
	"ra": { "decimal": 245.8967500, "h":"16", "m":"23", "s":"35.220" },
	"dec": { "decimal": -26.5257500, "d": "-26", "m":"31", "s":"32.700" }
}
```

[Reference](http://slowe.github.io/VirtualSky/messier.json)



별자리 그리는 법

1. 밑그림을 배경으로 깔아주고 좌표만 고르도록 하는 방법.
2. js, css 로 구현하는 방법
3. 실제 우주 좌표를 활용해서 그리는 방법.
4. 



#### 