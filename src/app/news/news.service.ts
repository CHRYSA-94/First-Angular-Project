import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./card.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 apiKey = "09b2a48dc89f416caada3626ec05f9eb";
 news:Card[] ;

  constructor(private http: HttpClient) {}

  getNews(){
    let searchingParms = new HttpParams();
    searchingParms = searchingParms.append('language', 'en');
    searchingParms = searchingParms.append('apiKey',this.apiKey );

    return this.http.get("https://newsapi.org/v2/sources?", {
      params: searchingParms
    })
  }


}
