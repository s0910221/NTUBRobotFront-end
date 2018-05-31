import { Question5 } from './question5.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../public_services/http.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  q5: Question5[] = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q5.json').subscribe(
      data => {
        for (const datum of data.data) {
          const qq: Question5 = {
            personName: datum.人名,
            loanMount: datum.借款金額,
            guarantee: datum.抵押品,
            status: datum.合約狀況
          };
          this.q5.push(qq);
        }
      }
    );
  }

}
