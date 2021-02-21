import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  news:Card[] ;
  imagesCover = "https://lh3.googleusercontent.com/proxy/2wbOE2_-VFmxREezksWdULQhEHuyC6huxHFLql8qqgdu_ZP3787ucMDJbNHR3Y-oXA2QqWj9iRvRLtv84gqUh30nzXFvVjE8Diop3Cv8kAA"

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      console.log(data["sources"].slice(0,6));
      this.news = data["sources"].slice(0,6)
    });
  }



}
