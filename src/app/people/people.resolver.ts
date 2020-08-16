import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PeopleDispatcher } from './people.dispatcher';

@Injectable()
export class PeopleResolver implements Resolve<void> {

    constructor( private dispatcher: PeopleDispatcher ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.dispatcher.loadCharacters();
    }
}
