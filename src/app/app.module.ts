import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FontAwesomeModule } from 'ngx-icons';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { ItemModule } from './item/item.module';
import { UiComponentsModule } from './ui-components/ui-components.module';

@NgModule({
    declarations: [ AppComponent, CategoryListComponent, HomeComponent ],
    imports:
        [
            AppRoutingModule,
            BrowserModule,
            FontAwesomeModule,
            HttpClientModule,
            StoreModule.forRoot(reducers),
            StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: environment.production,
            }),
            ItemModule,
            UiComponentsModule,
        ],
    providers: [ ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
