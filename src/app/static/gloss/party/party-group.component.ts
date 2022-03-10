import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { PartyService } from 'app/services/party.service';
import { SwiftGridComponent } from '../swift/swift-grid.component';
import { ClassAssocGridComponent } from './classassoc/classassoc-grid.component';
import { ClassAssocStepperComponent } from './classassoc/classassoc-stepper.component';
import { NettingGridComponent } from './netting/netting-grid.component';
import { PartyAddressComponent } from './party-address.component';
import { PartyAssocComponent } from './party-assoc.component';
import { PartyClassificationsComponent } from './party-classifications.component';
import { PartyDateComponent } from './party-date.component';
import { PartyExtRefComponent } from './party-ext.ref.component';
import { PartyFlagComponent } from './party-flag.component';
import { PartyInstrComponent } from './party-instr.component';
import { PartyNarrativeComponent } from './party-nar.component';
import { PartySsiComponent } from './party-ssi.component';
import { PartyTemplateComponent } from './party-template.component';
import { PartyTypeComponent } from './party.type.component';


@Component({
  selector: 'app-party-group',
  templateUrl: './party-group.component.html',
  providers: [PartyService],
})
export class PartyGroupComponent implements OnInit {
  @ViewChild(PartyTypeComponent) public partyTypeComponent: PartyTypeComponent;
  @ViewChild(PartyExtRefComponent)
  public partyrefComponent: PartyExtRefComponent;
  @ViewChild(PartyClassificationsComponent)
  public partyclassificationsComponent: PartyClassificationsComponent;
  @ViewChild(PartyFlagComponent) public partyflagComponent: PartyFlagComponent;
  @ViewChild(PartyNarrativeComponent)
  public partynarrativeComponent: PartyNarrativeComponent;
  @ViewChild(PartyAssocComponent)
  public partyassocComponent: PartyAssocComponent;
  @ViewChild(PartyInstrComponent)
  public partyinstrumentsComponent: PartyInstrComponent;
  @ViewChild(PartySsiComponent) public partyssiComponent: PartySsiComponent;
  @ViewChild(PartyDateComponent) public partyDateComponent: PartyDateComponent;
  @ViewChild(PartyAddressComponent)
  public partyAddressComponent: PartyAddressComponent;
  @ViewChild(PartyTemplateComponent)
  public partyTemplateComponent: PartyTemplateComponent;
  @ViewChild(ClassAssocGridComponent)
  public classAssocGridComponent: ClassAssocGridComponent;
  @ViewChild(ClassAssocStepperComponent)
  public classAssocStepperComponent: ClassAssocStepperComponent;
  @ViewChild(NettingGridComponent)
  public nettingGridComponent: NettingGridComponent;
  @ViewChild(SwiftGridComponent) public swiftGridComponent: SwiftGridComponent;

  @ViewChild('tabGroup', { static: true }) tabGroup: MatTabGroup;
  @Output() public formPartyRefChanged: EventEmitter<any> = new EventEmitter();

  @Input() public party_type: string;
  @Input() public component_type: string;

  public showreferencecomponent(): boolean {
    if (this.component_type === 'PARTYDATA') return true;
    else return false;
  }

  public showclassificationscomponent(): boolean {
    if (this.component_type === 'PARTYDATA') return true;
    else return false;
  }

  public showflagcomponent(): boolean {
    if (this.component_type === 'PARTYDATA') return true;
    else return false;
  }

  public shownarrativecomponent(): boolean {
    if (this.component_type === 'PARTYDATA') return true;
    else return false;
  }

  public showassociationcomponent(): boolean {
    if (
      (this.party_type === 'COMP' ||
        this.party_type === 'SECP' ||
        this.party_type === 'DEPO' ||
        this.party_type === 'DACC') &&
      this.component_type === 'PARTYDATA'
    )
      return true;
    else return false;
  }

  public showinstrumentscomponent(): boolean {
    if (
      (this.party_type === 'COMP' ||
        this.party_type === 'SECP' ||
        this.party_type === 'DEPO') &&
      this.component_type === 'PARTYDATA'
    )
      return true;
    else return false;
  }

  public showssicomponent(): boolean {
    if (
      (this.party_type === 'COMP' || this.party_type === 'SECP') &&
      this.component_type === 'PARTYDATA'
    )
      return true;
    else return false;
  }

  public showdatecomponent(): boolean {
    if (this.party_type === 'COMP' && this.component_type === 'PARTYDATA')
      return true;
    else return false;
  }

  public showaddresscomponent(): boolean {
    if (this.party_type === 'COMP' && this.component_type === 'PARTYDATA')
      return true;
    else return false;
  }

  public showtemplatecomponent(): boolean {
    if (this.party_type === 'COMP' && this.component_type === 'PARTYDATA')
      return true;
    else return false;
  }

  public showclassassoccomponent(): boolean {
    if (this.component_type === 'CLASSASSOC') return true;
    else return false;
  }

  public shownettingcomponent(): boolean {
    if (this.component_type === 'NETTING') return true;
    else return false;
  }

  public showswiftcomponent(): boolean {
    if (this.component_type === 'SWIFT') return true;
    else return false;
  }

