import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Categories } from 'src/app/category-list/categories';
import { Character, Film, Planet, Species, Starship, Vehicle } from 'src/app/store/star-wars-item';
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

    people$: Observable<Character[]>;
    species$: Observable<Species[]>;
    planets$: Observable<Planet[]>;
    films$: Observable<Film[]>
    vehicles$: Observable<Vehicle[]>
    starships$: Observable<Starship[]>

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

    private init(item: any) {
        this.item = item;
        let entries: IconMenuItem[] = [];

        if (item.people) {
            entries.push({
                id: Categories.PEOPLE.toString(),
                label: item.peopleLabel,
                iconId: 'group',
                disabled: item.people.length <= 0,
            });
            this.people$ = combineLatest(
                <Observable<Character>>this.item.people.map(characterUrl => this.store.pipe(select(selectItemByUrl(characterUrl))))
            ).pipe(
                filter((people: Character[]) => people && people.length > 0 && !people.some(character => !character)),
            );
        }
        if (item.species) {
            entries.push({
                id: Categories.SPECIES.toString(),
                label: item.speciesLabel,
                iconId: 'male',
                disabled: item.species.length <= 0,
            });
            this.species$ = combineLatest(
                <Observable<Species>>this.item.species.map(speciesUrl => this.store.pipe(select(selectItemByUrl(speciesUrl))))
            ).pipe(
                filter((species: Species[]) => species && species.length > 0 && !species.some(species => !species)),
            );
        }
        if (item.planets) {
            entries.push({
                id: Categories.PLANETS.toString(),
                label: item.planetsLabel,
                iconId: 'star',
                disabled: item.planets.length <= 0,
            });
            this.planets$ = combineLatest(
                <Observable<Planet>>this.item.planets.map(planetUrl => this.store.pipe(select(selectItemByUrl(planetUrl))))
            ).pipe(
                filter((planets: Planet[]) => planets && planets.length > 0 && !planets.some(planet => !planet)),
            );
        }
        if (item.films) {
            entries.push({
                id: Categories.FILMS.toString(),
                label: item.filmsLabel,
                iconId: 'film',
                disabled: item.films.length <= 0,
            });
            this.films$ = combineLatest(
                <Observable<Film>>this.item.films.map(filmUrl => this.store.pipe(select(selectItemByUrl(filmUrl))))
            ).pipe(
                filter((films: Film[]) => films && films.length > 0 && !films.some(film => !film)),
            );
        }
        if (item.vehicles) {
            entries.push({
                id: Categories.VEHICLES.toString(),
                label: item.vehiclesLabel,
                iconId: 'truck',
                disabled: item.vehicles.length <= 0,
            });
            this.vehicles$ = combineLatest(
                <Observable<Vehicle>>this.item.vehicles.map(vehicleUrl => this.store.pipe(select(selectItemByUrl(vehicleUrl))))
            ).pipe(
                filter((vehicles: Vehicle[]) => vehicles && vehicles.length > 0 && !vehicles.some(vehicle => !vehicle)),
            );
        }
        if (item.starships) {
            entries.push({
                id: Categories.STARSHIPS.toString(),
                label: item.starshipsLabel,
                iconId: 'space-shuttle',
                disabled: item.starships.length <= 0,
            });
            this.starships$ = combineLatest(
                <Observable<Starship>>this.item.starships.map(starshipUrl => this.store.pipe(select(selectItemByUrl(starshipUrl))))
            ).pipe(
                filter((starships: Starship[]) => starships && starships.length > 0 && !starships.some(starship => !starship)),
            );
        }

        this.iconMenuConfig = { defaultLabel: 'characteristics', entries };
    }
}
