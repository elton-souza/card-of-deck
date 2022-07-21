export interface CardList {
  results: CardBase[];
}

export interface CardBase {
  name: string;
  id: string;
  points: number;
}
export interface CardInfo extends CardBase {
  sprites:{
    front_default: string;
    other:{
      dream_world: {
        front_default: string;
      },
    }
  }
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}
