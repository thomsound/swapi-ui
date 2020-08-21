import { Component, Input } from '@angular/core';
import { Categories } from 'src/app/category-list/categories';
import { StarWarsItem } from 'src/app/store/star-wars-item';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-specs-list',
    templateUrl: './specs-list.component.html',
    styleUrls: [ './specs-list.component.scss' ],
})
export class SpecsListComponent {
    @Input('item') set setItem(item: StarWarsItem) {
        if (!item) return;
        this.item = item;
        this.category = this.getCategory(item.url);
    };

    item: StarWarsItem;
    category: string;
    Categories = Categories;

    private getCategory(url: string) {
        const categories = Object.values(Categories).map(c => c + '');
        const baseUrl = environment.apiServer + environment.apiPrefix + '/';
        const tail = url.substring(baseUrl.length - 1);
        const category = tail.substring(0, tail.indexOf("/"));
        return categories.includes(category) ? category : null;
    }
}
