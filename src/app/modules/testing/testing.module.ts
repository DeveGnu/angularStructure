import { NgModule } from '@angular/core';
import { TestingRoutingModule } from './testing.routing';
import { PanelUnoComponent } from './views/panel-uno/panel-uno.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PanelUnoComponent
  ],
  imports: [TestingRoutingModule,SharedModule]
})
export class TestingModule {}
