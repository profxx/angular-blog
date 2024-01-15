import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { CardPictureComponent } from './components/card-picture/card-picture.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { SelectTitleComponent } from './components/select-title/select-title.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    CardPictureComponent,
    DetailCardComponent,
    SelectTitleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
