import { createAction, props } from '@ngrx/store';
import { Character } from '../store/character';
import { itemListContainer } from '../store/store-data';

export const loadCharactersStartedAction = createAction('[People] Load Characters Started', props<{ page?: string }>());
export const loadCharactersSucceededAction = createAction(
    '[People] Load Characters Success',
    props<{ characters: itemListContainer<Character> }>(),
);
export const loadCharactersFailedAction = createAction('[People] Load Characters Error');

export const loadSingleCharacterStartedAction = createAction(
    '[People] Load Single Character Started',
    props<{ id: string }>(),
);
