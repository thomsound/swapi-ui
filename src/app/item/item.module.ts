import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromStoreData from '../store/store-data.reducer';
import { StoreDataDispatcher } from '../store/storeData.dispatcher';
import { StoreDataEffects } from '../store/storeData.effects';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListResolver } from './item-list/item-list.resolver';
import { ItemComponent } from './item/item.component';

@NgModule({
    declarations: [
        ItemComponent,
        ItemListComponent
    ],
    imports:
        [
            CommonModule,
            EffectsModule.forRoot([ StoreDataEffects ]),
            StoreModule.forFeature(fromStoreData.storeSliceKey, fromStoreData.reducer),
            UiComponentsModule
        ],
    exports: [
        ItemComponent,
        ItemListComponent
    ],
    providers: [ ItemListResolver, StoreDataDispatcher ],
})
export class ItemModule {}
