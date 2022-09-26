import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingLayoutComponent } from './layouts/testing-layout/testing-layout.component';
// import { TestingGuard } from '@core/guards';

const routes: Routes = [
  {
    path: 'testing',
    component: TestingLayoutComponent,
    // canLoad: [TestingGuard],
    // canActivateChild: [TestingGuard],
    loadChildren: () =>import('./modules/testing/testing.module').then((m) => m.TestingModule),
  },
  
  { path: '', redirectTo: 'testing', pathMatch: 'full', },
  { path: '**', redirectTo: 'testing', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
