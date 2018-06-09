import { Injectable } from '@angular/core';
import { Question1Item } from '../question1.model';
import { HttpService } from '../../../public_services/http.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Q1Service {

  q1Items: Question1Item[] = [];
  name: string;
  constructor(private _http: HttpService,
    private route: ActivatedRoute) { }

  // setItems(url, name) {
  // this.name = name;
  // let fileName: string;
  // if (url === 'fifty') {
  //   fileName = '/Q1_1_' + this.name + '.json';
  // } else if (url === 'seventyFive') {
  //   fileName = '/Q1_2_' + this.name + '.json';
  // }
  setItems() {
    this._http.getData('/Q1_2.json').subscribe(
      data => {
        this.q1Items = [];
        console.log(data);
        for (const datum of data.data) {
          const qq: Question1Item = {
            Account: datum.帳號,
            Customer: datum.客戶,
            Date1: datum.Date1,
            Type: datum.Type,
            Transaction_Amount: datum.Transaction_Amount,
            Type2: datum.Type2,
            Transaction_Amount2: datum.Transaction_Amount2
          };
          this.q1Items.push(qq);
        }
      }
    );
  }

}
