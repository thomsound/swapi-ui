import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, first, map, switchMap } from 'rxjs/operators';
import { Categories } from './category-list/categories';
import { Character, Film, Planet, Species, Starship, StarWarsItem, Vehicle } from './store/star-wars-item';
import { ItemListContainer } from './store/store-data';
import { selectItemByUrl } from './store/store-data.reducer';
import Util from './_util/util';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {


    baseUrl: string;

    constructor(
        private httpClient: HttpClient,
        private store: Store
    ) {
        this.baseUrl = Util.getBaseUrl();
    }

    getItems(category: string, page?: string): Observable<ItemListContainer<StarWarsItem>> {
        return this.httpClient.get(this.baseUrl + '/' + category, page ? { params: { page } } : {}).pipe(
            filter(res => res.hasOwnProperty('results')),
            map(res => this.parseItems(res))
        );
    }

    getItemByUrl(url: string): Observable<StarWarsItem> {
        return this.store.pipe(select(selectItemByUrl(url))).pipe(
            switchMap(item =>
                !item
                    ? this.httpClient.get(url).pipe(
                        map(currentItem => this.parseItem(currentItem))
                    )
                    : of(item)
            )
        );
    }

    getItemBatchByUrls(urls: string[]): Observable<StarWarsItem[]> {
        const batch: Observable<StarWarsItem>[] = [];
        urls.map(url => batch.push(
            this.getItemByUrl(url)
        ));
        return combineLatest(batch).pipe(first());
    }

    private parseItems(response: any): ItemListContainer<StarWarsItem> {
        const { count, next, previous, results } = response;
        const itemMap: { [ key: string ]: StarWarsItem } = {};
        results.forEach(element => {
            itemMap[ element?.url ] = this.parseItem(element);
        });
        return {
            count,
            next,
            previous,
            entries: itemMap
        };
    }

    private parseItem(response: any): StarWarsItem {
        const category = Categories[ Util.getCategoryByUrl(response.url) ];
        response.category = category;
        switch (category) {
            case Categories.FILMS.toString():
                return this.parseFilm(response);
            case Categories.PEOPLE.toString():
                return this.parseCharacter(response);
            case Categories.PLANETS.toString():
                return this.parsePlanet(response);
            case Categories.SPECIES.toString():
                return this.parseSpecies(response);
            case Categories.STARSHIPS.toString():
                return this.parseStarship(response);
            case Categories.VEHICLES.toString():
                return this.parseVehicle(response);
            default:
                break;
        }
    }

    private parseCharacter(response: any): Character {
        response.planets = response.homeworld ? [ response.homeworld ] : [];
        response.planetsLabel = 'homeworld';
        delete response.homeworld;
        return response;
    }

    private parseFilm(response: any): Film {
        response.people = response.characters;
        response.peopleLabel = 'characters';
        delete response.characters;

        response.name = response.title;
        delete response.title;
        return response;
    }

    private parseStarship(response: any): Starship {
        response.people = response.pilots;
        response.peopleLabel = 'pilots';
        delete response.pilots;
        return response;
    }

    private parseVehicle(response: any): Vehicle {
        response.people = response.pilots;
        response.peopleLabel = 'pilots';
        delete response.pilots;
        return response;
    }

    private parseSpecies(response: any): Species {
        response.planets = response.homeworld ? [ response.homeworld ] : [];
        response.planetsLabel = 'homeworld';
        delete response.homeworld;
        return response;
    }

    private parsePlanet(response: any): Planet {
        response.people = response.residents;
        response.peopleLabel = 'residents';
        delete response.residents;
        return response;
    }

}
