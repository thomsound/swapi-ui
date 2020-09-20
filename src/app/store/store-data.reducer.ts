import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Categories } from '../category-list/categories';
import Util from '../_util/util';
import { loadItemsSucceededAction, loadSingleItemBatchByUrlsSucceededAction, loadSingleItemByUrlSucceededAction } from './actions';
import { ApplicationState } from './application-state';
import { StarWarsItem } from './star-wars-item';
import { INITIAL_STORE_DATA_STATE, StoreData } from './store-data';

export const storeSliceKey = 'storeData';

const storeDataReducer = createReducer(
    INITIAL_STORE_DATA_STATE,
    on(loadItemsSucceededAction, (state, { category, items }) => {
        return {
            ...state,
            [ category ]: {
                count: items.count,
                previous: items.previous,
                next: items.next,
                entries: {
                    ...state[ category ].entries,
                    ...items.entries,
                }
            }
        };
    }),
    on(loadSingleItemByUrlSucceededAction, (state, { item }) => addSingleItemToState(state, item)),
    on(loadSingleItemBatchByUrlsSucceededAction, (state, { items }) => {
        let tmpState = { ...state };
        for (const currentItem of items) {
            tmpState = addSingleItemToState(tmpState, currentItem);
        }
        return tmpState;
    }),
);

function addSingleItemToState(state: StoreData, item: StarWarsItem): StoreData {
    const category = Categories[Util.getCategoryByUrl(item.url)];
    return category === null ? state : {
        ...state,
        [ category ]: {
            ...state[ category ],
            entries: {
                ...state[ category ]?.entries,
                [ item.url ]: item
            }
        }
    };
}

export function reducer(state: StoreData | undefined, action: Action): StoreData {
    return storeDataReducer(state, action);
}

export const selectStoreData = createFeatureSelector<ApplicationState, StoreData>('storeData');

export const selectItemListContainerByCategory = (category: string) =>
    createSelector(selectStoreData, state => state && state[ category ]);
export const selectItemEntriesByCategory = (category: string) =>
    createSelector(selectItemListContainerByCategory(category), state => state?.entries);
export const selectItemByCategory = (category: string) =>
    createSelector(selectItemEntriesByCategory(category), state => state && state[ category ]);

export const selectItemListContainerByUrl = (url: string) => createSelector(selectStoreData, state => {
    if (!url) { return; }
    const category = Categories[ Util.getCategoryByUrl(url) ];
    return state && state[ category ];
});
export const selectCategoryEntriesByUrl = (url: string) =>
    createSelector(selectItemListContainerByUrl(url), state => state?.entries);
export const selectItemByUrl = (url: string) =>
    createSelector(selectCategoryEntriesByUrl(url), state => state && state[ url ]);

export const selectPeopleListContainer = createSelector(selectStoreData, state => state.people);
export const selectPeopleEntries = createSelector(selectPeopleListContainer, state => state.entries);
export const selectCharacterById = (id: string) =>
    createSelector(selectPeopleEntries, peopleEntries => peopleEntries && peopleEntries[ id ]);
