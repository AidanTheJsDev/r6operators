import { IOperator } from "~/types/operator"

export const doc: IOperator = {
  name: "Doc",
  role: "Defender",
  unit: "WOLFGUARD",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "fr",
    season: "Release",
    height: 177,
    weight: 79,
  },
  bio: {
    real_name: "Gustave Kateb",
    birthplace: "Paris, France",
  },
}
