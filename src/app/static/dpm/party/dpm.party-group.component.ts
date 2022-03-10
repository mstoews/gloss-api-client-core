import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { PartyService } from 'app/services/party.service';
import { DpmAccountExtRefComponent } from '../account/dpm.account-ext.ref.component';
import { DpmAccountFlagComponent } from '../account/dpm.account-flag.component';
import { DpmAccountTypeComponent } from '../account/dpm.account.type.component';
import { DpmConfigDefComponent } from './dpm.config-def.component';
import { DpmPartyExtRefComponent } from './dpm.party-ext.ref.component';
import { DpmPartyFlagComponent } from './dpm.party-flag.component';
import { DpmPartyTypeComponent } from './dpm.party.type.component';

@Component({
  selector: 'app-dpmparty-group',
  templateUrl: './dpm.party-group.component.html',
  providers: [PartyService],
})
export class DpmPartyGroupComponent implements OnInit {
  constructor(public partyService: PartyService) { }

  @ViewChild(DpmPartyTypeComponent)
  public dpmpartyTypeComponent: DpmPartyTypeComponent;
  @ViewChild(DpmPartyExtRefComponent)
  public dpmpartyrefComponent: DpmPartyExtRefComponent;
  @ViewChild(DpmPartyFlagComponent)
  public dpmpartyflagComponent: DpmPartyFlagComponent;
  @ViewChild(DpmAccountTypeComponent)
  public dpmaccountTypeComponent: DpmAccountTypeComponent;
  @ViewChild(DpmAccountExtRefComponent)
  public dpmaccountrefComponent: DpmAccountExtRefComponent;
  @ViewChild(DpmAccountFlagComponent)
  public dpmaccountflagComponent: DpmAccountFlagComponent;
  @ViewChild(DpmConfigDefComponent)
  public dpmConfigDefComponent: DpmConfigDefComponent;
  @ViewChild('tabGroup', { static: true }) tabGroup: MatTabGroup;

  @Output() public formPartyRefChanged: EventEmitter<any> = new EventEmitter();

  @Input() public componentType: string;

  currentTab = 0;

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup.selectedIndex);
  }

  public addComponent() {
    console.log(
      'dpm.party-group-component.addComponent() index:',
      this.tabGroup.selectedIndex
    );
    this.currentTab = this.tabGroup.selectedIndex;
    const param = { index: this.currentTab, tab: 'MatTab' };
    this.onClickAdd(param);
  }

  public sendComponent() {
    console.log(
      'dpm.party-group-component.sendComponent() index:',
      this.tabGroup.selectedIndex
    );
    this.partyService.senddpmParty(this.componentType,localStorage.getItem('jasdecenv'));
  }

  public getfirstdpmPartyByClient() {
    const party$ = this.partyService.getFirstdpmPartyByClient(this.componentType);
    party$.subscribe((data: any) => {
      this.partyService.setParty(data);
      console.log('OnFirstPartyType:', this.partyService.getPartyRef());
    });
  }

  public refresh() {
    this.currentTab = this.tabGroup.selectedIndex;
    console.log('Refreshing tabs selected', this.currentTab);
    const param = { index: this.currentTab, tab: 'MatTab' };
    this.onTabClick(param);
  }

  onTabClick(event) {
    {
      this.currentTab = event.index;
      switch (event.index) {
        case 0: {
          console.log('Dpm Party Tab');
          this.dpmpartyTypeComponent.updateData();
          this.getfirstdpmPartyByClient();
          break;
        }
        case 1: {
          console.log('Dpm Reference Tab');
          this.dpmpartyrefComponent.updateData();
          break;
        }
        case 2: {
          console.log('Dpm Flag Tab');
          this.dpmpartyflagComponent.updateData();
          break;
        }
        case 3: {
          console.log('Dpm Account Tab');
          this.dpmaccountTypeComponent.updateData();
          break;
        }
        case 4: {
          console.log('Dpm Account Ref Tab');
          this.dpmaccountrefComponent.updateData();
          break;
        }
        case 5: {
          console.log('Dpm Account Flag Tab');
          this.dpmaccountflagComponent.updateData();
          break;
        }
        case 6: {
          console.log('Dpm Config Def Tab');
          this.dpmConfigDefComponent.updateData();
          break;
        }
        default:
          break;
      }
    }
  }

  onClickAdd(event) {
    this.currentTab = event.index;
    switch (event.index) {
      case 0: {
        console.log('Add Dpm Party Tab');
        this.dpmpartyTypeComponent.onNotify(event);
        break;
      }
      case 1: {
        console.log('Add Dpm Reference Tab');
        this.dpmpartyrefComponent.onNotify(event);
        break;
      }
      case 2: {
        console.log('Add Dpm Flag Tab');
        this.dpmpartyflagComponent.onNotify(event);
        break;
      }
      case 3: {
        console.log('Add Dpm Account Tab');
        this.dpmaccountTypeComponent.onNotify(event);
        break;
      }
      case 4: {
        console.log('Add Dpm Account Ref Tab');
        this.dpmaccountrefComponent.onNotify(event);
        break;
      }
      case 5: {
        console.log('Add Dpm Account Flag Tab');
        this.dpmaccountflagComponent.onNotify(event);
        break;
      }
      case 6: {
        console.log('Dpm Config Def Tab');
        this.dpmConfigDefComponent.onNotify(event);
        break;
      }
      default:
        break;
    }
  }
}
