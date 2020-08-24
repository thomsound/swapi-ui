import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemListResolver } from './item/item-list/item-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
    },
    {
        path: ':category',
        component: ItemListComponent,
        resolve: { ItemListResolver }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
