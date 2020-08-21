import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
    loadSingleItemBatchByUrlsFailedAction, loadSingleItemBatchByUrlsStartedAction,
    loadSingleItemBatchByUrlsSucceededAction, loadSingleItemByUrlFailedAction,
    loadSingleItemByUrlStartedAction,
    loadSingleItemByUrlSucceededAction
} from '../store/actions';
import { SwapiService } from '../swapi.service';
import {
    loadCharactersFailedAction,
    loadCharactersStartedAction,
    loadCharactersSucceededAction
} from './people.actions';

@Injectable()
export class PeopleEffects {
    loadCharacters$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCharactersStartedAction),
            mergeMap((action) =>
                this.service
                    .getCharacters(action.page)
                    .pipe(
                        map((characters) => loadCharactersSucceededAction({ characters })),
                        catchError(() => of(loadCharactersFailedAction())),
                    ),
            ),
        ),
    );

    loadSingleItem$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadSingleItemByUrlStartedAction),
            mergeMap((action) =>
                this.service
                    .getItemByUrl(action.url)
                    .pipe(
                        map((item) => loadSingleItemByUrlSucceededAction({ item })),
                        catchError(() => of(loadSingleItemByUrlFailedAction())),
                    ),
            ),
        ),
    );

    loadSingelItemBatch$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadSingleItemBatchByUrlsStartedAction),
            mergeMap((action) =>
                this.service.getItemBatchByUrls(action.urls).pipe(
                    map(items => loadSingleItemBatchByUrlsSucceededAction({ items })),
                    catchError(() => of(loadSingleItemBatchByUrlsFailedAction())),
                )
            )
        ),
    );

    constructor(
        private actions$: Actions,
        private service: SwapiService,
    ) { }
}
