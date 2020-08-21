import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconMenuConfig } from './icon-menu-config';

@Component({
    selector: 'app-icon-menu',
    templateUrl: './icon-menu.component.html',
    styleUrls: [ './icon-menu.component.scss' ],
})
export class IconMenuComponent {
    @Input() config: IconMenuConfig;
    @Input() active: number;
    @Output() itemClicked = new EventEmitter<number>();
    @Output() itemHovered = new EventEmitter<number>();

    hover: number;

    menuItemHovered(idx: number) {
        this.hover = idx;
        if (idx < 0) return;
        this.itemHovered.emit(idx);
    }

    menuItemClicked(idx: number) {
        if (this.config.entries[ idx ].disabled) return;
        this.active = idx;
        if (idx < 0) return;
        this.itemClicked.emit(idx);
    }
}
