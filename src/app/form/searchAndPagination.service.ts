import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NewsService } from "./news/news.service";

@Injectable({providedIn: "root"})
export class SearchAndPaginationService {

  userInput = new Subject<string>();
  userSelectChoice = new Subject<string>();
  changePage = new Subject<number>();

  constructor(public newsService: NewsService){}


}
