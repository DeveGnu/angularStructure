// Angular module 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Installed modules 
// Core module
import { CoreModule } from './core/core.module';
// Shared module 
import { SharedModule } from './shared/shared.module';
// App 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Modules 
// Layouts 
import { TestingLayoutComponent } from './layouts/testing-layout/testing-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingLayoutComponent
  ],
  imports: [
    // angular
    BrowserModule,
    // 3rd party
    // core & shared
    CoreModule,
    SharedModule,
    // app
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
