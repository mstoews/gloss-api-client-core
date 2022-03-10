import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { PartyRefService } from 'app/static/party/party.services/partyRef.service';
import { PartyService } from './company.services/party.service';
import { BaseGroupComponent} from '../../base/base-group.component';

@Component({
  selector: 'app-company-form',
  templateUrl: './instr-form.component.html',
  styleUrls: ['./instr-form.component.scss'],
  providers: [InstrService],

})
  export class InstrumentFormComponent extends BaseGroupComponent {
  @Input() public inRef: string;
  @Input() public partyType: string;

  @ViewChild('tabGroup', { static: true }) tabGroup: MatTabGroup;
  @Output() public FormPartyRefChanged: EventEmitter<any> = new EventEmitter();

  formGroup: FormGroup;
  // titleAlert = 'This field is required';
  // post: any = '';
  // type: any = '';
  // numberOfTicks = 0;
  currentTab = 0;
  // panelOpenState = false;


  constructor(
      public formBuilder: FormBuilder,
      public partyService: PartyService,
      public partyRefService: PartyRefService) {
      super(formBuilder, partyService, partyRefService);
      }

  OnInit() {
    super.ngOnInit();
    // this.createForm();
    // this.onFirstPartyType();
  }

  updatePartyTypeComponent(){
    let param = {index: 0, tab: 'MatTab'};
    if (this.currentTab === 0) {
      this.onTabClick(param);
    }
    else {
      param = {index: this.currentTab, tab: 'MatTab'};
    }
  }

  public onFirstPartyType() {
      const party$ = this.partyService.getFirstType('COMP');
      party$.subscribe((data: any) => {
        this.partyService.setRef(data.party_ref);
        this.partyService.setType(data.party_type);
        this.partyType = data.party_type;
        console.log('OnFirstPartyType:', this.partyService.getPartyRef(), data.party_ref);
   });
  }

  onTabClick(event) {
      console.log(event);
      super.currentTab = event.index;
      super.onTabClick(event);
      this.currentTab = event.index;
      switch (event.index) {
        case 0: {
          // console.log('Main changed to:', this.partyType);
          this.partyTypeComponent.updateData();
          break;
        }
        case 1: {
          console.log('Reference Tab');
          this.refComponent.refreshData();
          break;
        }
        case 2: {
          console.log('Class Tab');
          this.classificationsComponent.updateData();
          break;
        }
        case 3: {
          console.log('Flag Tab');
          this.partyFlagComponent.updateData();
          break;
        }
        case 4: {
          console.log('Association Tab');
          this.assocComponent.refreshData();
          break;
        }

        case 5: {
          console.log('Instrument Tab');
          this.instrumentsComponent.updateData();
          break;
        }

        case 6: {
          console.log('Narrative Tab');
          this.narrativeComponent.updateData();
          break;
        }

        case 7: {
          console.log('SSI Tab');
          this.ssiComponent.updateData();
          break;
        }
        default:
          break;
      }
   }

  createForm() {
    this.formGroup = this.formBuilder.group({
    });
  }
}
