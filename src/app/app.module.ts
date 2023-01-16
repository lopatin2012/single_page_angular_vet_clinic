import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuHeaderComponent} from "./menu-header/menu-header.component";
import { MainScreanComponent } from './main-screan/main-screan.component';
import { ServicesAnimalComponent } from './services-animal/services-animal.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { SavedLivesComponent } from './saved-lives/saved-lives.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    MainScreanComponent,
    ServicesAnimalComponent,
    AnimalCardComponent,
    SavedLivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
