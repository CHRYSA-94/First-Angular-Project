import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./card.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 private apiKey = "09b2a48dc89f416caada3626ec05f9eb";


  constructor(private http: HttpClient) {}

  getNews(){
    let searchingParams = new HttpParams();
    //searchingParams = searchingParams.append('page', '1');
    searchingParams = searchingParams.append('language', 'en');
    searchingParams = searchingParams.append('pageSize', '6');
    searchingParams = searchingParams.append('apiKey',this.apiKey );



    return this.http.get("https://newsapi.org/v2/top-headlines?", {
      params: searchingParams
    })

  }

}
