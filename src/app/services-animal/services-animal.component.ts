import { Component } from '@angular/core';
import {AnimalCard} from "../animal-card/animal-card.component";

@Component({
  selector: 'app-services-animal',
  templateUrl: './services-animal.component.html',
  styleUrls: ['./services-animal.component.css']
})
export class ServicesAnimalComponent {
  cardsInfo: AnimalCard[] = [
    {title: 'Dogs', url: '../../assets/img/Dogs.png'},
    {title: 'Cats', url: '../../assets/img/Cats.png'},
    {title: 'Birds', url: '../../assets/img/Birds.png'}
  ]
}
