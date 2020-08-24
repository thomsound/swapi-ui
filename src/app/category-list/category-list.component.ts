import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

    constructor(
        private router: Router
    ) {}

    navigate(category: string) {
        this.router.navigate([ category ]);
    }
}
