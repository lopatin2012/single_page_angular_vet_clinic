import {Component, Input} from '@angular/core';

export interface AdvantagesCard{
  title: string
  text: string
  url: string
}
@Component({
  selector: 'app-advantages-card',
  templateUrl: './advantages-card.component.html',
  styleUrls: ['./advantages-card.component.css']
})
export class AdvantagesCardComponent {
  @Input()
  AdvantagesInfo: AdvantagesCard | null = null;
}
