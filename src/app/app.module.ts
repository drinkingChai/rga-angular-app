import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ModalService } from './modal.service';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { ExhibitCollectionComponent } from './exhibit-collection/exhibit-collection.component';
import { VideoService } from './video.service';
import { InMemoryDataService } from './in-memory-data.service';
import { VideoModalComponent } from './video-modal/video-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialComponent,
    BackToTopComponent,
    NavComponent,
    MainComponent,
    ExhibitCollectionComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ModalService, VideoService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
