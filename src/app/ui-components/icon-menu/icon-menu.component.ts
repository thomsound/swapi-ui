import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconMenuConfig } from './icon-menu-config';

@Component({
    selector: 'app-icon-menu',
    templateUrl: './icon-menu.component.html',
    styleUrls: [ './icon-menu.component.scss' ],
})
export class IconMenuComponent {
    @Input() config: IconMenuConfig;
    @Output() itemClicked = new EventEmitter<number>();
    @Output() itemHovered = new EventEmitter<number>();

    active: number;

    menuItemHovered(idx: number) {
        this.itemHovered.emit(idx);
    }

    menuItemClicked(idx: number) {
        this.active = idx;
        this.itemClicked.emit(idx);
    }
}
