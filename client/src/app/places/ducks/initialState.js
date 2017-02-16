/*
*   Initial state, for development
*   [default]
*   initialState: object, contains app seed state
*
*/

const initialState = {
    items: [
        { 
            id: 0,
            itemName: "Oregon Dunes",
            image: "http://i.imgur.com/jCRnDhT.jpg",
            description: "Of course he's a happy little stone, cause we don't have any other kind. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. You need the dark in order to show the light. Nature is so fantastic, enjoy it. Let it make you happy.",
            tags: ["camping", "nature"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 43.8979,
                lng: -124.1348
            },
            visible: true,
            selected: false

        },
        { 
            id: 1,
            itemName: "Cape Perpetua",
            image: "http://i.imgur.com/fD53SR5.jpg",
            description: "This is unplanned it really just happens. Just beat the devil out of it. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is your world. The only thing worse than yellow snow is green snow.",
            tags: ["camping", "hiking"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 44.2853,
                lng: -124.1001
            },
            visible: true,
            selected: false

        },
        { 
            id: 2,
            itemName: "Astoria",
            image: "http://i.imgur.com/L4H99Rh.jpg",
            description: "Work that paint. The man who does the best job is the one who is happy at his job. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.",
            tags: ["culture"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 46.1806,
                lng: -123.8118
            },
            visible: true,
            selected: false

        },
        { 
            id: 3,
            itemName: "Pebble Beach",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/00/1a/b4/e6/pebble-beach.jpg",
            description: "Of course he's a happy little stone, cause we don't have any other kind. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. You need the dark in order to show the light. Nature is so fantastic, enjoy it. Let it make you happy.",
            tags: ["golfing"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 36.5635,
                lng: -121.9306
            },
            visible: true,
            selected: false

        },
        { 
            id: 4,
            itemName: "Canoe on the Rogue River",
            image: "http://i.imgur.com/DfkXAC5.jpg",
            description: "This is unplanned it really just happens. Just beat the devil out of it. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is your world. The only thing worse than yellow snow is green snow.",
            tags: ["boating"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 42.5069,
                lng: -124.1411
            },
            visible: true,
            selected: false

        },
        { 
            id: 5,
            itemName: "Cape Flattery",
            image: "http://i.imgur.com/DkMcQVo.jpg",
            description: "Work that paint. The man who does the best job is the one who is happy at his job. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.",
            tags: ["nature"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 48.3863,
                lng: -124.7074
            },
            visible: true,
            selected: false

        },
        { 
            id: 6,
            itemName: "Huboldt Redwoods State Park",
            image: "http://i.imgur.com/QynKHOc.jpg",
            description: "Work that paint. The man who does the best job is the one who is happy at his job. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.",
            tags: ["nature", "hiking"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 40.3219,
                lng: -123.9105
            },
            visible: true,
            selected: false

        },
        { 
            id: 7,
            itemName: "Santa Cruz",
            image: "http://i.imgur.com/VbIdQTL.jpg",
            description: "Work that paint. The man who does the best job is the one who is happy at his job. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.",
            tags: ["culture", "nightlife", "surfing"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 36.9564,
                lng: -121.9773
            },
            visible: true,
            selected: false

        },
        { 
            id: 8,
            itemName: "Piedras Blancas Elephant Seal Rookery",
            image: "http://i.imgur.com/opgMrq0.jpg",
            description: "Work that paint. The man who does the best job is the one who is happy at his job. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.",
            tags: ["nature"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 35.6618,
                lng: -121.2582
            },
            visible: true,
            selected: false

        }
    ],
    mapBounds: {
        east: -116.0349,
        north: 47.726,
        south: 36.2697,
        west: -127.914
    },
    mapZoom: 6,
    tags: {
        camping: true,
        surfing: false,
        hiking: false,
        nature: false,
        golfing: false,
        boating: false,
        culture: false,
        nightlife: false
    }
};

export default initialState;