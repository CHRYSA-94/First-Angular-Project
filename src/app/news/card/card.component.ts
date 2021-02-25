import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() inputCard: Card;

  constructor() { }

  ngOnInit(): void {

  }

}
