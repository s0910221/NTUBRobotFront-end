import { Component, OnInit } from '@angular/core';
import { Question32 } from '../question3.model';
import { HttpService } from '../../../public_services/http.service';

@Component({
  selector: 'app-accurate',
  templateUrl: './accurate.component.html',
  styleUrls: ['./accurate.component.css']
})
export class AccurateComponent implements OnInit {

  q32: Question32[] = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getData('/Q3_2.json').subscribe(
      data => {
        this.q32 = data.data;
      }
    );
  }

}
