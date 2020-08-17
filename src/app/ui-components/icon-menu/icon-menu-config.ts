export interface IconMenuConfig {
    defaultLabel?: string;
    entries: IconMenuItem[];
}

export interface IconMenuItem {
    label: string;
    iconId: string;
}
