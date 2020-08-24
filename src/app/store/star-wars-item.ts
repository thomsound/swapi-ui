
export interface Character {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    name: string;
    skin_color: string;
    url: string;
    people: string[];
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

export interface Film {
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: Date;
    title: string;
    url: string;
    people: string[];
    planets: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

export interface Planet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    url: string;
    created: string;
    edited: string;
    films: string[];
    people: string[];
}

export interface Species {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    hair_colors: string;
    language: string;
    name: string;
    skin_colors: string;
    url: string;
    planets: string[];
    films: string[];
    people: string[];
}

export interface Starship {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    MGLT: string;
    model: string;
    name: string;
    passengers: string;
    starship_class: string;
    url: string;
    films: string[];
    people: string[];
}

export interface Vehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    url: string;
    vehicle_class: string;
    films: string[];
    people: string[];
}

export type StarWarsItem = Character
    | Film
    | Planet
    | Species
    | Starship
    | Vehicle;
