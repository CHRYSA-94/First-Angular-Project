import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NewsService } from "./news/news.service";

@Injectable({providedIn: "root"})
export class SearchAndPaginationService {

  userInput = new Subject<string>();
  userSelectChoice = new Subject<string>();
  changePage = new Subject<string>();

  constructor(public newsService: NewsService){}


  // this.searchAndPagination.userInput.subscribe( input =>
  //   this.inputVal =  input
  // )

  // this.searchAndPagination.userSelectChoice.subscribe( category =>
  //   this.selectedCategory =  category
  // )

  // this.searchAndPagination.changePage.subscribe( num =>
  //    this.page = num.toString())
}
