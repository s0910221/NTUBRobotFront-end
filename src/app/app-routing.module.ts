import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Question1Component } from './pages/question1/question1.component';
import { DEPComponent } from './pages/question1/dep/dep.component';
import { WDLComponent } from './pages/question1/wdl/wdl.component';
import { Question2Component } from './pages/question2/question2.component';
import { FiveComponent } from './pages/question2/five/five.component';
import { TenComponent } from './pages/question2/ten/ten.component';
import { Question3Component } from './pages/question3/question3.component';
import { FuzzyComponent } from './pages/question3/fuzzy/fuzzy.component';
import { AccurateComponent } from './pages/question3/accurate/accurate.component';
import { Question4Component } from './pages/question4/question4.component';
import { FiftyComponent } from './pages/question4/fifty/fifty.component';
import { SeventyFiveComponent } from './pages/question4/seventy-five/seventy-five.component';
import { OneHundredComponent } from './pages/question4/one-hundred/one-hundred.component';
import { OneHundredFiftyComponent } from './pages/question4/one-hundred-fifty/one-hundred-fifty.component';
import { Question5Component } from './pages/question5/question5.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailQ2Component } from './pages/question2/detail-q2/detail-q2.component';
import { DetailQ3Component } from './pages/question3/detail-q3/detail-q3.component';
import { DetailQ4Component } from './pages/question4/detail-q4/detail-q4.component';
import { DetailQ5Component } from './pages/question5/detail-q5/detail-q5.component';

const routes: Routes = [
  {
    path: 'q1', component: Question1Component, canActivate: [AuthGuard], children: [
      { path: 'dep', component: DEPComponent },
      { path: 'wdl', component: WDLComponent },
      { path: '', redirectTo: 'dep', pathMatch: 'full' },
      { path: '**', redirectTo: 'dep' }
    ]
  },
  {
    path: 'q2', component: Question2Component, canActivate: [AuthGuard], children: [
      { path: 'five', component: FiveComponent },
      { path: 'five/:name', component: DetailQ2Component },
      { path: 'ten', component: TenComponent },
      { path: 'ten/:name', component: DetailQ2Component },
      { path: '', redirectTo: 'five', pathMatch: 'full' },
      { path: '**', redirectTo: 'five' }
    ]
  },
  {
    path: 'q3', component: Question3Component, canActivate: [AuthGuard], children: [
      { path: 'accurate', component: AccurateComponent },
      { path: 'accurate/:name', component: DetailQ3Component },
      { path: 'fuzzy', component: FuzzyComponent },
      { path: 'fuzzy/:name', component: DetailQ3Component },
      { path: '', redirectTo: 'accurate', pathMatch: 'full' },
      { path: '**', redirectTo: 'accurate' }
    ]
  },
  {
    path: 'q4', component: Question4Component, canActivate: [AuthGuard], children: [
      { path: 'fifty', component: FiftyComponent },
      { path: 'fifty/:name', component: DetailQ4Component },
      { path: 'seventyFive', component: SeventyFiveComponent },
      { path: 'seventyFive/:name', component: DetailQ4Component },
      { path: 'oneHundred', component: OneHundredComponent },
      { path: 'oneHundredFifty', component: OneHundredFiftyComponent },
      { path: '', redirectTo: 'fifty', pathMatch: 'full' },
      { path: '**', redirectTo: 'fifty' }
    ]
  },
  {
    path: 'q5', component: Question5Component, canActivate: [AuthGuard],
  },
  {
    path: 'q5/:name', component: DetailQ5Component, canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
