export class User {
  id: number;
  name: string;
  type: Boolean; // true for community org account
  bio: string;
  profile_pic: string; // Path to profile picture

  phone_number: string;
  email: string;
  password: string;

  // id: number;

  // username: string;
  // name: string;
  // phone: string;
  // email: string;

  // bio: string;
  // profile_pic: string; // Path to thumbnail image
  // date: string; // Date of join
  // neighborhood: number; // Neighborhood ID

  // project_interested: Project[];
  // project_contributed: Project[];
  // project_created: Project[];
}

export const USERS: User[] = [
  {
    id: 0,
    name: `Jane Doe`,
    type: false,
    bio: `Hi I'm Jane Doe!`,
    profile_pic: `../../assets/icons/profile-pic.png`,
    phone_number: `770-000-3710`,
    email: "jane.doe@gmail.com",
    password: "notjanedoe"
  },
    {
    id: 1,
    name: `Jane Doe`,
    type: false,
    bio: `Hi I'm Jane Doe!`,
    profile_pic: `../../assets/icons/profile-pic.png`,
    phone_number: `770-000-3710`,
    email: "jane.doe@gmail.com",
    password: "notjanedoe"
  },
    {
    id: 2,
    name: `Jane Doe`,
    type: false,
    bio: `Hi I'm Jane Doe!`,
    profile_pic: `../../assets/icons/profile-pic.png`,
    phone_number: `770-000-3710`,
    email: "jane.doe@gmail.com",
    password: "notjanedoe"
  }
]