import { Q3Service } from './../service/q3.service';
import { Question3Item } from './../question3.model';
import { HttpService } from './../../../public_services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-q3',
  templateUrl: './detail-q3.component.html',
  styleUrls: ['./detail-q3.component.css']
})
export class DetailQ3Component implements OnInit {

  constructor(
    public _service: Q3Service,
    private route: ActivatedRoute,
    private _http: HttpService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    const url = this.route.snapshot.url[0].toString();
    this._service.setItems(url, name);
  }

}
