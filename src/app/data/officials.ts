import { Official, Resource } from './../official';

const piedmont_park_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Clean-up",
        ideal_number: 20,
        current_number: 13,
        contributions: []
    },
]
const inman_park_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 30,
        current_number: 14,
        contributions: []
    }
]
const botanic_garden_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 15,
        current_number: 14,
        contributions: []
    },
    {
        id:1,
        type: "donation",
        name: "Bring bowls and cups!",
        ideal_number: 30,
        current_number: 18,
        contributions: []
    }
]
const womens_march_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 100,
        current_number: 78,
        contributions: []
    },
]
const beekeeping_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 100,
        current_number: 48,
        contributions: []
    },
]
const hike_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 20,
        current_number: 18,
        contributions: []
    },
]
const workshop_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 20,
        current_number: 16,
        contributions: []
    },
]
const cityhall_required_resources: Resource[] = [
    {
        id: 0,
        type: "funding",
        name: "Attandant",
        ideal_number: 20,
        current_number: 9,
        contributions: []
    },
]
const tasteofatl_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 200,
        current_number: 148,
        contributions: []
    },
    {
        id: 1,
        type: "funding",
        name: "Attandant",
        ideal_number: 1000,
        current_number: 395,
        contributions: []
    },
]
const soupkitchen_required_resources: Resource[] = [
    {
        id: 0,
        type: "volunteer",
        name: "Attandant",
        ideal_number: 200,
        current_number: 148,
        contributions: []
    },
    {
        id: 0,
        type: "donation",
        name: "Attandant",
        ideal_number: 400,
        current_number: 382,
        contributions: []
    },
]

