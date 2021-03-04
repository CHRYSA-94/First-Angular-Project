import { Component, OnInit } from '@angular/core';
import { SearchAndPaginationService } from '../searchAndPagination.service';
//import { EMPTY, Observable } from 'rxjs';
import { Card } from './card.model';
import { NewsService } from './news.service';
import {  combineLatest} from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Card[] ;

  constructor(private newsService: NewsService, private searchAndPagination: SearchAndPaginationService) { }

  ngOnInit(): void {

    combineLatest([
      this.searchAndPagination.userInput,
      this.searchAndPagination.userSelectChoice,
      this.searchAndPagination.changePage])
      .subscribe(([input, selectOption, pageIndex]) =>{


        this.newsService.getNews(input, selectOption , pageIndex).subscribe(
          newsData =>
          this.news = newsData
        )
      }
      )
  }

}
