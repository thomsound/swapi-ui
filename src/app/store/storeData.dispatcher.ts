import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    loadItemsStartedAction, loadSingleItemBatchByUrlsStartedAction,
    loadSingleItemByUrlStartedAction
} from './actions';

@Injectable()
export class StoreDataDispatcher {
    constructor(private store: Store) {}

    loadItems(category: string, page?: string): void {
        this.store.dispatch(loadItemsStartedAction({ category, page }));
    }

    loadItemByUrl(url: string): void {
        this.store.dispatch(loadSingleItemByUrlStartedAction({ url }));
    }

    loadItemBatchByUrl(urls: string[]): void {
        this.store.dispatch(loadSingleItemBatchByUrlsStartedAction({ urls }));
    }
}
