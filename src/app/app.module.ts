import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './form/news/news.component';
import { HttpClientModule} from '@angular/common/http'
import { CardComponent } from './form/news/card/card.component';
import { NewsService } from './form/news/news.service';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes} from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { SearchAndPaginationService } from './form/searchAndPagination.service';

const appRoutes: Routes = [
  { path: '',component: FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule
  ],
  providers: [NewsService, SearchAndPaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
