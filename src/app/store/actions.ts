import { createAction, props } from '@ngrx/store';
import { StarWarsItem } from '../store/star-wars-item';
import { itemListContainer } from './store-data';


export const loadItemsStartedAction = createAction('[Global] Load Items Started', props<{ category: string, page?: string }>());
export const loadItemsSucceededAction = createAction(
    '[Global] Load Items Success',
    props<{ category: string, items: itemListContainer<StarWarsItem> }>(),
);
export const loadItemsFailedAction = createAction('[Global] Load Items Error');

export const loadSingleItemByUrlFailedAction = createAction('[Global] Load Single Item Error');
export const loadSingleItemByUrlStartedAction = createAction(
    '[Global] Load Single Item Started',
    props<{ url: string }>(),
);
export const loadSingleItemByUrlSucceededAction = createAction(
    '[Global] Load Single Item Success',
    props<{ item: StarWarsItem }>(),
);

export const loadSingleItemBatchByUrlsFailedAction = createAction('[Global] Load Single Item Batch Error');
export const loadSingleItemBatchByUrlsStartedAction = createAction(
    '[Global] Load Single Item Batch Started',
    props<{ urls: string[] }>(),
);
export const loadSingleItemBatchByUrlsSucceededAction = createAction(
    '[Global] Load Single Item Batch Success',
    props<{ items: StarWarsItem[] }>(),
);
