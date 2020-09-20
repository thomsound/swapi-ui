import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-list-item',
  templateUrl: './expandable-list-item.component.html',
  styleUrls: ['./expandable-list-item.component.scss']
})
export class ExpandableListItemComponent {
    @Input() label: string;
    @Input() expand: boolean;

    @Output() labelClicked = new EventEmitter<void>();

    emitLabelClicked(): void {
        this.labelClicked.emit();
    }
}
