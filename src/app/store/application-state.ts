import { INITIAL_STORE_DATA_STATE, StoreData } from './store-data';
import { INITIAL_UI_STATE, UiState } from './ui-state';

export interface ApplicationState {
    uiState: UiState;
    storeData: StoreData;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    uiState: INITIAL_UI_STATE,
    storeData: INITIAL_STORE_DATA_STATE
};
