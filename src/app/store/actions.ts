import { createAction, props } from '@ngrx/store';
import { StarWarsItem } from '../store/star-wars-item';


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
