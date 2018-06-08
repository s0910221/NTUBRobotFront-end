import { Q2Service } from './../service/q2.service';
import { Question2Item } from './../question2.model';
import { HttpService } from './../../../public_services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-q2',
  templateUrl: './detail-q2.component.html',
  styleUrls: ['./detail-q2.component.css']
})
export class DetailQ2Component implements OnInit {

  constructor(
    public _service: Q2Service,
    private route: ActivatedRoute,
    private _http: HttpService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    const url = this.route.snapshot.url[0].toString();
    this._service.setItems(url, name);
  }

}
