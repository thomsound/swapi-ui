import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Character } from "./store/character";
import { itemListContainer } from "./store/store-data";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

    baseUrl = environment.apiServer + environment.apiPrefix;

    constructor(
        private httpClient: HttpClient
    ) { }

    getCategories(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }

    getCharacters(page?: string): Observable<itemListContainer<Character>> {
        return this.httpClient.get(this.baseUrl + '/people', page ? { params: { page } } : {}).pipe(
            filter(res => res.hasOwnProperty('results')), // res?.results?.length > 0),
            map(res => this.parsePeople(res))
        );
    }

    private parsePeople(response: any): itemListContainer<Character> {
        const { count, next, previous, results } = response;
        let peopleMap: { [ key: string ]: Character } = {};
        results.forEach(element => {
            element.homeworld = { url: element?.homeworld }
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
