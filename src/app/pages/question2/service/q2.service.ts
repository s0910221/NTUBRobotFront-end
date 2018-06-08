import { Injectable } from '@angular/core';
import { Question2Item } from '../question2.model';
import { HttpService } from '../../../public_services/http.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Q2Service {

  q2Items: Question2Item[] = [];
  name: string;
  constructor(private _http: HttpService,
    private route: ActivatedRoute) { }

  setItems(url, name) {
    this.name = name;
    let fileName: string;
    if (url === 'five') {
      fileName = '/Q2_1_' + this.name + '.json';
    } else if (url === 'ten') {
      fileName = '/Q2_2_' + this.name + '.json';
    }
    this.q2Items = [];
    this._http.getData(fileName).subscribe(
      data => {
        for (const datum of data.data) {
          const qq: Question2Item = {
            Transaction_Number: datum.Transaction_Number,
            Date1: datum.Date1,
            Time: datum.時間,
            Account: datum.帳號,
            Customer: datum.客戶,
            Type: datum.Type,
            Transaction_Amount: datum.Transaction_Amount
          };
          this.q2Items.push(qq);
        }
      }
    );
  }

}
