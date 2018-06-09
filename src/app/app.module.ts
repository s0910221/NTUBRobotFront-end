import { Q3Service } from './pages/question3/service/q3.service';
import { HttpService } from './public_services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SideMenuComponent } from './share-component/side-menu/side-menu.component';
import { Question1Component } from './pages/question1/question1.component';
import { DEPComponent } from './pages/question1/dep/dep.component';
import { WDLComponent } from './pages/question1/wdl/wdl.component';

// other libs
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

// HttpLoader
import { NgHttpLoaderModule } from 'ng-http-loader';
import { Question2Component } from './pages/question2/question2.component';
import { FiveComponent } from './pages/question2/five/five.component';
import { TenComponent } from './pages/question2/ten/ten.component';
import { Question3Component } from './pages/question3/question3.component';
import { Question4Component } from './pages/question4/question4.component';
import { Question5Component } from './pages/question5/question5.component';
import { FuzzyComponent } from './pages/question3/fuzzy/fuzzy.component';
import { AccurateComponent } from './pages/question3/accurate/accurate.component';
import { FiftyComponent } from './pages/question4/fifty/fifty.component';
import { SeventyFiveComponent } from './pages/question4/seventy-five/seventy-five.component';
import { OneHundredComponent } from './pages/question4/one-hundred/one-hundred.component';
import { OneHundredFiftyComponent } from './pages/question4/one-hundred-fifty/one-hundred-fifty.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailQ2Component } from './pages/question2/detail-q2/detail-q2.component';
import { Q2Service } from './pages/question2/service/q2.service';
import { DetailQ3Component } from './pages/question3/detail-q3/detail-q3.component';
import { Q4Service } from './pages/question4/service/q4.service';
import { DetailQ4Component } from './pages/question4/detail-q4/detail-q4.component';
import { DetailQ5Component } from './pages/question5/detail-q5/detail-q5.component';
import { Q5Service } from './pages/question5/service/q5.service';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    Question1Component,
    DEPComponent,
    WDLComponent,
    Question2Component,
    FiveComponent,
    TenComponent,
    Question3Component,
    Question4Component,
    Question5Component,
    FuzzyComponent,
    AccurateComponent,
    FiftyComponent,
    SeventyFiveComponent,
    OneHundredComponent,
    OneHundredFiftyComponent,
    LoginComponent,
    DetailQ2Component,
    DetailQ3Component,
    DetailQ4Component,
    DetailQ5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    ChartModule,
    SidebarModule,
    PanelMenuModule,
    TableModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    NgHttpLoaderModule
  ],
  providers: [
    HttpService,
    Q2Service,
    Q3Service,
    Q4Service,
    Q5Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
