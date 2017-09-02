export class Contribution {
    user: number;
    amount: number; // amount of money donated, etc
}

export class Resource {
  id: number;
  type: string; // 3 types: funding, volunteer, or donation
  name: string; // Name of resources, e.g. Food&Drink, Room reservation fee (purpose of funding)

  ideal_number: number;
  current_number: number;
  contributions: Contribution[];
}
