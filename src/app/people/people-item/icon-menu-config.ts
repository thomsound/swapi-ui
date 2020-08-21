import { Categories } from 'src/app/category-list/categories';
import { IconMenuConfig } from '../../ui-components/icon-menu/icon-menu-config';

export const iconMenuConfig: IconMenuConfig = {
    defaultLabel: 'characteristics',
    entries: [
        {
            label: Categories.SPECIES,
            iconId: 'male'
        },
        {
            label: Categories.PLANETS,
            iconId: 'star'
        },
        {
            label: Categories.FILMS,
            iconId: 'film'
        },
        {
            label: Categories.VEHICLES,
            iconId: 'truck'
        },
        {
            label: Categories.STARSHIPS,
            iconId: 'space-shuttle'
        },
    ]
}
