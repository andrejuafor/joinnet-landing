import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NetworkComponent } from './network/network.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { DataCenterComponent } from './data-center/data-center.component';
import { WirlessComponent } from './wirless/wirless.component';
import { AdminComponent } from './admin/admin.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BriefcaseComponent,
    PromotionsComponent,
    ContactComponent,
    FooterComponent,
    NetworkComponent,
    CollaborationComponent,
    DataCenterComponent,
    WirlessComponent,
    AdminComponent,
    SecurityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
