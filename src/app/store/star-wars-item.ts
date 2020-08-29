interface Item {
    category: string;
    created: string;
    edited: string;
    url: string;
    peopleLabel?: string;
    filmsLabel?: string;
    planetsLabel?: string;
    speciesLabel?: string;
    vehiclesLabel?: string;
    starshipsLabel?: string;
}

export interface Character extends Item {
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    name: string;
    skin_color: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

export interface Film extends Item {
    director: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: Date;
    title: string;
    people: string[];
    planets: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

export interface Planet extends Item {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    films: string[];
    people: string[];
}

export interface Species extends Item {
    average_height: string;
    average_lifespan: string;
    classification: string;
    designation: string;
    eye_colors: string;
    hair_colors: string;
    language: string;
    name: string;
    skin_colors: string;
    planets: string[];
    films: string[];
    people: string[];
}

export interface Starship extends Item {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    MGLT: string;
    model: string;
    name: string;
    passengers: string;
    starship_class: string;
    films: string[];
    people: string[];
}

export interface Vehicle extends Item {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    crew: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
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
