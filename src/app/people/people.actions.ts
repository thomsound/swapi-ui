import { createAction, props } from '@ngrx/store';
import { Character } from "../store/character";
import { itemListContainer } from "../store/store-data";

export const loadCharactersStartedAction = createAction(
    '[People] Load Characters Started', props<{ page?: number }>()
);
export const loadCharactersSucceededAction = createAction(
    '[People] Load Characters Success', props<{ characters: itemListContainer<Character> }>()
);
export const loadCharactersFailedAction = createAction('[People] Load Characters Error');
