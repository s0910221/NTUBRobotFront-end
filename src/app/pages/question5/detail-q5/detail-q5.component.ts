import { Q5Service } from './../service/q5.service';
import { Question5Item } from './../question5.model';
import { HttpService } from './../../../public_services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-q5',
  templateUrl: './detail-q5.component.html',
  styleUrls: ['./detail-q5.component.css']
})
export class DetailQ5Component implements OnInit {

  constructor(
    public _service: Q5Service,
    private route: ActivatedRoute,
    private _http: HttpService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    const url = this.route.snapshot.url[0].toString();
    this._service.setItems(url, name);
  }

}
