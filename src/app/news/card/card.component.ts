import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() eachCard: {title: string, description: string, category: string, urlToImage:string}

  constructor() { }

  ngOnInit(): void {

  }

}
