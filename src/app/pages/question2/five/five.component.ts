import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  data: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q2.json').subscribe(
      data => {
        const labels = [];
        const count = [];
        for (const datum of data.data) {
          labels.push(datum.人名);
          count.push(datum.交易次數);
        }
        this.data = {
          labels: labels,
          datasets: [
            {
              label: '區間:5min內',
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
