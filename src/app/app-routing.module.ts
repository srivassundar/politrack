import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent }   from './homepage/homepage.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { OfficialDetailComponent }  from './official-detail/official-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomepageComponent },
  { path: 'search/:keyword',    component: SearchResultComponent },
  { path: 'detail/:id', component: OfficialDetailComponent },
  { path: 'about',      component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
