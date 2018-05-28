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

const routes: Routes = [
  {
    path: 'q1', component: Question1Component, children: [
      { path: 'dep', component: DEPComponent },
      { path: 'wdl', component: WDLComponent },
      { path: '', redirectTo: 'dep', pathMatch: 'full' },
      { path: '**', redirectTo: 'dep' }
    ]
  },
  {
    path: 'q2', component: Question2Component, children: [
      { path: 'five', component: FiveComponent },
      { path: 'ten', component: TenComponent },
      { path: '', redirectTo: 'five', pathMatch: 'full' },
      { path: '**', redirectTo: 'five' }
    ]
  },
  {
    path: 'q3', component: Question3Component, children: [
      { path: 'accurate', component: AccurateComponent },
      { path: 'fuzzy', component: FuzzyComponent },
      { path: '', redirectTo: 'accurate', pathMatch: 'full' },
      { path: '**', redirectTo: 'accurate' }
    ]
  },
  {
    path: 'q4', component: Question4Component, children: [
      { path: 'fifty', component: FiftyComponent },
      { path: 'seventyFive', component: SeventyFiveComponent },
      { path: 'oneHundred', component: OneHundredComponent },
      { path: 'oneHundredFifty', component: OneHundredFiftyComponent },
      { path: '', redirectTo: 'fifty', pathMatch: 'full' },
      { path: '**', redirectTo: 'fifty' }
    ]
  },
  {
    path: 'q5', component: Question5Component
  },
  { path: '', redirectTo: 'q1', pathMatch: 'full' },
  { path: '**', redirectTo: 'q1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
