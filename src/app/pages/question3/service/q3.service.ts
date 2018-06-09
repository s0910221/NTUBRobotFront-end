import { Injectable } from '@angular/core';
import { Question3Item } from '../question3.model';
import { HttpService } from '../../../public_services/http.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Q3Service {

  q3Items: Question3Item[] = [];
  name: string;
  constructor(private _http: HttpService,
    private route: ActivatedRoute) { }

  setItems(url, name) {
    this.name = name;
    let fileName: string;
    if (url === 'fuzzy') {
      fileName = '/Q3_1_' + this.name + '.json';
    } else if (url === 'accurate') {
      fileName = '/Q3_2_' + this.name + '.json';
    }
    this._http.getData(fileName).subscribe(
      data => {
        this.q3Items = [];
        for (const datum of data.data) {
          const qq: Question3Item = {
            Transaction_Number: datum.Transaction_Number,
            Date1: datum.Date1,
            Time: datum.時間,
            Account: datum.帳號,
            Customer: datum.客戶,
            Type: datum.Type,
            Transaction_Amount: datum.Transaction_Amount
          };
          this.q3Items.push(qq);
        }
      }
    );
  }

}
