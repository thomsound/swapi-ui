import { Component, Input } from '@angular/core';
import { Categories } from 'src/app/category-list/categories';
import { StarWarsItem } from 'src/app/store/star-wars-item';
import Util from '../../_util/util';

@Component({
    selector: 'app-specs-list',
    templateUrl: './specs-list.component.html',
    styleUrls: [ './specs-list.component.scss' ],
})
export class SpecsListComponent {
    @Input('item') set setItem(item: StarWarsItem) {
        this.item = item;
        this.category = Util.getCategoryByUrl(item.url);
    }

    item: StarWarsItem;
    category: Categories;
    Categories = Categories;
}
