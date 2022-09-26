import { NgModule } from '@angular/core';
import { TestingRoutingModule } from './testing.routing';
import { PanelUnoComponent } from './views/panel-uno/panel-uno.component';

@NgModule({
  declarations: [
    PanelUnoComponent
  ],
  imports: [TestingRoutingModule]
})
export class TestingModule {}
