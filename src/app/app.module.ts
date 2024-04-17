import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LayoutComponent } from './layout/layout.component';
import { GlobalComponent } from './global/global.component';
import { HttpClientModule } from '@angular/common/http'
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackTopComponent } from './theme/back-top/back-top.component';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    BackTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [GlobalComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
