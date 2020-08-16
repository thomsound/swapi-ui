import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { CategoryListComponent } from './category-list/category-list.component';
import { PeopleComponent } from './people/people.component';
import { PeopleModule } from './people/people.module';

@NgModule({
    declarations: [ AppComponent, CategoryListComponent, PeopleComponent ],
    imports:
        [
            AppRoutingModule,
            BrowserModule,
            HttpClientModule,
            StoreModule.forRoot(reducers),
            StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: environment.production,
            }),
            PeopleModule,
        ],
    providers: [ ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
