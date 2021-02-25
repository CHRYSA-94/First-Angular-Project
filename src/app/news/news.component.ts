import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 news :Card[] ;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
    .subscribe(data => {
      this.news = data["articles"]
    });
  }



}
