import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'assessment',
    component: AssessmentComponent,
  },
  { path: '',
   component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
