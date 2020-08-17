import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from 'ngx-icons';
import { IconMenuComponent } from './icon-menu/icon-menu.component';

@NgModule({
    declarations: [ IconMenuComponent ],
    exports: [ IconMenuComponent ],
    imports: [ CommonModule, FontAwesomeModule ],
})
export class UiComponentsModule {}
