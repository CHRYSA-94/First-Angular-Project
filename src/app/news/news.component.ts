import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Card } from './card.model';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 news$ :Observable<Card[]> = EMPTY;


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
   this.news$ = this.newsService.getNews()
  }

}
