import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisplaySideBar = false;
  public spinkit = Spinkit;
  constructor() { }

  closeSideBar() {
    this.isDisplaySideBar = false;
  }

}
