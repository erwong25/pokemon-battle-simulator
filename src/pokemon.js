// @flow

import { animatedSpriteList, staticSpriteList } from "./spritesList";
import type { Type } from "./types";
import type { Move } from "./moves";
import { MOVES } from "./moves";

type Stats = {
  atk: number,
  def: number,
  spAtk: number,
  spDef: number,
  sp: number,
  maxHp: number,
  currentHp: number, // this should actually be moved into a state variable somewhere, can you figure out how?
};

export type Pokemon = {
  stats: Stats,
  name: string,
  types: Array<Type>,
  moves: Array<Move>,
};

export const BULBASAUR: Pokemon = {
  idNumber: 1,
  staticSprite: staticSpriteList.sprite1,
  animatedSprite: animatedSpriteList.sprite1,
  moves: [],
  name: "Bulbasaur",
  types: ["Grass", "Poison"],
  stats: {
    atk: 49,
    def: 49,
    spAtk: 65,
    spDef: 65,
    sp: 45,
    maxHp: 45,
    currentHp: 45,
  },
};

export const IVYSAUR: Pokemon = {
  idNumber: 2,
  staticSprite: staticSpriteList.sprite2,
  animatedSprite: animatedSpriteList.sprite2,
  moves: [],
  name: "Ivysaur",
  types: ["Grass", "Poison"],
  stats: {
    atk: 62,
    def: 63,
    spAtk: 80,
    spDef: 80,
    sp: 60,
    maxHp: 60,
    currentHp: 60,
  },
};

export const VENUSAUR: Pokemon = {
  idNumber: 3,
  staticSprite: staticSpriteList.sprite3,
  animatedSprite: animatedSpriteList.sprite3,
  moves: [],
  name: "Venusaur",
  types: ["Grass", "Poison"],
  stats: {
    atk: 82,
    def: 83,
    spAtk: 100,
    spDef: 100,
    sp: 80,
    maxHp: 80,
    currentHp: 80,
  },
};

export const CHARMANDER: Pokemon = {
  idNumber: 4,
  staticSprite: staticSpriteList.sprite4,
  animatedSprite: animatedSpriteList.sprite4,
  moves: [],
  name: "Charmander",
  types: ["Fire"],
  stats: {
    atk: 52,
    def: 43,
    spAtk: 60,
    spDef: 50,
    sp: 65,
    maxHp: 39,
    currentHp: 39,
  },
};

export const CHARMELEON: Pokemon = {
  idNumber: 5,
  staticSprite: staticSpriteList.sprite5,
  animatedSprite: animatedSpriteList.sprite5,
  moves: [],
  name: "Charmeleon",
  types: ["Fire"],
  stats: {
    atk: 64,
    def: 58,
    spAtk: 80,
    spDef: 65,
    sp: 80,
    maxHp: 58,
    currentHp: 58,
  },
};

export const CHARIZARD: Pokemon = {
  idNumber: 6,
  staticSprite: staticSpriteList.sprite6,
  animatedSprite: animatedSpriteList.sprite6,
  moves: [],
  name: "Charizard",
  types: ["Fire", "Flying"],
  stats: {
    atk: 84,
    def: 78,
    spAtk: 109,
    spDef: 85,
    sp: 100,
    maxHp: 78,
    currentHp: 78,
  },
};

export const SQUIRTLE: Pokemon = {
  idNumber: 7,
  staticSprite: staticSpriteList.sprite7,
  animatedSprite: animatedSpriteList.sprite7,
  moves: [],
  name: "Squirtle",
  types: ["Water"],
  stats: {
    atk: 48,
    def: 65,
    spAtk: 50,
    spDef: 64,
    sp: 43,
    maxHp: 44,
    currentHp: 44,
  },
};

export const WARTORTLE: Pokemon = {
  idNumber: 8,
  staticSprite: staticSpriteList.sprite8,
  animatedSprite: animatedSpriteList.sprite8,
  moves: [],
  name: "Wartortle",
  types: ["Water"],
  stats: {
    atk: 63,
    def: 80,
    spAtk: 65,
    spDef: 80,
    sp: 58,
    maxHp: 59,
    currentHp: 59,
  },
};

export const BLASTOISE: Pokemon = {
  idNumber: 9,
  staticSprite: staticSpriteList.sprite9,
  animatedSprite: animatedSpriteList.sprite9,
  moves: [],
  name: "Blastoise",
  types: ["Water"],
  stats: {
    atk: 83,
    def: 100,
    spAtk: 85,
    spDef: 105,
    sp: 78,
    maxHp: 79,
    currentHp: 79,
  },
};

export const NIDORINO: Pokemon = {
  idNumber: 33,
  staticSprite: staticSpriteList.sprite33,
  animatedSprite: animatedSpriteList.sprite33,
  moves: [MOVES.POISON_JAB, MOVES.HORN_ATTACK, MOVES.DRILL_RUN],
  name: "Nidorino",
  types: ["Poison"],
  stats: {
    atk: 72,
    def: 57,
    spAtk: 55,
    spDef: 55,
    sp: 65,
    maxHp: 61,
    currentHp: 61,
  },
};

export const GENGAR: Pokemon = {
  idNumber: 94,
  staticSprite: staticSpriteList.sprite94,
  animatedSprite: animatedSpriteList.sprite94,
  moves: [MOVES.SHADOW_BALL, MOVES.POLTERGEIST, MOVES.LICK],
  name: "Gengar",
  types: ["Poison", "Ghost"],
  stats: {
    atk: 65,
    def: 60,
    spAtk: 130,
    spDef: 75,
    sp: 110,
    maxHp: 60,
    currentHp: 60,
  },
};

export const ARTICUNO: Pokemon = {
  idNumber: 144,
  staticSprite: staticSpriteList.sprite144,
  animatedSprite: animatedSpriteList.sprite144,
  moves: [],
  name: "Articuno",
  types: ["Ice", "Flying"],
  stats: {
    atk: 85,
    def: 100,
    spAtk: 95,
    spDef: 125,
    sp: 85,
    maxHp: 90,
    currentHp: 90,
  },
};

export const ZAPDOS: Pokemon = {
  idNumber: 145,
  staticSprite: staticSpriteList.sprite145,
  animatedSprite: animatedSpriteList.sprite145,
  moves: [],
  name: "Zapdos",
  types: ["Electric", "Flying"],
  stats: {
    atk: 90,
    def: 85,
    spAtk: 125,
    spDef: 90,
    sp: 100,
    maxHp: 90,
    currentHp: 90,
  },
};

export const MOLTRES: Pokemon = {
  idNumber: 146,
  staticSprite: staticSpriteList.sprite146,
  animatedSprite: animatedSpriteList.sprite146,
  moves: [],
  name: "Moltres",
  types: ["Fire", "Flying"],
  stats: {
    atk: 100,
    def: 90,
    spAtk: 125,
    spDef: 85,
    sp: 90,
    maxHp: 90,
    currentHp: 90,
  },
};

export const DRAGONITE: Pokemon = {
  idNumber: 149,
  staticSprite: staticSpriteList.sprite149,
  animatedSprite: animatedSpriteList.sprite149,
  moves: [],
  name: "Dragonite",
  types: ["Dragon", "Flying"],
  stats: {
    atk: 134,
    def: 95,
    spAtk: 100,
    spDef: 100,
    sp: 80,
    maxHp: 91,
    currentHp: 91,
  },
};

export const MEWTWO: Pokemon = {
  idNumber: 150,
  staticSprite: staticSpriteList.sprite150,
  animatedSprite: animatedSpriteList.sprite150,
  moves: [],
  name: "Dragonite",
  types: ["Dragon", "Flying"],
  stats: {
    atk: 110,
    def: 90,
    spAtk: 154,
    spDef: 90,
    sp: 130,
    maxHp: 106,
    currentHp: 106,
  },
};

export const POKEMONS = {
  BULBASAUR,
  IVYSAUR,
  VENUSAUR,
  SQUIRTLE,
  CHARMANDER,
  CHARMELEON,
  CHARIZARD,
  WARTORTLE,
  BLASTOISE,
  NIDORINO,
  GENGAR,
  ARTICUNO,
  ZAPDOS,
  MOLTRES,
  DRAGONITE,
  MEWTWO,
};