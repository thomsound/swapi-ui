import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Categories } from '../category-list/categories';
import { loadCharactersSucceededAction } from '../people/people.actions';
import { loadSingleItemBatchByUrlsSucceededAction, loadSingleItemByUrlSucceededAction } from './actions';
import { ApplicationState } from './application-state';
import { StarWarsItem } from './star-wars-item';
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
    })),
    on(loadSingleItemByUrlSucceededAction, (state, { item }) => addSingleItemToState(state, item)),
    on(loadSingleItemBatchByUrlsSucceededAction, (state, { items }) => {
        let tmpState = state;
        for (let i = 0; i < items.length; i++) {
            tmpState = addSingleItemToState(tmpState, items[i])
        }
        return tmpState;
    }),
);

function addSingleItemToState(state: StoreData, item: StarWarsItem) {
    const category = getCategory(item.url);
    return category === null ? state : {
        ...state,
        [category]: {
            ...state[category],
            entries: {
                ...state[category]?.entries,
                [item.url]: item
            }
        }
    }
}

function getCategory(url: string) {
    const categories = Object.values(Categories).map(c => c + '');
    const baseUrl = environment.apiServer + environment.apiPrefix + '/';
    const tail = url.substring(baseUrl.length - 1);
    const category = tail.substring(0, tail.indexOf("/"));
    return categories.includes(category) ? category : null;
}

export function reducer(state: StoreData | undefined, action: Action) {
    return storeDataReducer(state, action);
}

export const selectStoreData = createFeatureSelector<ApplicationState, StoreData>('storeData');

export const selectItemListContainerByUrl = (url: string) => createSelector(selectStoreData, state => {
    if (!url) return;
    const category = getCategory(url);
    return state && state[ category ];
})
export const selectCategoryEntriesByUrl = (url: string) => createSelector(selectItemListContainerByUrl(url), state => state?.entries);
export const selectItemByUrl = (url: string) => createSelector(selectCategoryEntriesByUrl(url), state => state && state[ url ]);

export const selectPeopleListContainer = createSelector(selectStoreData, state => state.people);
export const selectPeopleEntries = createSelector(selectPeopleListContainer, state => state.entries);
export const selectCharacterById = (id: string) => createSelector(selectPeopleEntries, peopleEntries => peopleEntries && peopleEntries[ id ]);
