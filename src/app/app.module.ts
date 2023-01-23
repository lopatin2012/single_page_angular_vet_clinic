import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuHeaderComponent} from "./menu-header/menu-header.component";
import { MainScreanComponent } from './main-screan/main-screan.component';
import { ServicesAnimalComponent } from './services-animal/services-animal.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { SavedLivesComponent } from './saved-lives/saved-lives.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { ServicesTextComponent } from './services-text/services-text.component';
import { AdvantagesTextComponent } from './advantages-text/advantages-text.component';
import { AdvantagesCardComponent } from './advantages-card/advantages-card.component';
import { AdvantagesListComponent } from './advantages-list/advantages-list.component';
import { HearYouComponent } from './hear-you/hear-you.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    MainScreanComponent,
    ServicesAnimalComponent,
    AnimalCardComponent,
    SavedLivesComponent,
    AboutTextComponent,
    ServicesTextComponent,
    AdvantagesTextComponent,
    AdvantagesCardComponent,
    AdvantagesListComponent,
    HearYouComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
