import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
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
}
