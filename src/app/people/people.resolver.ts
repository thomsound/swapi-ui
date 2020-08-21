import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PeopleDispatcher } from './people.dispatcher';

@Injectable()
export class PeopleResolver implements Resolve<void> {

    constructor( private dispatcher: PeopleDispatcher ) {}

    resolve(): void {
        this.dispatcher.loadCharacters('2');
    }
}