  currentTab = 0;

  constructor(public partyService: PartyService) { }

  ngOnInit() { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup.selectedIndex);
  }

  public addComponent() {
    console.log(
      'party-group-component.addComponent() index:',
      this.tabGroup.selectedIndex
    );
    this.currentTab = this.tabGroup.selectedIndex;
    const param = { index: this.currentTab, tab: 'MatTab' };
    this.onClickAdd(param);
  }

  public sendComponent() {
    console.log(
      'party-group-component.sendComponent() index:',
      this.tabGroup.selectedIndex
    );
    this.currentTab = this.tabGroup.selectedIndex;
    const param = { index: this.currentTab, tab: 'MatTab' };
    if (this.component_type === 'CLASSASSOC') {
      this.partyService.sendClassAssocStatic(localStorage.getItem('glossenv'));
    } else if (this.component_type === 'SWIFT') {
      this.partyService.sendSwiftStatic();
    } else if (this.component_type === 'NETTING') {
      this.partyService.sendNettingStatic(localStorage.getItem('glossenv'));
    } else {
      if (param.index === 7) {
        this.partyService.sendPartySSI();
      } else {
        this.partyService.sendParty(localStorage.getItem('glossenv'));
      }
    }
  }

  public onFirstPartyType(partyType: string) {
    const party$ = this.partyService.getFirstPartyByType(partyType);
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
          console.log('Party Tab');
          this.partyTypeComponent.updateData();
          this.onFirstPartyType(this.party_type);
          break;
        }
        case 1: {
          if (this.component_type === 'CLASSASSOC') {
            console.log('Class Assoc Tab');
            this.classAssocGridComponent.updateData();
          } else if (this.component_type === 'SWIFT') {
            console.log('SWIFT Tab');
            this.swiftGridComponent.updateData();
          } else if (this.component_type === 'NETTING') {
            console.log('NETTING Tab');
            this.nettingGridComponent.updateData();
          } else {
            console.log('Reference Tab');
            this.partyrefComponent.updateData();
          }
          break;
        }
        case 2: {
          if (this.component_type === 'CLASSASSOC') {
            console.log('Class Assoc Stepper Tab');
            this.classAssocStepperComponent.updateData();
          } else {
            console.log('Classification Tab');
            this.partyclassificationsComponent.updateData();
          }
          break;
        }
        case 3: {
          console.log('Flag Tab');
          this.partyflagComponent.updateData();
          break;
        }
        case 4: {
          console.log('Narrative Tab');
          this.partynarrativeComponent.updateData();
          break;
        }
        case 5: {
          console.log('Association Tab');
          this.partyassocComponent.updateData();
          break;
        }
        case 6: {
          console.log('Instrument Tab');
          this.partyinstrumentsComponent.updateData();
          break;
        }
        case 7: {
          console.log('SSI Tab - 7');
          this.partyssiComponent.updateData();
          break;
        }
        case 8: {
          console.log('Date - 8 ');
          this.partyDateComponent.updateData();
          break;
        }
        case 9: {
          console.log('Address - 9 ');
          this.partyAddressComponent.updateData();
          break;
        }
        case 10: {
          console.log('Template - 10 ');
          this.partyTemplateComponent.updateData();
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
        console.log('Add Company Type');
        this.partyTypeComponent.onNotify(event);
        break;
      }
      case 1: {
        if (this.component_type === 'CLASSASSOC') {
          console.log('Class Assoc Tab');
        } else if (this.component_type === 'SWIFT') {
          console.log('SWIFT Tab');
          this.swiftGridComponent.onNotify(event);
        } else if (this.component_type === 'NETTING') {
          console.log('NETTING Tab');
          this.nettingGridComponent.onNotify(event);
        } else {
          console.log('Reference Tab');
          this.partyrefComponent.onNotify(event);
        }
        break;
      }
      case 2: {
        if (this.component_type === 'CLASSASSOC') {
          console.log('Class Assoc Stepper Tab');
        } else {
          console.log('Add Class Tab');
          this.partyclassificationsComponent.onNotify(event);
        }
        break;
      }
      case 3: {
        console.log('Add Flag Tab');
        this.partyflagComponent.onNotify(event);
        break;
      }
      case 4: {
        console.log('Add Narrative Tab');
        this.partynarrativeComponent.onNotify(event);
        break;
      }
      case 5: {
        console.log('Add Association Add');
        this.partyassocComponent.onNotify(event);
        break;
      }
      case 6: {
        console.log('Add Instrument Tab');
        this.partyinstrumentsComponent.onNotify(event);
        break;
      }
      case 7: {
        console.log('Add SSI Tab');
        this.partyssiComponent.onNotify(event);
        break;
      }
      case 8: {
        console.log('Add Date Tab');
        this.partyDateComponent.onNotify(event);
        break;
      }
      case 9: {
        console.log('Add Address Tab');
        this.partyAddressComponent.onNotify(event);
        break;
      }
      case 10: {
        console.log('Add Template Tab');
        this.partyTemplateComponent.onNotify(event);
        break;
      }
      default:
        break;
    }
  }
}
