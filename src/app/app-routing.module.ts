import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';



const routes: Routes = [
  {
    path: 'assessment',
    component: AssessmentComponent,
  },
  { path: '',
   component: HomeComponent
  },
  {
    path: 'feed',
    component: FeedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
