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
            itemName: "Happy Camp",
            image: "http://lorempixel.com/300/300/sports/",
            description: "Of course he's a happy little stone, cause we don't have any other kind. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. You need the dark in order to show the light. Nature is so fantastic, enjoy it. Let it make you happy.",
            tags: ["camping", "nature"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 46.0623,
                lng: -123.8892
            },
            visible: true,
            selected: false

        },
        { 
            id: 1,
            itemName: "Super Camp",
            image: "http://lorempixel.com/300/300/nature/",
            description: "This is unplanned it really just happens. Just beat the devil out of it. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is your world. The only thing worse than yellow snow is green snow.",
            tags: ["camping", "hiking"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 40.4630,
                lng: -123.9395
            },
            visible: true,
            selected: false

        },
        { 
            id: 2,
            itemName: "Mega Camp",
            image: "http://lorempixel.com/300/300/animals/",
            description: "Work that paint. The man who does the best job is the one who is happy at his job. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it.",
            tags: ["camping", "surfing"],
            coords: // google.maps.LatLngLiteral
            {
                lat: 34.4721,
                lng: -119.7009
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
    activeTag: "camping",
    tags: {
        camping: true,
        surfing: false,
        hiking: false,
        nature: false
    }
};

export default initialState;