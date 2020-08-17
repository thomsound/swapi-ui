import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../store/character';
import { Planet } from '../store/planet';
import { selectPeopleEntries } from '../store/store-data.reducer';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: [ './people.component.scss' ],
})
export class PeopleComponent implements OnInit {

    characters$: Observable<{ [ key: string ]: Character }>;
    homeworld$: Observable<Planet>;

    constructor( private store: Store ) {
        this.characters$ = this.store.select(selectPeopleEntries);
        this.characters$.subscribe()
    }

    ngOnInit(): void {

    }
}
