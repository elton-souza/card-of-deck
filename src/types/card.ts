export interface CardList {
  results: {
    name: string;
    url: string;
  }[];
}

export interface CardBase {
  name: string;
  id: string;
  points: number;
}
export interface CardInfo extends CardBase {
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}
