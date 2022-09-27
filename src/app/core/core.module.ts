import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptors/test.interceptor';
import { AdminGuard } from './guards/admin.guard';


@NgModule({
  imports: [HttpClientModule],
  providers: [
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
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
