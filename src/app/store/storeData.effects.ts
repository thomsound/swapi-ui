import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SwapiService } from '../swapi.service';
import {
    loadItemsFailedAction,
    loadItemsStartedAction,
    loadItemsSucceededAction, loadSingleItemBatchByUrlsFailedAction,
    loadSingleItemBatchByUrlsStartedAction,
    loadSingleItemBatchByUrlsSucceededAction,
    loadSingleItemByUrlFailedAction,
    loadSingleItemByUrlStartedAction,
    loadSingleItemByUrlSucceededAction
} from './actions';

@Injectable()
export class StoreDataEffects {
    loadItems$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loadItemsStartedAction),
            mergeMap((action) =>
                this.service
                    .getItems(action.category, action.page)
                    .pipe(
                        map((items) => loadItemsSucceededAction({ category: action.category, items })),
                        catchError(() => of(loadItemsFailedAction())),
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
                this.service
                    .getItemBatchByUrls(action.urls)
                    .pipe(
                        map((items) => loadSingleItemBatchByUrlsSucceededAction({ items })),
                        catchError(() => of(loadSingleItemBatchByUrlsFailedAction())),
                    ),
            ),
        ),
    );

    constructor(private actions$: Actions, private service: SwapiService) {}
}
