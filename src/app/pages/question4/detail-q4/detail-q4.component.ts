import { Q4Service } from './../service/q4.service';
import { Question4Item } from './../question4.model';
import { HttpService } from './../../../public_services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-q4',
  templateUrl: './detail-q4.component.html',
  styleUrls: ['./detail-q4.component.css']
})
export class DetailQ4Component implements OnInit {

  constructor(
    public _service: Q4Service,
    private route: ActivatedRoute,
    private _http: HttpService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    const url = this.route.snapshot.url[0].toString();
    this._service.setItems(url, name);
  }

}
