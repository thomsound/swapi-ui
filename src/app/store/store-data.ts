import { Character, Film, Planet, Species, Starship, Vehicle } from './star-wars-item';

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
    people: { count: 0, previous: null, next: null, entries: {}},
    films: { count: 0, previous: null, next: null, entries: {}},
    starships: { count: 0, previous: null, next: null, entries: {}},
    vehicles: { count: 0, previous: null, next: null, entries: {}},
    species: { count: 0, previous: null, next: null, entries: {}},
    planets: { count: 0, previous: null, next: null, entries: {}},
}
