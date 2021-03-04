import { Component, OnInit } from '@angular/core';
import { SearchAndPaginationService } from '../searchAndPagination.service';
//import { EMPTY, Observable } from 'rxjs';
import { Card } from './card.model';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  inputVal: string = "a";
  selectedCategory:string = "business";
  page:string = "1";

 //news$ :Observable<Card[]> = EMPTY;
  news: Card[] ;

  constructor(private newsService: NewsService, private searchAndPagination: SearchAndPaginationService) { }

  ngOnInit(): void {

    this.searchAndPagination.userInput.subscribe( input =>{
      this.newsService.getNews(input , this.selectedCategory , this.page ).subscribe(
        newsData => {
          this.news = newsData;
         console.log(newsData)}
      );
    }
    )

    this.searchAndPagination.userSelectChoice.subscribe( category =>{
      this.newsService.getNews(this.inputVal , category , this.page ).subscribe(
        newsData => {
          this.news = newsData;
         console.log(newsData)}
      );
    }
    )

    this.searchAndPagination.changePage.subscribe( pageIndex =>{
      this.newsService.getNews(this.inputVal , this.selectedCategory , pageIndex ).subscribe(
        newsData => {
          this.news = newsData;
         console.log(newsData)}
      );
    }
    )

  }

}
