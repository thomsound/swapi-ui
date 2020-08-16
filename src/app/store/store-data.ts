import { Character } from "./character";
import { Film } from "./film";
import { Planet } from "./planet";
import { Species } from "./species";
import { Starship } from "./starship";
import { Vehicle } from "./vehicle";

export interface StoreData {
    people: itemListContainer<Character>;
    films: itemListContainer<Film>;
    starships: itemListContainer<Starship>;
    vehicles: itemListContainer<Vehicle>;
    species: itemListContainer<Species>;
    planets: itemListContainer<Planet>;
}

export interface itemListContainer<T> {
    count: number,
    previous: string,
    next: string,
    entries: { [ key: string ]: T }
}

export const INITIAL_STORE_DATA_STATE: StoreData = {
    people: { count: undefined, previous: undefined, next: undefined, entries: undefined},
    films: { count: undefined, previous: undefined, next: undefined, entries: undefined},
    starships: { count: undefined, previous: undefined, next: undefined, entries: undefined},
    vehicles: { count: undefined, previous: undefined, next: undefined, entries: undefined},
    species: { count: undefined, previous: undefined, next: undefined, entries: undefined},
    planets: { count: undefined, previous: undefined, next: undefined, entries: undefined}
}
