import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from 'ngx-icons';
import { CrawlingContentBoxComponent } from './crawling-content-box/crawling-content-box.component';
import { ExpandableListItemComponent } from './expandable-list-item/expandable-list-item.component';
import { ExpandableListComponent } from './expandable-list/expandable-list.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { SpecsListComponent } from './specs-list/specs-list.component';

@NgModule({
    declarations:
        [
            IconMenuComponent,
            SpecsListComponent,
            ExpandableListItemComponent,
            ExpandableListComponent,
            CrawlingContentBoxComponent,
        ],
    exports:
        [
            IconMenuComponent,
            SpecsListComponent,
            ExpandableListItemComponent,
            ExpandableListComponent,
            CrawlingContentBoxComponent,
        ],
    imports: [ CommonModule, FontAwesomeModule ],
})
export class UiComponentsModule {}
