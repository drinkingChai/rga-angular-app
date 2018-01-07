import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { ExhibitCollectionComponent } from './exhibit-collection/exhibit-collection.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { ExhibitService } from './exhibit.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialComponent,
    BackToTopComponent,
    ModalComponent,
    NavComponent,
    MainComponent,
    ExhibitCollectionComponent,
    ExhibitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService, ExhibitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
