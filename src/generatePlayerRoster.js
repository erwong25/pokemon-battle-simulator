// @flow
import { POKEMONS } from "./pokemon";
import calculateMaxHP from "./calculateMaxHP";

export default function generatePlayerRoster(roster: Array): Map {
  const playerRoster = new Map();
  for (let i = 0; i < roster.length; i++) {
    playerRoster.set("pokemon" + (i + 1), {
      pokemon: POKEMONS[roster[i]],
      currentHP: calculateMaxHP(POKEMONS[roster[i]]),
    });
  }
  return playerRoster;
}
