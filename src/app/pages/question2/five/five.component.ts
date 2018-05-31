import { Question2 } from './../question2.model';
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
    this._http.getData('/Q2-1.json').subscribe(
      data => {
        const labels = [];
        const count = [];
        const q2: Question2[] = data.data;
        for (const q of q2) {
          labels.push(q.客戶);
          count.push(q.COUNT);
        }
        this.data = {
          labels: labels,
          datasets: [
            {
              label: '密集存款:5分鐘內',
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
