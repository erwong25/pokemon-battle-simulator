// @flow
import type { Pokemon } from "./pokemon.js";

export default function calculateMaxHP(pokemon: Pokemon): number {
  return pokemon.stats.maxHp * 2 + 110;
}
