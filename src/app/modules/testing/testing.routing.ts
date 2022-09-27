import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelUnoComponent } from './views/panel-uno/panel-uno.component';
import { PanelDosComponent } from './views/panel-dos/panel-dos.component';
import { PanelTresComponent } from './views/panel-tres/panel-tres.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { UserGuardGuard } from 'src/app/core/guards/user-guard.guard';

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
  {
    path: 'user',
    component: PanelTresComponent,
    canActivate: [UserGuardGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingRoutingModule { }
