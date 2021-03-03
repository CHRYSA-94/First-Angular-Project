import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./card.model";
// import { pluck} from "rxjs/operators"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 totalResults:number;

  constructor(private http: HttpClient) {}


  getNews( searchingText: string,category: string,page: string):Observable<Card[]>{

    return this.http.get("http://newsapi.org/v2/top-headlines?q="+ searchingText +"&category="+ category +"&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=" + page +"&pageSize=6")
    .pipe(map( responseData => {
      let newsArray = [];
      newsArray = responseData["articles"];
      console.log(newsArray);
      this.totalResults = responseData["totalResults"];
      console.log(this.totalResults)
      return newsArray
    }
    ))
  }


// reference to previous solution
  // getNewsFromSearchTitle(title: string){
  //   return this.http.get<Card[]>("http://newsapi.org/v2/top-headlines?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=3&pageSize=6")
  //   .pipe(pluck("articles") )
  // }

}