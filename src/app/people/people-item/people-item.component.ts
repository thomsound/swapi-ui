import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Character, Film, Planet, Species, Starship, Vehicle } from 'src/app/store/star-wars-item';
import { selectItemByUrl } from 'src/app/store/store-data.reducer';
import { IconMenuConfig } from 'src/app/ui-components/icon-menu/icon-menu-config';
import { Categories } from '../../category-list/categories';
import { PeopleDispatcher } from '../people.dispatcher';

@Component({
    selector: 'app-people-item',
    templateUrl: './people-item.component.html',
    styleUrls: [ './people-item.component.scss' ],
})
export class PeopleItemComponent {

    iconMenuConfig: IconMenuConfig;
    item: Character;
    selected = -1;

    species$: Observable<Species>;
    homeworld$: Observable<Planet>;
    films$: Observable<Film[]>
    vehicles$: Observable<Vehicle[]>
    starships$: Observable<Starship[]>

    onDestroy = new Subject<void>();

    @Input('item') set setItem(character: Character) {
        this.item = character;

        this.iconMenuConfig = {
            defaultLabel: 'characteristics',
            entries: [
                {
                    label: Categories.SPECIES,
                    iconId: 'male',
                    disabled: !this.item.species || (this.item.species.length <= 0),
                },
                {
                    label: Categories.PLANETS,
                    iconId: 'star',
                    disabled: !this.item.homeworld || (this.item.homeworld.length <= 0),
                },
                {
                    label: Categories.FILMS,
                    iconId: 'film',
                    disabled: !this.item.films || (this.item.films.length <= 0),
                },
                {
                    label: Categories.VEHICLES,
                    iconId: 'truck',
                    disabled: !this.item.vehicles || (this.item.vehicles.length <= 0),
                },
                {
                    label: Categories.STARSHIPS,
                    iconId: 'space-shuttle',
                    disabled: !this.item.starships || (this.item.starships.length <= 0),
                },
            ]
        }

        this.species$ = this.store.pipe(select(selectItemByUrl(this.item?.species[ 0 ])));
        this.homeworld$ = this.store.pipe(select(selectItemByUrl(this.item?.homeworld)));
        this.films$ = combineLatest(
            this.item.films.map(filmUrl => this.store.pipe(select(selectItemByUrl(filmUrl))))
        ).pipe(
            filter((films: Film[]) => films && films.length > 0 && !films.some(film => !film)),
        );
        this.vehicles$ = combineLatest(
            this.item.vehicles.map(vehicleUrl => this.store.pipe(select(selectItemByUrl(vehicleUrl))))
        ).pipe(
            filter((vehicles: Vehicle[]) => vehicles && vehicles.length > 0 && !vehicles.some(vehicle => !vehicle)),
        );
        this.starships$ = combineLatest(
            this.item.starships.map(starshipUrl => this.store.pipe(select(selectItemByUrl(starshipUrl))))
        ).pipe(
            filter((starships: Starship[]) => starships && starships.length > 0 && !starships.some(starship => !starship)),
        );
    };

    constructor(
        private store: Store,
        private dispatcher: PeopleDispatcher,
    ) { }

    iconMenuClick(idx: number) {
        this.setSelected(idx);
        switch (this.iconMenuConfig.entries[idx].label) {
            case Categories.SPECIES:
                this.dispatcher.loadItemByUrl(this.item.species[ 0 ]);
                break;
            case Categories.PLANETS:
                this.dispatcher.loadItemByUrl(this.item.homeworld);
                break;
            case Categories.FILMS:
                this.dispatcher.loadItemBatchByUrl(this.item.films);
                break;
            case Categories.VEHICLES:
                this.dispatcher.loadItemBatchByUrl(this.item.vehicles);
                break;
            case Categories.STARSHIPS:
                this.dispatcher.loadItemBatchByUrl(this.item.starships);
                break;
            default:
                break;
        }
    }

    setSelected(idx: number) {
        this.selected = idx;
    }
}
