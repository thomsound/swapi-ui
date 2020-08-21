import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Character, StarWarsItem } from "./store/star-wars-item";
import { itemListContainer } from "./store/store-data";
import { selectItemByUrl } from './store/store-data.reducer';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

    baseUrl = environment.apiServer + environment.apiPrefix;

    constructor(
        private httpClient: HttpClient,
        private store: Store
    ) { }

    getCategories(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }

    getCharacters(page?: string): Observable<itemListContainer<Character>> {
        return this.httpClient.get(this.baseUrl + '/people', page ? { params: { page } } : {}).pipe(
            filter(res => res.hasOwnProperty('results')), // res?.results?.length > 0
            map(res => this.parsePeople(res))
        );
    }

    getItemByUrl(url: string): Observable<StarWarsItem> {
        return this.store.pipe(select(selectItemByUrl(url))).pipe(
            switchMap(item => !item ? this.httpClient.get(url) : of(item))
        );
    }

    getItemBatchByUrls(urls: string[]): Observable<StarWarsItem[]> {
        const batch: Observable<StarWarsItem>[] = [];
        urls.map(url => batch.push(
            this.getItemByUrl(url)
        ));
        return combineLatest(batch);
    }

    private parsePeople(response: any): itemListContainer<Character> {
        const { count, next, previous, results } = response;
        let peopleMap: { [ key: string ]: Character } = {};
        results.forEach(element => {
            peopleMap[ element?.url ] = element;
        });
        return {
            count,
            next,
            previous,
            entries: peopleMap
        }
    }
}
