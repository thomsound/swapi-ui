export interface IconMenuConfig {
    defaultLabel?: string;
    entries: IconMenuItem[];
}

export interface IconMenuItem {
    id: string;
    label?: string;
    iconId: string;
    disabled?: boolean;
}
