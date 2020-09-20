import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Categories } from 'src/app/category-list/categories';
import { Character, Film, Planet, Species, Starship, StarWarsItem, Vehicle } from 'src/app/store/star-wars-item';
import { selectItemByUrl } from 'src/app/store/store-data.reducer';
import { IconMenuConfig, IconMenuItem } from 'src/app/ui-components/icon-menu/icon-menu-config';
import { StoreDataDispatcher } from '../../store/storeData.dispatcher';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: [ './item.component.scss' ],
})
export class ItemComponent {
    @Input('item') set setItem(item: any) { this.init(item); }

    iconMenuConfig: IconMenuConfig;
    item: any;
    selected = -1;

    data: { [ key: string ]: Observable<StarWarsItem[]> } = {};

    constructor(
        private store: Store,
        private dispatcher: StoreDataDispatcher,
    ) { }

    iconMenuClick(idx: number): void {
        this.setSelected(idx);
        const category = this.iconMenuConfig.entries[ idx ].id;
        this.dispatcher.loadItemBatchByUrls(this.item[category]);
    }

    setSelected(idx: number): void {
        this.selected = idx;
    }

    private init(item: any): void {
        this.item = item;
        const entries: IconMenuItem[] = [];

        if (item.people) {
            const id = Categories.PEOPLE.toString();
            entries.push({
                id,
                label: item.peopleLabel || id,
                iconId: 'group',
                disabled: item.people.length <= 0,
            });
            this.addData(id, item as Character);
        }
        if (item.species) {
            const id = Categories.SPECIES.toString();
            entries.push({
                id,
                label: item.speciesLabel || id,
                iconId: 'male',
                disabled: item.species.length <= 0,
            });
            this.addData(id, item as Species);
        }
        if (item.planets) {
            const id = Categories.PLANETS.toString();
            entries.push({
                id,
                label: item.planetsLabel || id,
                iconId: 'star',
                disabled: item.planets.length <= 0,
            });
            this.addData(id, item as Planet);
        }
        if (item.films) {
            const id = Categories.FILMS.toString();
            entries.push({
                id,
                label: item.filmsLabel || id,
                iconId: 'film',
                disabled: item.films.length <= 0,
            });
            this.addData(id, item as Film);
        }
        if (item.vehicles) {
            const id = Categories.VEHICLES.toString();
            entries.push({
                id,
                label: item.vehiclesLabel || id,
                iconId: 'truck',
                disabled: item.vehicles.length <= 0,
            });
            this.addData(id, item as Vehicle);
        }
        if (item.starships) {
            const id = Categories.STARSHIPS.toString();
            entries.push({
                id,
                label: item.starshipsLabel || id,
                iconId: 'space-shuttle',
                disabled: item.starships.length <= 0,
            });
            this.addData(id, item as Starship);
        }

        this.iconMenuConfig = { defaultLabel: 'characteristics', entries };
    }

    private addData<T extends StarWarsItem>(id: string, item: T): void {
        this.data[id] = combineLatest([
            this.item[id].map(url => this.store.pipe(select(selectItemByUrl(url)))) as Observable<T>
        ]).pipe(
            filter((items: T[]) => items && items.length > 0 && !items.some(currentItem => !currentItem)),
        );
    }
}
