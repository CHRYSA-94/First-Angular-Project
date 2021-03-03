import {  Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NewsService } from './news/news.service';
import { FormControl, FormGroup} from '@angular/forms'
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators'
import { SearchAndPaginationService } from './searchAndPagination.service';
import { EMPTY, Observable } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  totalNews$ :Observable<number> = EMPTY;

  form: FormGroup;

  categories: { value: string;}[] =
    [
      {value: 'Business'},
      {value: 'Entertainment'},
      {value: 'General'},
      {value: 'Health'},
      {value: 'Science'},
      {value: 'Sports'},
      {value: 'Technology'}
    ];

  constructor(public newsService:NewsService, public searchAndPaginationService:SearchAndPaginationService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'searchingData': new FormGroup({
        'typingWord': new FormControl('a'),
        'category': new FormControl('Business'),
      }),
      'pagination' : new FormControl('1')
    })

    this.form.get('searchingData.typingWord').valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe( val =>{
      console.log(val);
      this.searchAndPaginationService.userInput.next(val)
    })

    this.form.get('searchingData.category').valueChanges
    .pipe(
      map(val=>val.toLowerCase())
    )
    .subscribe( val => {
      console.log(val);

      this.searchAndPaginationService.userSelectChoice.next(val)
    })

   this.totalNews$ = this.newsService.totalResults

  }


  onPageChange(event: PageEvent){
    console.log(event)
    console.log(event.pageIndex)
    const startNumber = event.pageIndex * event.pageSize;
    let endNumber = startNumber + event.pageSize;
    if(endNumber > this.totalNews$) {
      endNumber = this.totalNews$;
    }
    this.searchAndPaginationService.changePage.next(event.pageIndex)
  }

}
