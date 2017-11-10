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
}

export class OfficialDetail {
  bio: string;
  office: string;
}

export class OfficialBills {
  bill_info: string;
  votes_info: string;
}
