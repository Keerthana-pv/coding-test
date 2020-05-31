import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  userList = [
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "ashton",
          last: "wilson"
        },
        location: {
          street: "7175 white swan road",
          city: "palmerston north",
          state: "manawatu-wanganui",
          zip: 94956
        },
        email: "ashton.wilson@example.com",
        username: "heavyladybug977",
        password: "travel",
        salt: "tgbAIMIu",
        md5: "f2a210858e00a3bd9232c4cf1fb59dd7",
        sha1: "4d8a2f562e71e4ff09a20ab37eafa69a4e4df488",
        sha256:
          "1da321ce2a8ca11cc1a99b10de8791061b1964450512b49b510ed667b3178e69",
        registered: 1042589814,
        dob: 83193073,
        phone: "(658)-812-6124",
        cell: "(079)-932-0156",
        picture: {
          large: "https://randomuser.me/api/portraits/men/8.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "mrs",
          first: "peyton",
          last: "johnson"
        },
        location: {
          street: "6156 fenton street",
          city: "upper hutt",
          state: "canterbury",
          zip: 73273
        },
        email: "peyton.johnson@example.com",
        username: "beautifulgorilla818",
        password: "sergio",
        salt: "iPmEf2K6",
        md5: "4d6895f281615aadccd1f3809ab0d442",
        sha1: "ddaf20a520ccd4a248362c3a750dc8d01d3c414f",
        sha256:
          "d48dfc4775ef81c31facd07d41205136621f8542bfdc2209a1fb9c4927f6d49c",
        registered: 1398630212,
        dob: 1152941008,
        phone: "(698)-525-1013",
        cell: "(712)-947-8109",
        picture: {
          large: "https://randomuser.me/api/portraits/women/37.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "logan",
          last: "wood"
        },
        location: {
          street: "9158 gloucester street",
          city: "wellington",
          state: "northland",
          zip: 76343
        },
        email: "logan.wood@example.com",
        username: "lazypeacock204",
        password: "alfred",
        salt: "ucFI42Ry",
        md5: "155199beff3980464338c7d1b0dbbee8",
        sha1: "272a7ddeb09133fcac71486c94817b694de77e0a",
        sha256:
          "6538ed401d41c987386252bba13efd10f84a8c647e90474401a57732fb6c14e3",
        registered: 916252604,
        dob: 1410111389,
        phone: "(202)-923-6180",
        cell: "(229)-901-0557",
        picture: {
          large: "https://randomuser.me/api/portraits/men/51.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "mrs",
          first: "ellie",
          last: "wood"
        },
        location: {
          street: "6222 roscommon road",
          city: "greymouth",
          state: "northland",
          zip: 27429
        },
        email: "ellie.wood@example.com",
        username: "orangewolf661",
        password: "fredrick",
        salt: "Ye6q5RyZ",
        md5: "e4d97c6a8929f31674438348a1ebafce",
        sha1: "1540e87e7d868b9b83e1a3d15c84c9e72ad78fd5",
        sha256:
          "9f6ea1a28d5dba148f492fa386814b883f7a3004f8b2e70ab694489b615498f1",
        registered: 1290034395,
        dob: 1221573877,
        phone: "(408)-021-8079",
        cell: "(947)-903-0425",
        picture: {
          large: "https://randomuser.me/api/portraits/women/59.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "ms",
          first: "aria",
          last: "lewis"
        },
        location: {
          street: "2370 kahikatea drive",
          city: "hastings",
          state: "hawke's bay",
          zip: 31614
        },
        email: "aria.lewis@example.com",
        username: "bluebird625",
        password: "bowwow",
        salt: "eCENVoc6",
        md5: "14982e0db05d4061e0f3f2886e62049f",
        sha1: "815eeb89a14ab37be82d443adac67320739fb627",
        sha256:
          "8f83ba7d2d9aa76b2be78a7e8442c1f38103ee1004c6c834d628fcdecad02b4d",
        registered: 1134567539,
        dob: 1054606831,
        phone: "(945)-238-8143",
        cell: "(877)-636-3861",
        picture: {
          large: "https://randomuser.me/api/portraits/women/73.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "elijah",
          last: "morris"
        },
        location: {
          street: "4801 high street",
          city: "upper hutt",
          state: "taranaki",
          zip: 49671
        },
        email: "elijah.morris@example.com",
        username: "tinyrabbit535",
        password: "info",
        salt: "a3wSruCt",
        md5: "953b62bc1df1136b46c601f719a24e9d",
        sha1: "ba34f8e41365324269b35589d515cb9d453407f1",
        sha256:
          "ca5d5b4d4e573003057165d29d2e46b9a5591da420c0da64ade6cf28aa72a519",
        registered: 1143235930,
        dob: 562023140,
        phone: "(717)-898-9943",
        cell: "(605)-644-4539",
        picture: {
          large: "https://randomuser.me/api/portraits/men/17.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "asher",
          last: "wood"
        },
        location: {
          street: "7857 symonds street",
          city: "hastings",
          state: "gisborne",
          zip: 20008
        },
        email: "asher.wood@example.com",
        username: "greenduck357",
        password: "fountain",
        salt: "sNzryrj9",
        md5: "16347bfedf09eb489ddbcde5da14fd72",
        sha1: "337707261a045b3caf75ad57737bdb71aeca0354",
        sha256:
          "4e06f41359a2b7382cb6f8f294cf3b0c254efe50655537ecd3da0c338579f1fd",
        registered: 1091321819,
        dob: 374440582,
        phone: "(718)-792-7822",
        cell: "(306)-744-8823",
        picture: {
          large: "https://randomuser.me/api/portraits/men/15.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/15.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "eli",
          last: "white"
        },
        location: {
          street: "7074 bridge street",
          city: "taupo",
          state: "tasman",
          zip: 27982
        },
        email: "eli.white@example.com",
        username: "purplebear990",
        password: "dogdog",
        salt: "nsjVhk3t",
        md5: "3254552a9c1f563d607fc3be40d3c149",
        sha1: "3fdebd0015f9c455c74f529c86033203ed3c4d39",
        sha256:
          "f9ecf6ef018c615c3ff1407c0ba7e691bd096e210b20a97f0f036fe4254840f6",
        registered: 999171681,
        dob: 660636551,
        phone: "(756)-737-6864",
        cell: "(638)-835-9190",
        picture: {
          large: "https://randomuser.me/api/portraits/men/87.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "miss",
          first: "alexis",
          last: "smith"
        },
        location: {
          street: "6528 esk street",
          city: "hastings",
          state: "gisborne",
          zip: 69075
        },
        email: "alexis.smith@example.com",
        username: "yellowelephant332",
        password: "legend",
        salt: "1QcQG9ZS",
        md5: "46f12836d23b5099238172a23019b7a0",
        sha1: "6386e7717dc95593155107f59a5a19865d3382f0",
        sha256:
          "35b8f75a4b64d27d2ab3ef06a36bb350b89cc2f6bded184f00b6086bf7becace",
        registered: 1402452031,
        dob: 134751356,
        phone: "(034)-589-5740",
        cell: "(564)-447-1803",
        picture: {
          large: "https://randomuser.me/api/portraits/women/60.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "ms",
          first: "natalie",
          last: "jones"
        },
        location: {
          street: "3868 atkinson avenue",
          city: "dunedin",
          state: "tasman",
          zip: 12071
        },
        email: "natalie.jones@example.com",
        username: "blackpanda696",
        password: "crystal",
        salt: "PCCPTENP",
        md5: "814a02e785fc3d30aca401d29d402609",
        sha1: "4b1ad1cfcae6de151490e795b38503da4f86d428",
        sha256:
          "62e62e5d670ead47ada62dd7a6e631de4e840d9a28d258dbbec3e8353a3f240f",
        registered: 1124738084,
        dob: 579130094,
        phone: "(620)-239-6441",
        cell: "(742)-670-3990",
        picture: {
          large: "https://randomuser.me/api/portraits/women/7.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/7.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "joseph",
          last: "hughes"
        },
        location: {
          street: "6365 anzac parade",
          city: "tauranga",
          state: "tasman",
          zip: 34171
        },
        email: "joseph.hughes@example.com",
        username: "whitebear823",
        password: "mingus",
        salt: "dPJbirED",
        md5: "8f10a689aaea9ca7f83294f0ae7fdf82",
        sha1: "eabe7cb3d95e1abbe839bdb600ba159bf750b55f",
        sha256:
          "045ee0bd1018f1994b50a1451d9d7271057c6219efb33d32ef19e7b43d5da303",
        registered: 1137497765,
        dob: 1218988645,
        phone: "(870)-456-5488",
        cell: "(916)-481-3017",
        picture: {
          large: "https://randomuser.me/api/portraits/men/42.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/42.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "dylan",
          last: "king"
        },
        location: {
          street: "2467 collingwood street",
          city: "whangarei",
          state: "canterbury",
          zip: 19866
        },
        email: "dylan.king@example.com",
        username: "browntiger616",
        password: "nymets",
        salt: "QxTvgOQf",
        md5: "2e0557c8d7b4c80c5fadc6b4adb07c96",
        sha1: "bb9684f5a0b9e79214605053ebddc00022769f5d",
        sha256:
          "48e365e02d57eaaf6f4663094721f4672295de3882c036d6b32a9f8d39177c2d",
        registered: 1010895827,
        dob: 840573571,
        phone: "(936)-467-6491",
        cell: "(354)-580-6034",
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "riley",
          last: "roberts"
        },
        location: {
          street: "5525 lichfield street",
          city: "gisborne",
          state: "otago",
          zip: 89328
        },
        email: "riley.roberts@example.com",
        username: "silverrabbit865",
        password: "444444",
        salt: "3zYXbeCe",
        md5: "dbd66dcc19427148b42488d860de1b91",
        sha1: "b6612670a1843a10ed14258a6f59ec1649544aeb",
        sha256:
          "16315af0f959a2ba33d02a066e27acfde78f50c7777ceae01d72fc6435037684",
        registered: 1429062086,
        dob: 878078609,
        phone: "(610)-840-1913",
        cell: "(532)-998-8079",
        picture: {
          large: "https://randomuser.me/api/portraits/men/21.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "thomas",
          last: "roberts"
        },
        location: {
          street: "2192 bank street",
          city: "hastings",
          state: "auckland",
          zip: 93898
        },
        email: "thomas.roberts@example.com",
        username: "smallpeacock779",
        password: "dancer",
        salt: "heoeq1T9",
        md5: "a8e1adf1231a770b02b61043756368f9",
        sha1: "8062157a41a2c55188c74ca269d7feb81889c3ec",
        sha256:
          "50aaa545bc9446e062eba386c2d2db45324a00ed85112ad6df39963f503f41f2",
        registered: 997541461,
        dob: 1153455604,
        phone: "(763)-892-8460",
        cell: "(848)-124-7742",
        picture: {
          large: "https://randomuser.me/api/portraits/men/41.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "vincent",
          last: "green"
        },
        location: {
          street: "6278 buckleys road",
          city: "new plymouth",
          state: "otago",
          zip: 14156
        },
        email: "vincent.green@example.com",
        username: "yellowladybug940",
        password: "flames",
        salt: "pbqDfygN",
        md5: "32e7b70d2525306c80c3787035036319",
        sha1: "2f2d97c34a45f5b2c621c04114842c968b351860",
        sha256:
          "45456bbb0e53d91ce49226b17d1710b904560f42098acc5bee46ede78a193515",
        registered: 921819885,
        dob: 1093728752,
        phone: "(373)-877-9562",
        cell: "(875)-604-1731",
        picture: {
          large: "https://randomuser.me/api/portraits/men/1.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "fletcher",
          last: "kumar"
        },
        location: {
          street: "4436 manukau road",
          city: "upper hutt",
          state: "northland",
          zip: 17100
        },
        email: "fletcher.kumar@example.com",
        username: "smallleopard508",
        password: "science",
        salt: "EyHkBdbP",
        md5: "ff92241a2644f2b38a94f57b86b062fc",
        sha1: "2a4f30cccf1f6516ae651b2411a0901f86137bff",
        sha256:
          "3bf8bf19d306ab55d8e9ae4ac6e60b75bed227d203058040eed5ca8689bdbbf9",
        registered: 1158148550,
        dob: 817957447,
        phone: "(303)-916-9954",
        cell: "(304)-342-9869",
        picture: {
          large: "https://randomuser.me/api/portraits/men/92.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "miss",
          first: "sadie",
          last: "patel"
        },
        location: {
          street: "5929 market street",
          city: "new plymouth",
          state: "waikato",
          zip: 81557
        },
        email: "sadie.patel@example.com",
        username: "lazysnake622",
        password: "sounds",
        salt: "1lL0IuO8",
        md5: "dcb2969a0e78a021598328e14830cda1",
        sha1: "dd65a8ef4743866f617c913c7d677708bad663ad",
        sha256:
          "14eb637ab46b2018842c82669f438909a844ecda1403436fdeb7ce77853488d0",
        registered: 1274867557,
        dob: 138000547,
        phone: "(233)-121-8412",
        cell: "(552)-148-4975",
        picture: {
          large: "https://randomuser.me/api/portraits/women/2.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "miss",
          first: "ava",
          last: "harris"
        },
        location: {
          street: "1131 cuba street",
          city: "rotorua",
          state: "manawatu-wanganui",
          zip: 99518
        },
        email: "ava.harris@example.com",
        username: "smalldog212",
        password: "1030",
        salt: "QFQ6QqdJ",
        md5: "36bed08c11c2ebdf4f9af6dbd2ac360c",
        sha1: "31722fafc86464526d302c67a18d72c272592c1b",
        sha256:
          "512d963ba32d2415a253aaf0ab4d9277b718942a70fa934af98e818f03299abd",
        registered: 929638501,
        dob: 1416960196,
        phone: "(911)-442-7078",
        cell: "(409)-900-9736",
        picture: {
          large: "https://randomuser.me/api/portraits/women/44.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg"
        }
      }
    },
    {
      user: {
        gender: "female",
        name: {
          title: "mrs",
          first: "chloe",
          last: "lewis"
        },
        location: {
          street: "9889 port hills road",
          city: "masterton",
          state: "gisborne",
          zip: 14549
        },
        email: "chloe.lewis@example.com",
        username: "purplegoose183",
        password: "smoke1",
        salt: "x4WqeOlG",
        md5: "256b687c84364f39ea77dc29a353ae39",
        sha1: "4b31a69e7ddc55701ad8cb7958b8d226caa65dfb",
        sha256:
          "3e39be29a961c9827098f54e155d0cca6d10a93365b69ddc01dc6e2aae577a44",
        registered: 1060203136,
        dob: 504193346,
        phone: "(775)-556-6245",
        cell: "(207)-424-6934",
        picture: {
          large: "https://randomuser.me/api/portraits/women/8.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg"
        }
      }
    },
    {
      user: {
        gender: "male",
        name: {
          title: "mr",
          first: "lincoln",
          last: "singh"
        },
        location: {
          street: "1804 ward street",
          city: "rotorua",
          state: "west coast",
          zip: 32785
        },
        email: "lincoln.singh@example.com",
        username: "beautifullion743",
        password: "janelle",
        salt: "6uTKAMby",
        md5: "29c06e5fb1112eb152c3aae2353898ab",
        sha1: "043cd68817e750fca6c5d77b702f7d5fa4b4502c",
        sha256:
          "005db958b77395bd9047f3c95e3d998cc3f61155cf7ecbacf082bf7158de73b6",
        registered: 940598923,
        dob: 491230373,
        phone: "(641)-072-2645",
        cell: "(367)-150-0180",
        picture: {
          large: "https://randomuser.me/api/portraits/men/21.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
        }
      }
    }
  ];
  constructor() {}

  ngOnInit() {
    localStorage.setItem("userData", JSON.stringify(this.userList));
  }
  getFullName(name) {
    console.log(name);
    return name.title + "." + name.first + " " + name.last;
  }
}
