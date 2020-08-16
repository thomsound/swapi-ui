export interface UiState {
    currentItemId: number;
    currentError?: string;
}

export const INITIAL_UI_STATE: UiState = {
    currentItemId: undefined,
    currentError: undefined
}
