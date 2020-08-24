import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import Util from 'src/app/_util/util';
import { StoreDataDispatcher } from '../../store/storeData.dispatcher';

@Injectable()
export class ItemListResolver implements Resolve<void> {

    constructor(
        private dispatcher: StoreDataDispatcher,
        private router: Router
    ) { }

    resolve( route: ActivatedRouteSnapshot ): void {
        const category = route.params.category;

        if (category && Util.isValidCategoryString(category)) {
            this.dispatcher.loadItems( category );
        } else {
            this.router.navigate([ '/' ]);
        }
    }
}
