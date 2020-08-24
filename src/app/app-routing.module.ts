import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemListResolver } from './item/item-list/item-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
