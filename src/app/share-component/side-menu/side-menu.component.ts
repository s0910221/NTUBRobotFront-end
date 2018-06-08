import { Q2Service } from './../../pages/question2/service/q2.service';
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

  constructor(private _serviceQ2: Q2Service) { }

  ngOnInit() {
    this.items = [];
    this.items.push(this.itemQ1);
    this.items.push(this.itemQ2);
    this.items.push(this.itemQ3);
    this.items.push(this.itemQ4);
    this.items.push(this.itemQ5);
  }

  get itemQ1(): MenuItem {
    return {
      label: '門檻50萬之拆單交易',
      items: [{
        label: 'DEP',
        routerLink: ['/q1/dep'],
        items: [{
          label: 'a'
        }, {
          label: 'a'
        }, {
          label: 'a'
        }, {
          label: 'a'
        }]
      },
      { label: 'WDL', routerLink: ['/q1/wdl'], command: (event) => { this.hideSideBar(); } }
      ]
    };
  }

  get itemQ2(): MenuItem {
    return {
      label: '密集存款',
      items: [
        {
          label: '5分鐘',
          routerLink: ['/q2/five'],
          items: [
            {
              label: 'MAGGIEWU',
              routerLink: ['/q2/five/MAGGIEWU'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', 'MAGGIEWU'); }
            },
            {
              label: 'PETERS',
              routerLink: ['/q2/five/PETERS'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', 'PETERS'); }
            },
            {
              label: 'SOLOMONLANE',
              routerLink: ['/q2/five/SOLOMONLANE'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', 'SOLOMONLANE'); }
            },
            {
              label: 'Tony',
              routerLink: ['/q2/five/Tony'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', 'Tony'); }
            },
            {
              label: '王紹揚',
              routerLink: ['/q2/five/王紹揚'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', '王紹揚'); }
            },
            {
              label: '何忠天',
              routerLink: ['/q2/five/何忠天'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', '何忠天'); }
            },
            {
              label: '林茂春',
              routerLink: ['/q2/five/林茂春'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('five', '林茂春'); }
            },
          ]
        },
        {
          label: '10分鐘',
          routerLink: ['/q2/ten'],
          items: [
            {
              label: 'SOLOMONLANE',
              routerLink: ['/q2/ten/SOLOMONLANE'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('ten', 'SOLOMONLANE'); }
            },
            {
              label: '林茂春',
              routerLink: ['/q2/ten/林茂春'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('ten', '林茂春'); }
            },
            {
              label: '林桂美',
              routerLink: ['/q2/ten/林桂美'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('ten', '林桂美'); }
            },
            {
              label: '陳浩翔',
              routerLink: ['/q2/ten/陳浩翔'],
              command: (event) => { this.hideSideBar(); this._serviceQ2.setItems('ten', '陳浩翔'); }
            },
          ]
        }
      ]
    };
  }

  get itemQ3(): MenuItem {
    return {
      label: '黑名單交易',
      items: [
        { label: '模糊比對', routerLink: ['/q3/fuzzy'], command: (event) => { this.hideSideBar(); } },
        { label: '精準比對', routerLink: ['/q3/accurate'], command: (event) => { this.hideSideBar(); } }
      ]
    };
  }

  get itemQ4(): MenuItem {
    return {
      label: '大額存款',
      items: [
        { label: '50萬', routerLink: ['/q4/fifty'], command: (event) => { this.hideSideBar(); } },
        { label: '75萬', routerLink: ['/q4/seventyFive'], command: (event) => { this.hideSideBar(); } },
        { label: '100萬', routerLink: ['/q4/oneHundred'], command: (event) => { this.hideSideBar(); } },
        { label: '150萬', routerLink: ['/q4/oneHundredFifty'], command: (event) => { this.hideSideBar(); } }
      ]
    };
  }

  get itemQ5(): MenuItem {
    return {
      label: '以現金及約當現金抵押之違約借款', routerLink: ['/q5'], command: (event) => { this.hideSideBar(); }
    };
  }

  hideSideBar() {
    this.closeSideBar.emit();
  }

}
