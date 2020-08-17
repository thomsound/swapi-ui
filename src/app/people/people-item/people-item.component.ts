import { Component, Input } from '@angular/core';
import { Character } from 'src/app/store/character';
import { iconMenuConfig } from './icon-menu-config';

@Component({
    selector: 'app-people-item',
    templateUrl: './people-item.component.html',
    styleUrls: [ './people-item.component.scss' ],
})
export class PeopleItemComponent {

    iconMenuConfig = iconMenuConfig;

    @Input() item: Character;

    iconMenuClick(idx: number) {

        console.warn(idx);

        switch (iconMenuConfig.entries[idx].label) {
            case 'species':
                break;
            case 'homeworld':
                break;
            case 'films':
                break;
            case 'vehicles':
                break;
            case 'starships':
                break;
            default:
                break;
        }
    }
}