export const OFFICIALS: Official[] = [
  {
    id: 2,
    title: `John Lewis`,
    userID: 0,
    userName: 'Jane Doe',
    description: `John Robert Lewis (born February 21, 1940) is an American politician and civil rights leader. He is the U.S. Representative for Georgia's 5th congressional district, serving since 1987, and is the dean of the Georgia congressional delegation. His district includes three quarters of Atlanta.
    \nLewis, who as chairman of the Student Nonviolent Coordinating Committee (SNCC) was one of the "Big Six" leaders of groups who organized the 1963 March on Washington, played many key roles in the Civil Rights Movement and its actions to end legalized racial segregation in the United States. A member of the Democratic Party, Lewis is a member of the Democratic leadership of the U.S. House of Representatives and has served as a Chief Deputy Whip since 1991 and Senior Chief Deputy Whip since 2003.
    \nLewis has been awarded many honorary degrees and is the recipient of numerous awards from eminent national and international institutions, including the highest civil ian honor, the Presidential Medal of Freedom. John Lewis is an amazing person who fought for rights.`,
    date: `Assumed office: January 3, 1987`,
    timeOfEvent: ' In office: June 1963 – May 1966',
    timeLeft: 14,
    category: 1,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: `Member of the U.S. House of Representatives`,
    address: "from Georgia's 5th district",
    thumbnail: `./../../assets/thumbnails/johnLewis.jpg`,
    resources_deadline: ``,
    resources: inman_park_required_resources
  },
  {
    id: 4,
    title: `John Edwards`,
    userID: 0,
    userName: 'John Adams',
    description: `Hi everyone! I just moved to the city and was looking to meet some people in the area. Looking forward to meeting everyone at the hike!`,
    date: `Tuesday, May 16th, 2017`,
    timeOfEvent: '10:00 am - 2:00 pm',
    timeLeft: 6,
    category: 2,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: 'Stone Mountain',
    address: "400 Peachtree Road, Front Entrance",
    thumbnail: `./../../assets/thumbnails/johnEdwards.jpg`,
    resources_deadline: ``,
    resources: hike_required_resources
  },
  {
    id: 5,
    title: `John Kline`,
    userID: 0,
    userName: 'Pam Locke',
    description: `Hey all! This worked is geared for students in the computing and design `,
    date: `Thursday, May 18th, 2017`,
    timeOfEvent: '11:00 am - 1:00 pm',
    timeLeft: 6,
    category: 2,
    tag: 'Workshop, Career',
    media: ``,
    neighborhood: 0,
    locationName: 'City Hall',
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/johnKline.jpg`,
    resources_deadline: ``,
    resources: workshop_required_resources
  },
  {
    id: 6,
    title: `Town Hall Meeting`,
    userID: 0,
    userName: 'Pam Locke',
    description: `Hey all! This worked is geared for students in the computing and design `,
    date: `Wednesday, May 28th, 2017`,
    timeOfEvent: '5:00 pm - 6:00 pm',
    timeLeft: 6,
    category: 2,
    tag: 'Meeting, Community',
    media: ``,
    neighborhood: 0,
    locationName: 'City Hall',
    address: "Atlanta History Center, 560 Peachtree Street",
    thumbnail: `./../../assets/thumbnails/cityhall.jpg`,
    resources_deadline: ``,
    resources: cityhall_required_resources
  },
  {
    id: 8,
    title: `Taste of Atlanta Food Festival`,
    userID: 0,
    userName: 'Sophia Amuraso',
    description: `Help support local restaurants! There'll be over 200 vendors at this all-day event! `,
    date: `Saturday, May 28th, 2017`,
    timeOfEvent: '9:00 am - 6:00 pm',
    timeLeft: 19,
    category: 2,
    tag: 'Food, Community',
    media: ``,
    neighborhood: 0,
    locationName: 'Sandy Springs',
    address: "1560 Peachtree Street",
    thumbnail: `./../../assets/thumbnails/tasteofatl.jpg`,
    resources_deadline: ``,
    resources: tasteofatl_required_resources
  },
  {
    id: 0,
    title: `Piedmont Park Clean-up`,
    userID: 0,
    userName: 'Jane Doe',
    description: `Hi all, I'm looking for volunteers to help beautify our local park!
    Volunteers will be expected to pick up trash around the park, and should arrive by
    10:50 AM. We will be providing boxed lunch for those who will be staying for the
    entirety of the event. If you have any questions, please reach out to me at
    janedoe3710@gmail.com. Please spread the word!`,
    date: `Saturday, April 1st, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 0,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: `Piedmont Park`,
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/piedmont_park.jpg`,
    resources_deadline: ``,
    resources: piedmont_park_required_resources
  },
  {
    id: 1,
    title: `Beekeeping Event at Metro Atlanta Beekeepers Association`,
    userID: 0,
    userName: 'Emily Smith',
    description: `Hi all, the Metro Atlanta Beekeepers Association is hosting a free beekeeping event to educate the community about why keeping the bee population plentiful is imperative to the environment. Join us if you can!`,
    date: `Monday, May 25th, 2017`,
    timeOfEvent: '1:00 pm - 4:00 pm',
    timeLeft: 14,
    category: 2,
    tag: 'Park, Environment, Beekeeping, Gardens',
    media: ``,
    neighborhood: 0,
    locationName: 'Atlanta Botanical Gardens',
    address: "400 Peachtree Dr NE, 18th Street",
    thumbnail: `./../../assets/thumbnails/beekeeping.jpg`,
    resources_deadline: ``,
    resources: beekeeping_required_resources
  },
  {
    id: 3,
    title: `Beautifying Atlanta's Botanical Garden`,
    userID: 0,
    userName: `Jane Doe`,
    description: `Hi all, I'm looking for volunteers to help set up food and drinks for
    an event I'm hosting at Atlanta Botanical Garden! Volunteers will be expected to
    pour food into bowls and pour drinks into cups. Gloves and utensils will be provided.
    Just bring yourself! If you have any questions, please reach out to me at
    janedoe3710@gmail.com. Please spread the word!`,
    date: `Friday, April 12th, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 0,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: 'Atlanta Botanical Garden',
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/botanic_garden.png`,
    resources_deadline: ``,
    resources: botanic_garden_required_resources
  },
    {
    id: 7,
    title: `Soup Kitchen`,
    userID: 0,
    userName: 'Burt Marlowe',
    description: `Support the community by volunteering to help serve food to the
    homeless! `,
    date: `Saturday, April 28th, 2017`,
    timeOfEvent: '9:00 am - 12:00 pm',
    timeLeft: 29,
    category: 2,
    tag: 'Food, Community',
    media: ``,
    neighborhood: 0,
    locationName: 'Atlanta Community Food Bank',
    address: "732 Joseph E Lowery Blvd NW",
    thumbnail: `./../../assets/thumbnails/soupkitchen.jpg`,
    resources_deadline: ``,
    resources: soupkitchen_required_resources
  },
    {
    id: 9,
    title: `Women's March`,
    userID: 0,
    userName: 'Jane Doe',
    description: `Hi all, I'm looking for people to go to the Women's March with! Please
    try to be here by 10:50 AM. If you have any questions, please reach out to me at
    janedoe3710@gmail.com. Please spread the word!`,
    date: `Monday, May 15th, 2017`,
    timeOfEvent: '11:00 am - 2:00 pm',
    timeLeft: 14,
    category: 2,
    tag: 'Park, Environment',
    media: ``,
    neighborhood: 0,
    locationName: 'City Hall',
    address: "400 Park Dr NE, 14th Street",
    thumbnail: `./../../assets/thumbnails/womens_march.png`,
    resources_deadline: ``,
    resources: womens_march_required_resources
  },
];

