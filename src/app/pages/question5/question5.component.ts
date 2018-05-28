import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../public_services/http.service';
import { Q5 } from './q5.model';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  q5: Q5[] = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q5.json').subscribe(
      data => {
        for (const datum of data.data) {
          const qq: Q5 = { guarantee: datum.抵押品, personName: datum.人名, loanMount: datum.借款金額 };
          this.q5.push(qq);
        }
      }
    );
  }

}
