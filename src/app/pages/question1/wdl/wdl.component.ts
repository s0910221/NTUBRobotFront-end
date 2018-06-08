import { Question1 } from './../question1.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-wdl',
  templateUrl: './wdl.component.html',
  styleUrls: ['./wdl.component.css']
})
export class WDLComponent implements OnInit {

  data: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q1_2.json').subscribe(
      data => {
        const labels = [];
        const count = [];
        const q1: Question1[] = data.data;
        for (const q of q1) {
          labels.push(q.帳號);
          count.push(q.COUNT);
        }

        this.data = {
          labels: labels,
          datasets: [
            {
              label: 'A1_WDL',
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
