import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { SocialComponent } from './social/social.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExhibitsComponent,
    SocialComponent,
    BackToTopComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
