import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { loadCharactersStartedAction } from "./people.actions";

@Injectable()
export class PeopleDispatcher {
    constructor(
        private store: Store
    ) { }

    loadCharacters(page?: number): void {
        this.store.dispatch(loadCharactersStartedAction({}) );
    }
}
