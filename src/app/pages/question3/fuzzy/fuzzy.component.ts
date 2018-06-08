import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';
import { Question31 } from '../question3.model';

@Component({
  selector: 'app-fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.css']
})
export class FuzzyComponent implements OnInit {

  q31: Question31[] = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q3_1.json').subscribe(
      data => {
        this.q31 = data.data;
      }
    );
  }

}
