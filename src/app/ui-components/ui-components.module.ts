import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from 'ngx-icons';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { SpecsListComponent } from './specs-list/specs-list.component';

@NgModule({
    declarations: [ IconMenuComponent, SpecsListComponent ],
    exports: [ IconMenuComponent, SpecsListComponent ],
    imports: [ CommonModule, FontAwesomeModule ],
})
export class UiComponentsModule {}
