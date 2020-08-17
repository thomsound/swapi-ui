import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loadCharactersSucceededAction } from '../people/people.actions';
import { ApplicationState } from './application-state';
import { INITIAL_STORE_DATA_STATE, StoreData } from './store-data';

export const storeSliceKey = 'storeData';

const storeDataReducer = createReducer(
    INITIAL_STORE_DATA_STATE,
    on(loadCharactersSucceededAction, (state, { characters }) => ({
        ...state,
        people: {
            count: characters.count,
            previous: characters.previous,
            next: characters.next,
            entries: {
                ...state?.people?.entries,
                ...characters.entries,
            }
        }
    }))
);

export function reducer(state: StoreData | undefined, action: Action) {
    return storeDataReducer(state, action);
}

export const selectStoreData = createFeatureSelector<ApplicationState, StoreData>('storeData');

export const selectPeopleListContainer = createSelector(selectStoreData, state => state.people);
export const selectFilmListContainer = createSelector(selectStoreData, state => state.films);
export const selectStarshipsListContainer = createSelector(selectStoreData, state => state.starships);
export const selectVehiclesListContainer = createSelector(selectStoreData, state => state.vehicles);
export const selectSpeciesListContainer = createSelector(selectStoreData, state => state.species);
export const selectPlanetsListContainer = createSelector(selectStoreData, state => state.planets);

export const selectPeopleEntries = createSelector(selectPeopleListContainer, state => state.entries);

export const selectCharacterById = (id: string) => createSelector(selectPeopleEntries, peopleEntries => peopleEntries[ id ]);
