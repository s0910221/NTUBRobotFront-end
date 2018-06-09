import { Q5Service } from './../../pages/question5/service/q5.service';
import { Q3Service } from './../../pages/question3/service/q3.service';
import { Q2Service } from './../../pages/question2/service/q2.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Q4Service } from '../../pages/question4/service/q4.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input('isDisplaySideBar') isDisplaySideBar: boolean;
  @Output() closeSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();
  items: MenuItem[];

  constructor(
    private _serviceQ2: Q2Service,
    private _serviceQ3: Q3Service,
    private _serviceQ4: Q4Service,
    private _serviceQ5: Q5Service) { }

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
      label: '拆單交易',
      items: [
        { label: '疑似規避大額申報拆單', routerLink: ['/q1/dep'], command: (event) => { this.hideSideBar(); } },
        { label: '拆單後大額提款', routerLink: ['/q1/wdl'], command: (event) => { this.hideSideBar(); } }
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
        { label: '黑名單完整性驗證', routerLink: ['/q3/fuzzy'], command: (event) => { this.hideSideBar(); } },
        {
          label: '黑名單模糊比對',
          routerLink: ['/q3/accurate'],
          items: [
            {
              label: 'ALLAN',
              routerLink: ['/q3/accurate/ALLAN'],
              command: (event) => { this.hideSideBar(); this._serviceQ3.setItems('accurate', 'ALLAN'); }
            },
            {
              label: 'PETERS',
              routerLink: ['/q3/accurate/PETERS'],
              command: (event) => { this.hideSideBar(); this._serviceQ3.setItems('accurate', 'PETERS'); }
            }
          ]
        }
      ]
    };
  }

  get itemQ4(): MenuItem {
    return {
      label: '大額存款',
      items: [
        {
          label: '篩選大額存款帳戶',
          routerLink: ['/q4/fifty'],
          items: [
            {
              label: 'Cindy',
              routerLink: ['/q4/fifty/Cindy'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', 'Cindy'); }
            },
            {
              label: 'ETHANHUNT',
              routerLink: ['/q4/fifty/ETHANHUNT'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', 'ETHANHUNT'); }
            },
            {
              label: 'Sandy',
              routerLink: ['/q4/fifty/Sandy'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', 'Sandy'); }
            },
            {
              label: 'Sarah',
              routerLink: ['/q4/fifty/Sarah'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', 'Sarah'); }
            },
            {
              label: 'SOLOMONLANE',
              routerLink: ['/q4/fifty/SOLOMONLANE'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', 'SOLOMONLANE'); }
            },
            {
              label: '林茂春',
              routerLink: ['/q4/fifty/林茂春'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', '林茂春'); }
            },
            {
              label: '簡嘉昇',
              routerLink: ['/q4/fifty/簡嘉昇'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('fifty', '簡嘉昇'); }
            }
          ]
        },
        {
          label: '大額申報檔完整性驗證',
          routerLink: ['/q4/seventyFive'],
          items: [
            {
              label: 'SOLOMONLANE',
              routerLink: ['/q4/seventyFive/SOLOMONLANE'],
              command: (event) => { this.hideSideBar(); this._serviceQ4.setItems('seventyFive', 'SOLOMONLANE'); }
            }
          ]
        }
        // ,
        // { label: '100萬', routerLink: ['/q4/oneHundred'], command: (event) => { this.hideSideBar(); } },
        // { label: '150萬', routerLink: ['/q4/oneHundredFifty'], command: (event) => { this.hideSideBar(); } }
      ]
    };
  }

  get itemQ5(): MenuItem {
    return {
      label: '以現金及約當現金抵押之違約借款',
      routerLink: ['/q5'],
      items: [
        {
          label: 'ALLATANG',
          routerLink: ['/q5/ALLATANG'],
          command: (event) => { this.hideSideBar(); this._serviceQ5.setItems('1', 'ALLATANG'); }
        },
        {
          label: 'CHRIHAAS',
          routerLink: ['/q5/CHRIHAAS'],
          command: (event) => { this.hideSideBar(); this._serviceQ5.setItems('1', 'CHRIHAAS'); }
        },
        {
          label: 'ETHESCHN',
          routerLink: ['/q5/ETHESCHN'],
          command: (event) => { this.hideSideBar(); this._serviceQ5.setItems('1', 'ETHESCHN'); }
        },
        {
          label: 'JOHNPARK',
          routerLink: ['/q5/JOHNPARK'],
          command: (event) => { this.hideSideBar(); this._serviceQ5.setItems('1', 'JOHNPARK'); }
        },
        {
          label: 'SEANO\'CO',
          routerLink: ['/q5/SEANO\'CO'],
          command: (event) => { this.hideSideBar(); this._serviceQ5.setItems('1', 'SEANO\'CO'); }
        }
      ]
    };
  }

  hideSideBar() {
    this.closeSideBar.emit();
  }

}
