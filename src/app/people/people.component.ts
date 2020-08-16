import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../store/character';
import { selectPeopleEntries } from '../store/store-data.reducer';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: [ './people.component.scss' ],
})
export class PeopleComponent implements OnInit {

    characters: Observable<{ [ key: string ]: Character }>;

    constructor(
        private store: Store
    ) {
        this.characters = this.store.select(selectPeopleEntries);
    }

    ngOnInit(): void {
        // this.characters = this.service.getCharacters();
    }
}
