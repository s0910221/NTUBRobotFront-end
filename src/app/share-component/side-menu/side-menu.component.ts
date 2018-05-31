import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input('isDisplaySideBar') isDisplaySideBar: boolean;
  @Output() closeSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: '門檻50萬之拆單交易',
        items: [
          { label: 'DEP', routerLink: ['/q1/dep'], command: (event) => { this.hideSideBar(); } },
          { label: 'WDL', routerLink: ['/q1/wdl'], command: (event) => { this.hideSideBar(); } }
        ]
      },
      {
        label: '密集存款',
        items: [
          { label: '5分鐘', routerLink: ['/q2/five'], command: (event) => { this.hideSideBar(); } },
          { label: '10分鐘', routerLink: ['/q2/ten'], command: (event) => { this.hideSideBar(); } }
        ]
      },
      {
        label: '黑名單交易',
        items: [
          { label: '模糊比對', routerLink: ['/q3/fuzzy'], command: (event) => { this.hideSideBar(); } },
          { label: '精準比對', routerLink: ['/q3/accurate'], command: (event) => { this.hideSideBar(); } }
        ]
      },
      {
        label: '大額存款',
        items: [
          { label: '50萬', routerLink: ['/q4/fifty'], command: (event) => { this.hideSideBar(); } },
          { label: '75萬', routerLink: ['/q4/seventyFive'], command: (event) => { this.hideSideBar(); } },
          { label: '100萬', routerLink: ['/q4/oneHundred'], command: (event) => { this.hideSideBar(); } },
          { label: '150萬', routerLink: ['/q4/oneHundredFifty'], command: (event) => { this.hideSideBar(); } }
        ]
      },
      {
        label: '以現金及約當現金抵押之違約借款', routerLink: ['/q5'], command: (event) => { this.hideSideBar(); }
      }
    ];
  }

  hideSideBar() {
    this.closeSideBar.emit();
  }

}
