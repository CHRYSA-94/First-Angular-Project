import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./card.model";
import { pluck} from "rxjs/operators"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 private apiKey = "09b2a48dc89f416caada3626ec05f9eb";


  constructor(private http: HttpClient) {}

  getNews():Observable<Card[]>{

    return this.http.get<Card[]>("http://newsapi.org/v2/top-headlines?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6")
    .pipe(pluck("articles"))

  }

}
