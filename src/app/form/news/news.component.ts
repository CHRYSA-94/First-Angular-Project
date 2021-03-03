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
  inputVal: string;
  selectedCategory:string;
  page:string;

 //news$ :Observable<Card[]> = EMPTY;
  news: Card[] ;

  constructor(private newsService: NewsService, private searchAndPagination: SearchAndPaginationService) { }

  ngOnInit(): void {
    this.searchAndPagination.userInput.subscribe( input =>
      this.inputVal =  input
    )

    this.searchAndPagination.userSelectChoice.subscribe( category =>
      this.selectedCategory =  category
    )

    this.searchAndPagination.changePage.subscribe( num =>
       this.page = num.toString())

   this.newsService.getNews(this.inputVal, this.selectedCategory, this.page).subscribe(
     newsData => {
       this.news = newsData;
      console.log(newsData)}
   )

  }

}
