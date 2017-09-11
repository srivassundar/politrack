import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { OfficialService } from './official.service';
import { CategoryService } from './category.service';
import { HomepageComponent } from './homepage/homepage.component';
import { OfficialDetailComponent } from './official-detail/official-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchResultComponent,
    OfficialDetailComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [OfficialService, CategoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }