import { Injectable } from "@angular/core";
import { BehaviorSubject} from "rxjs";
import { NewsService } from "./news/news.service";

@Injectable({providedIn: "root"})
export class SearchAndPaginationService {

  userInput = new BehaviorSubject<string>("a");
  userSelectChoice = new BehaviorSubject<string>("business");
  changePage = new BehaviorSubject<string>("1");

  constructor(public newsService: NewsService){}
}
