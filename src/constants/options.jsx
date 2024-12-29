export const SelectTravelsList=[
    {
        id:1,
        title:'Solo',
        desc:'A Sole traveler in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'Couple',
        desc:'Two travelers in tandem',
        icon:'🥂',
        people:'2'
    },
    {
        id:1,
        title:'Family',
        desc:'A group of fun loving adventure',
        icon:'🏡',
        people:'3-5'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill seekers',
        icon:'🏝️',
        people:'5+'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay concious of cost',
        icon:'💵'
    },
    {
        id:1,
        title:'Moderate',
        desc:'Keep cost on average side',
        icon:'💰'
    },
    {
        id:1,
        title:'Luxury',
        desc:'Andhadhoon Paisa',
        icon:'💸'
    }
]

export const AI_PROMPT='Generate Travel Plan for Location: {location} for {totalDays} Days for {traveller} with a {budget} budget, give me a hotel options list with hotel name, Hotel address, Price, hotel image url,geo coordinates,rating,description and suggest itinerary with place name, place details, place image url, gro coordinates, ticket pricing,rating,travel time each of the location for {totalDays} days with each day plan and best time to visit in JSON format.'