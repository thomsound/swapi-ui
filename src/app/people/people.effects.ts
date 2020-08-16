import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SwapiService } from '../swapi.service';
import {
    loadCharactersFailedAction, loadCharactersStartedAction,
    loadCharactersSucceededAction
} from './people.actions';

@Injectable()
export class PeopleEffects {
    loadCharacters$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCharactersStartedAction.type),
            mergeMap(() =>
                this.service
                    .getCharacters()
                    .pipe(
                        map((characters) => loadCharactersSucceededAction({ characters })),
                        catchError(() => of(loadCharactersFailedAction())),
                    ),
            ),
        ),
    );

    constructor(private actions$: Actions, private service: SwapiService) {}
}
