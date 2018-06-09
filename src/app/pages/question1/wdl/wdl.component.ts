import { Question1 } from './../question1.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../public_services/http.service';
import { Q1Service } from '../service/q1.service';

@Component({
  selector: 'app-wdl',
  templateUrl: './wdl.component.html',
  styleUrls: ['./wdl.component.css']
})
export class WDLComponent implements OnInit {

  constructor(
    private _http: HttpService,
    public _service: Q1Service) { }

  ngOnInit() {
    this._service.setItems();
  }

}
