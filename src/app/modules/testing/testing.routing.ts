import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelUnoComponent } from './views/panel-uno/panel-uno.component';
import { PanelDosComponent } from './views/panel-dos/panel-dos.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel/Uno',
    pathMatch: 'full',
  },
  {
    path: 'panel',
    children: [
      {
        path: 'Uno',
        component: PanelUnoComponent,
      }
    ],
  },
  {
    path: 'admin',
    component: PanelDosComponent,
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingRoutingModule { }
