import { Injectable } from '@angular/core';
import { Question4Item } from '../question4.model';
import { HttpService } from '../../../public_services/http.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Q4Service {

  q4Items: Question4Item[] = [];
  name: string;
  constructor(private _http: HttpService,
    private route: ActivatedRoute) { }

  setItems(url, name) {
    this.name = name;
    let fileName: string;
    if (url === 'fifty') {
      fileName = '/Q4_1_' + this.name + '.json';
    } else if (url === 'seventyFive') {
      fileName = '/Q4_2_' + this.name + '.json';
    }
    this._http.getData(fileName).subscribe(
      data => {
        this.q4Items = [];
        for (const datum of data.data) {
          const qq: Question4Item = {
            Transaction_Number: datum.Transaction_Number,
            Date1: datum.Date1,
            Time: datum.時間,
            Account: datum.帳號,
            Customer: datum.客戶,
            Type: datum.Type,
            Transaction_Amount: datum.Transaction_Amount
          };
          this.q4Items.push(qq);
        }
      }
    );
  }

}
