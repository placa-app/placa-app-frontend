import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FeedComponent } from './feed/feed.component';
import { OnboradingComponent } from './onborading/onborading.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AssessmentComponent,
      FeedComponent,
      OnboradingComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
