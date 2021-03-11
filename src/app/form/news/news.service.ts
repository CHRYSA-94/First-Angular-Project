import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./card.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 totalResults:number;

  constructor(private http: HttpClient) {}

  getNews( searchingText: string ,category: string ,page: string ):Observable<Card[]>{
    let searchParams = new HttpParams();
    searchParams = searchParams.append('q', searchingText);
    searchParams = searchParams.append('apiKey',"fcd08d5931f14dc59a429114ea0170cd" );
    searchParams = searchParams.append('page', page);
    searchParams = searchParams.append('pageSize', '6');
    searchParams = searchParams.append('category', category);
    return this.http.get("http://newsapi.org/v2/top-headlines",{
      params: searchParams
    }
    )
    .pipe(map( responseData => {
      let newsArray = [];
      newsArray = responseData["articles"];
      this.totalResults = responseData["totalResults"];
      return newsArray
    }
    ))
  }

}
