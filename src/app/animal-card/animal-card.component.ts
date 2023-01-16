import {Component, Input} from '@angular/core';


export interface AnimalCard{
  title: string
  url: string
}
@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  @Input()
  cardInfo: AnimalCard | null = null;
}
