import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { PeopleComponent } from './people/people.component';
import { PeopleResolver } from './people/people.resolver';

const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
    },
    {
        path: 'people',
        component: PeopleComponent,
        resolve: { PeopleResolver }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
