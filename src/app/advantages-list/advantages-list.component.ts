import { Component } from '@angular/core';
import { AdvantagesCard} from "../advantages-card/advantages-card.component";

@Component({
  selector: 'app-advantages-list',
  templateUrl: './advantages-list.component.html',
  styleUrls: ['./advantages-list.component.css']
})
export class AdvantagesListComponent {
  AdvantagesInfo: AdvantagesCard[] = [
    {title: 'A tasty treat for each pet', text: 'Quisque feugiat justo at malesuada luctus. In mollis eros id rutrum bibendum', url: '../../assets/img/Advantages-img1.svg'},
    {title: 'We love our work', text: 'Aliquam consequat tellus turpis, id pellentesque elit dignissim et vivamus', url: '../../assets/img/Advantages-img2.svg'},
    {title: 'The best equipment', text: 'Praeset ullamcorper lorem ac convallis hendrerit volutpat arcu', url: '../../assets/img/Advantages-img3.svg'}
  ]

}
