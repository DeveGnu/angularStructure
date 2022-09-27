import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptors/test.interceptor';
import { AdminInterceptor } from './interceptors/admin.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { UserGuardGuard } from './guards/user-guard.guard';



@NgModule({
  imports: [HttpClientModule],
  providers: [
    AdminGuard,
    UserGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true
    }
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorTwo,
    //   multi: true,
    // }
  ],
  declarations: [
  ],
})
export class CoreModule {
  constructor() {
  }
}
