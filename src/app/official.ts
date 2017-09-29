export class Official {
  api_uri: string;
  at_large: number;
  district: string;
  facebook_account: string;
  first_name: string;
  gender: string;
  id: string;
  img_url: string;
  last_name: string;
  middle_name: string;
  name: string;
  next_election: string;
  party: string;
  role: string;
  seniority: string;
  state: string;
  times_topics_url: string;
  twitter_id: string;
  youtube_id: string;

  // id: number;
  // name: string;
  // title: string;
  // userID: number; // User ID
  // userName: string; // User's name
  // description: string;

  // date: string;
  // timeOfEvent: string; // Actual time of the event
  // timeLeft: number; // Days left to sign up
  // category: number; // Category ID
  // tag: string; // Project tags
  // thumbnail: string; // Path to thumbnail image

  // media: string; // Related media (pictures, videos, URLS, etc.)

  // neighborhood: number; // Neighborhood ID
  // locationName: string;
  // address: string; // Actual address of the event

  // resources_deadline: string;
  // resources: Resource[];
}

export class Contribution {
    user: number;
    amount: number; // amount of money donated, etc
}

export class Resource {
  id: number;
  // project: number; // ID of the project it belongs to
  type: string; // 3 types: funding, volunteer, or donations
  name: string; // Name of resources, e.g. Food&Drink, Room reservation fee (purpose of funding)

  ideal_number: number;
  current_number: number;
  contributions: Contribution[];
}
