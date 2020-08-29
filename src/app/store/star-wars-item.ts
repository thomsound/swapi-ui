interface Item {
    category: string;
    created: string;
    edited: string;
    url: string;
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
    filmsLabel: string;
    films: string[];
    speciesLabel: string;
    species: string[];
    starshipsLabel: string;
    starships: string[];
    vehiclesLabel: string;
    vehicles: string[];
}

export interface Film extends Item {
    director: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: Date;
    title: string;
    peopleLabel: string;
    people: string[];
    planetsLabel: string;
    plantes: string[];
    speciesLabel: string;
    species: string[];
    starshipsLabel: string;
    starships: string[];
    vehiclesLabel: string;
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
    filmsLabel: string;
    films: string[];
    peopleLabel: string;
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
    planetsLabel: string;
    plantes: string[];
    filmsLabel: string;
    films: string[];
    peopleLabel: string;
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
    filmsLabel: string;
    films: string[];
    peopleLabel: string;
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
    filmsLabel: string;
    films: string[];
    peopleLabel: string;
    people: string[];
}



export type StarWarsItem = Character
    | Film
    | Planet
    | Species
    | Starship
    | Vehicle;
