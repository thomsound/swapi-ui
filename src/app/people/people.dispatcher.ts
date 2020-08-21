import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { loadSingleItemBatchByUrlsStartedAction, loadSingleItemByUrlStartedAction } from '../store/actions';
import { loadCharactersStartedAction, loadSingleCharacterStartedAction } from "./people.actions";


@Injectable()
export class PeopleDispatcher {
    constructor(
        private store: Store
    ) { }

    loadCharacters(page?: string): void {
        this.store.dispatch(loadCharactersStartedAction(page ? { page } : {}) );
    }

    loadCharacterById(id: string): void {
        this.store.dispatch(loadSingleCharacterStartedAction({ id }));
    }

    loadItemByUrl(url: string): void {
        this.store.dispatch(loadSingleItemByUrlStartedAction({ url }));
    }

    loadItemBatchByUrl(urls: string[]): void {
        this.store.dispatch(loadSingleItemBatchByUrlsStartedAction({ urls }));
    }
}
