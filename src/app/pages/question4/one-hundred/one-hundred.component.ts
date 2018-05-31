import { Question4 } from './../question4.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-one-hundred',
  templateUrl: './one-hundred.component.html',
  styleUrls: ['./one-hundred.component.css']
})
export class OneHundredComponent implements OnInit {

  data: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q4-3.json').subscribe(
      data => {
        const labels = [];
        const count = [];
        const q4: Question4[] = data.data;
        for (const q of q4) {
          labels.push(q.帳號);
          count.push(q.COUNT);
        }

        this.data = {
          labels: labels,
          datasets: [
            {
              label: '大額存款:100萬',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: count
            }
          ]
        };
      }
    );
  }

}
