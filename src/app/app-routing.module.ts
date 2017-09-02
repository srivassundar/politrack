import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent }   from './homepage/homepage.component';
import { ExploreOfficialComponent } from './explore-officials/explore-officials.component';
import { OfficialDetailComponent }  from './official-detail/official-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomepageComponent },
  { path: 'explore',    component: ExploreOfficialComponent },
  { path: 'detail/:id', component: OfficialDetailComponent },
  { path: 'about',      component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
