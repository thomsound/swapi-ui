import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Util from 'src/app/_util/util';
import { StarWarsItem } from '../../store/star-wars-item';
import { selectItemEntriesByCategory, selectPeopleEntries } from '../../store/store-data.reducer';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: [ './item-list.component.scss' ],
})
export class ItemListComponent {

    items$: Observable<{ [ key: string ]: StarWarsItem }>;
    category: string

    constructor(private store: Store, private route: ActivatedRoute) {
        const category = route.snapshot.params.category;

        if (category && Util.isValidCategoryString(category)) {
            this.category = category.toUpperCase();
            this.items$ = this.store.select(selectItemEntriesByCategory(category));
        } else {
            this.category = 'PEOPLE';
            this.items$ = this.store.select(selectPeopleEntries);
        }
    }
}
