import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NewsService } from './news/news.service';
import { FormControl, FormGroup} from '@angular/forms'
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators'
import { SearchAndPaginationService } from './searchAndPagination.service';
import { Categories } from './categories';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy{

  private  routeObservable: Subscription;
  totalNews: number;
  form: FormGroup;
  categories = Categories;
  keys= [];
  querySearchCharacters :string;
  queryCategory :string;
  queryPageIndex :string;

  constructor(public newsService: NewsService,
     public searchAndPaginationService: SearchAndPaginationService,
     private route: ActivatedRoute ,
     private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe( data => {

      this.querySearchCharacters = data.q;
      this.queryCategory = data.category;
      this.queryPageIndex = data.page;

      if (this.querySearchCharacters !== undefined){
        this.searchAndPaginationService.userInput.next(this.querySearchCharacters);
      }
      if (this.queryCategory !== undefined){
        this.searchAndPaginationService.userSelectChoice.next(this.queryCategory);
      }
      if (this.queryPageIndex !== undefined){
        this.searchAndPaginationService.changePage.next(this.queryPageIndex);
      }

    })

    this.keys = Object.keys(this.categories).filter(k => isNaN(Number(k)));

    this.form = new FormGroup({
      'searchingData': new FormGroup({
        'typingWord': new FormControl('a'),
        'category': new FormControl('Business')
      })
    })

    this.form.get('searchingData.typingWord').valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe( val =>{
      this.router.navigate([''], {queryParams: {q: val}});
      this.searchAndPaginationService.userInput.next(val);
    })

    this.form.get('searchingData.category').valueChanges
    .pipe(
      map(val=>val.toLowerCase())
    )
    .subscribe( val => {
      this.router.navigate([''], {queryParams: {category: val}});
      this.searchAndPaginationService.userSelectChoice.next(val);
    })
    this.totalNews = this.newsService.totalResults;
  }

  onPageChange(event: PageEvent){

    let index = (event.pageIndex + 1).toString()
    this.searchAndPaginationService.changePage.next(index);
    this.router.navigate([''], {queryParams: {page: index}});
  }

  ngOnDestroy(): void{
    this.routeObservable.unsubscribe();
  }

}
