import { Component, Input } from '@angular/core';
import { StarWarsItem } from 'src/app/store/star-wars-item';

@Component({
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.component.html',
  styleUrls: ['./expandable-list.component.scss']
})
export class ExpandableListComponent {
    @Input() items: StarWarsItem[];

    idxExpanded = -1;

    expand(idx: number): void {
        this.idxExpanded = idx === this.idxExpanded ? -1 : idx;
    }
}
