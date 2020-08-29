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
    @Input('item') set setItem(item: any) { this.init(item) };

    iconMenuConfig: IconMenuConfig;
    item: any;
    selected = -1;

    data: { [ key: string ]: Observable<StarWarsItem[]> } = {};

    constructor(
        private store: Store,
        private dispatcher: StoreDataDispatcher,
    ) { }

    iconMenuClick(idx: number) {
        this.setSelected(idx);
        const category = this.iconMenuConfig.entries[ idx ].id;
        this.dispatcher.loadItemBatchByUrl(this.item[category]);
    }

    setSelected(idx: number) {
        this.selected = idx;
    }

    private addData<T extends StarWarsItem>(id: string, item: T) {
        this.data[id] = combineLatest(
            <Observable<T>>this.item[id].map(url => this.store.pipe(select(selectItemByUrl(url))))
        ).pipe(
            filter((items: T[]) => items && items.length > 0 && !items.some(item => !item)),
        );
    }

    private init(item: any) {
        this.item = item;
        let entries: IconMenuItem[] = [];

        if (item.people) {
            const id = Categories.PEOPLE.toString();
            entries.push({
                id,
                label: item.peopleLabel || id,
                iconId: 'group',
                disabled: item.people.length <= 0,
            });
            this.addData(id, <Character>item);
        }
        if (item.species) {
            const id = Categories.SPECIES.toString();
            entries.push({
                id,
                label: item.speciesLabel || id,
                iconId: 'male',
                disabled: item.species.length <= 0,
            });
            this.addData(id, <Species>item);
        }
        if (item.planets) {
            const id = Categories.PLANETS.toString();
            entries.push({
                id,
                label: item.planetsLabel || id,
                iconId: 'star',
                disabled: item.planets.length <= 0,
            });
            this.addData(id, <Planet>item);
        }
        if (item.films) {
            const id = Categories.FILMS.toString();
            entries.push({
                id,
                label: item.filmsLabel || id,
                iconId: 'film',
                disabled: item.films.length <= 0,
            });
            this.addData(id, <Film>item);
        }
        if (item.vehicles) {
            const id = Categories.VEHICLES.toString();
            entries.push({
                id,
                label: item.vehiclesLabel || id,
                iconId: 'truck',
                disabled: item.vehicles.length <= 0,
            });
            this.addData(id, <Vehicle>item);
        }
        if (item.starships) {
            const id = Categories.STARSHIPS.toString();
            entries.push({
                id,
                label: item.starshipsLabel || id,
                iconId: 'space-shuttle',
                disabled: item.starships.length <= 0,
            });
            this.addData(id, <Starship>item);
        }

        this.iconMenuConfig = { defaultLabel: 'characteristics', entries };
    }
}
