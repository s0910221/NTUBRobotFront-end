import { Question4 } from './../question4.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-fifty',
  templateUrl: './fifty.component.html',
  styleUrls: ['./fifty.component.css']
})
export class FiftyComponent implements OnInit {

  data: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q4_1.json').subscribe(
      data => {
        const labels = [];
        const count = [];
        const q4: Question4[] = data.data;
        for (const q of q4) {
          labels.push(q.客戶);
          count.push(q.COUNT);
        }

        this.data = {
          labels: labels,
          datasets: [
            {
              label: '篩選大額存款帳戶',
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
