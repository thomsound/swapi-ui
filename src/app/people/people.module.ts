import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromStoreData from '../store/store-data.reducer';
import { PeopleDispatcher } from './people.dispatcher';
import { PeopleEffects } from './people.effects';
import { PeopleResolver } from './people.resolver';

@NgModule({
    declarations: [],
    imports:
        [
            CommonModule,
            EffectsModule.forRoot([ PeopleEffects ]),
            StoreModule.forFeature(fromStoreData.storeSliceKey, fromStoreData.reducer),
        ],
    providers: [ PeopleResolver, PeopleDispatcher ],
})
export class PeopleModule {}
