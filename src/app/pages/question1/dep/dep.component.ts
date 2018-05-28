import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DEPComponent implements OnInit {

  data: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q1.json').subscribe(
      data => {
        const labels = [];
        const count = [];
        for (const datum of data.data) {
          labels.push(datum.人名);
          count.push(datum._45萬至_50萬拆單次數);
        }
        this.data = {
          labels: labels,
          datasets: [
            {
              label: 'DEP:45萬至_50萬拆單次數',
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
