import { Question4, Question42 } from './../question4.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-seventy-five',
  templateUrl: './seventy-five.component.html',
  styleUrls: ['./seventy-five.component.css']
})
export class SeventyFiveComponent implements OnInit {

  q42: Question42[] = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q4_2.json').subscribe(
      data => {
        for (const datum of data.data) {
          const qq: Question42 = {
            Customer: datum.客戶,
            COUNT: datum.COUNT
          };
          this.q42.push(qq);
        }
      }
    );
  }

}
