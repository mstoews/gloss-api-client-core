import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NettingInput } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { SnackService } from 'app/services/snack.service';

@Component({
  selector: 'app-party-netting-stepper',
  templateUrl: './netting-stepper.component.html',
})
export class NettingStepperComponent {

  constructor(
    public dialogRef: MatDialogRef<NettingStepperComponent>,
    private formBuilder: FormBuilder,
    private partyService: PartyService,
    public snackbar: SnackService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: NettingInput) {
    if (localStorage.getItem('glossenv') === null) {
      this.snackbar.showMessage('Please activate the environment you would like to push/pull the static using Home Component');
    }
    else {
      this.partyService.getGlossCodeByClass(1200).subscribe(val => this.glossCodes1200 = val);
      this.partyService.getGlossCodeByClass(1210).subscribe(val => this.glossCodes1210 = val);
      this.partyService.getGlossCodeByClass(2649).subscribe(val => this.glossCodes2649 = val);
      this.partyService.getGlossCodeByClass(1253).subscribe(val => this.glossCodes1253 = val);
      this.partyService.getGlossCodeByClass(1259).subscribe(val => this.glossCodes1259 = val);
      this.partyService.getGlossCodeByClass(2537).subscribe(val => this.glossCodes2537 = val);
      this.partyService.getGlossCodeByClass(3081).subscribe(val => this.glossCodes3081 = val);
      this.partyService.getGlossCodeByClass(1813).subscribe(val => this.glossCodes1813 = val);
      this.createForm(data);
    }
  }

  loading = true;
  ynCodes = [{ p2000Code: 'Y', codeShortDesc: 'Yes' }, { p2000Code: 'N', codeShortDesc: 'No' }];
  offsetCodes = [{ p2000Code: '+', codeShortDesc: '+' }, { p2000Code: '-', codeShortDesc: '-' }];
  glossCodes1813: any;
  glossCodes1200: any;
  glossCodes1210: any;
  glossCodes2649: any;
  glossCodes1253: any;
  glossCodes1259: any;
  glossCodes2537: any;
  glossCodes3081: any;
  counterparties: any;
  filteredcounterparties: any;

  compdepotaliases: string[] = [];
  filteredcompdepotaliases: string[] = [];
  secpdepotaliases: string[] = [];
  filteredsecpdepotaliases: string[] = [];

  compdepotcommservices: string[] = [];
  filteredcompdepotcommservices: string[] = [];
  secpdepotcommservices: string[] = [];
  filteredsecpdepotcommservices: string[] = [];

  compnostroaliases: string[] = [];
  filteredcompnostroaliases: string[] = [];
  secpnostroaliases: string[] = [];
  filteredsecpnostroaliases: string[] = [];

  compnostrocommservices: string[] = [];
  filteredcompnostrocommservices: string[] = [];
  secpnostrocommservices: string[] = [];
  filteredsecpnostrocommservices: string[] = [];

  formGroup: FormGroup;

  createForm(nettingData: NettingInput) {

    this.loading = false;

    if (!nettingData.party_ref) { nettingData.party_ref = ""; }
    if (!nettingData.client_ref) { nettingData.client_ref = ""; }
    if (!nettingData.settle_code) { nettingData.settle_code = ""; }
    if (!nettingData.transaction_type) { nettingData.transaction_type = ""; }
    if (!nettingData.late_rule) { nettingData.late_rule = ""; }
    if (!nettingData.net_schedule_code) { nettingData.net_schedule_code = ""; }
    if (!nettingData.date_type) { nettingData.date_type = ""; }
    if (!nettingData.net_party_ref) { nettingData.net_party_ref = ""; }
    if (!nettingData.net_book) { nettingData.net_book = ""; }
    if (!nettingData.override_net_book) { nettingData.override_net_book = ""; }
    if (!nettingData.secondary_party) { nettingData.secondary_party = ""; }
    if (!nettingData.settle_terms) { nettingData.settle_terms = ""; }
    if (!nettingData.operation_type) { nettingData.operation_type = ""; }
    if (!nettingData.primary_comp_service) { nettingData.primary_comp_service = ""; }
    if (!nettingData.primary_secp_service) { nettingData.primary_secp_service = ""; }
    if (!nettingData.secondary_comp_service) { nettingData.secondary_comp_service = ""; }
    if (!nettingData.secondary_secp_service) { nettingData.secondary_secp_service = ""; }
    if (!nettingData.primary_comp_alias) { nettingData.primary_comp_alias = ""; }
    if (!nettingData.primary_secp_alias) { nettingData.primary_secp_alias = ""; }
    if (!nettingData.secondary_comp_alias) { nettingData.secondary_comp_alias = ""; }
    if (!nettingData.secondary_secp_alias) { nettingData.secondary_secp_alias = ""; }
    if (!nettingData.market_party) { nettingData.market_party = ""; }
    if (!nettingData.start_date_type) { nettingData.start_date_type = ""; }
    if (!nettingData.start_offset_ind) { nettingData.start_offset_ind = ""; }
    if (!nettingData.start_offset_code) { nettingData.start_offset_code = ""; }
    if (!nettingData.end_date_type) { nettingData.end_date_type = ""; }
    if (!nettingData.end_offset_ind) { nettingData.end_offset_ind = ""; }
    if (!nettingData.end_offset_code) { nettingData.end_offset_code = ""; }

    /*this.partyService.getGlossPartyByType("SECP").subscribe(val => {
      this.counterparties = val;
      this.filteredcounterparties = val;
    });
    this.partyService.getGlossDepotAlias(nettingData.party_ref, 'D').subscribe(arr => {
      for (var index in arr) {
        this.compdepotaliases.push(arr[index].depot_alias);
        this.compdepotcommservices.push(arr[index].comms_service);
        this.filteredcompdepotaliases.push(arr[index].depot_alias);
        this.filteredcompdepotcommservices.push(arr[index].comms_service);
      }
    });
    this.partyService.getGlossDepotAlias(nettingData.party_ref, 'N').subscribe(arr => {
      for (var index in arr) {
        this.compnostroaliases.push(arr[index].depot_alias);
        this.compnostrocommservices.push(arr[index].comms_service);
        this.filteredcompnostroaliases.push(arr[index].depot_alias);
        this.filteredcompnostrocommservices.push(arr[index].comms_service);
      }
    });
    this.partyService.getGlossDepotAlias(nettingData.secondary_party, 'D').subscribe(arr => {
      for (var index in arr) {
        this.secpdepotaliases.push(arr[index].depot_alias);
        this.secpdepotcommservices.push(arr[index].comms_service);
        this.filteredsecpdepotaliases.push(arr[index].depot_alias);
        this.filteredsecpdepotcommservices.push(arr[index].comms_service);
      }
    });
    this.partyService.getGlossDepotAlias(nettingData.secondary_party, 'N').subscribe(arr => {
      for (var index in arr) {
        this.secpnostroaliases.push(arr[index].depot_alias);
        this.secpnostrocommservices.push(arr[index].comms_service);
        this.filteredsecpnostroaliases.push(arr[index].depot_alias);
        this.filteredsecpnostrocommservices.push(arr[index].comms_service);
      }
    });*/

    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    if (nettingData.version_no === undefined) {
      nettingData.version_no = 0;
    }
    const versionNo = Number(nettingData.version_no) + 1;
    this.formGroup = this.formBuilder.group({
      party_ref: [nettingData.party_ref, Validators.required],
      client_ref: nettingData.client_ref,
      net_driver: nettingData.net_driver,

      settle_code: nettingData.settle_code,
      transaction_type: nettingData.transaction_type,
      trade_group: [nettingData.trade_group, Validators.required],
      late_rule: nettingData.late_rule,
      net_schedule_code: nettingData.net_schedule_code,
      date_type: nettingData.date_type,
      buy_and_sell_flag: [nettingData.buy_and_sell_flag, Validators.required],

      net_party_ref: nettingData.net_party_ref,
      net_book: nettingData.net_book,
      override_net_book: nettingData.override_net_book,
      secondary_party: nettingData.secondary_party.trim(),
      settle_terms: nettingData.settle_terms,
      operation_type: nettingData.operation_type,

      net_primary: 'Y',
      primary_comp_service: nettingData.primary_comp_service.trim(),
      primary_secp_service: nettingData.primary_secp_service.trim(),

      net_secondary: 'Y',
      secondary_comp_service: nettingData.secondary_comp_service.trim(),
      secondary_secp_service: nettingData.secondary_secp_service.trim(),

      primary_instr: '',
      primary_comp_alias: nettingData.primary_comp_alias.trim(),
      primary_depot_type: '',
      primary_party_ref: '',
      primary_secp_alias: nettingData.primary_secp_alias.trim(),

      settle_instr: '',
      secondary_comp_alias: nettingData.secondary_comp_alias.trim(),
      secondary_depot_type: '',
      secondary_party_ref: '',
      secondary_secp_alias: nettingData.secondary_secp_alias.trim(),
      market_party: nettingData.market_party,

      start_date_type: nettingData.start_date_type,
      start_offset_ind: nettingData.start_offset_ind,
      start_offset_code: nettingData.start_offset_code,

      end_date_type: nettingData.end_date_type,
      end_offset_ind: nettingData.end_offset_ind,
      end_offset_code: nettingData.end_offset_code,

      net_cash_when_zero_stock: 'N',
      split_buy_sell: [nettingData.split_buy_sell, Validators.required],
      version_no: versionNo,
      version_date: theDate,
      version_user: localStorage.getItem('USER_ID')
    });
  }

  onCreate() {
    let data = this.formGroup.getRawValue();
    data.trade_group = Number(data.trade_group);
    this.dialogRef.close({ event: 'Create', data });
  }

  onUpdate() {
    let data = this.formGroup.getRawValue();
    data.trade_group = Number(data.trade_group);
    this.dialogRef.close({ event: 'Update', data });
  }

  onDelete() {
    let data = this.formGroup.getRawValue();
    this.dialogRef.close({ event: 'Delete', data });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  /* companyUpdated(event) {
    this.partyService.getGlossDepotAlias(event.target.value, 'D').subscribe(
      arr => {
        for (var index in arr) {
          this.compdepotaliases.push(arr[index].depot_alias);
          this.filteredcompdepotaliases.push(arr[index].depot_alias);
          this.compdepotcommservices.push(arr[index].comms_service);
          this.filteredcompdepotcommservices.push(arr[index].comms_service);
        }
        this.formGroup.patchValue(this.filteredcompdepotaliases = this.filteredcompdepotaliases);
        this.formGroup.patchValue(this.filteredcompdepotcommservices = this.filteredcompdepotcommservices);
      });
    this.partyService.getGlossDepotAlias(event.target.value, 'N').subscribe(
      arr => {
        for (var index in arr) {
          this.compnostroaliases.push(arr[index].depot_alias);
          this.filteredcompnostroaliases.push(arr[index].depot_alias);
          this.compnostrocommservices.push(arr[index].comms_service);
          this.filteredcompnostrocommservices.push(arr[index].comms_service);
        }
        this.formGroup.patchValue(this.filteredcompnostroaliases = this.filteredcompnostroaliases);
        this.formGroup.patchValue(this.filteredcompnostrocommservices = this.filteredcompnostrocommservices);
      });
  }

  counterpartyUpdated(event) {
    this.partyService.getGlossDepotAlias(event.target.value, 'D').subscribe(
      arr => {
        for (var index in arr) {
          this.secpdepotaliases.push(arr[index].depot_alias);
          this.filteredsecpdepotaliases.push(arr[index].depot_alias);
          this.secpdepotcommservices.push(arr[index].comms_service);
          this.filteredsecpdepotcommservices.push(arr[index].comms_service);
        }
        this.formGroup.patchValue(this.filteredsecpdepotaliases = this.filteredsecpdepotaliases);
        this.formGroup.patchValue(this.filteredsecpdepotcommservices = this.filteredsecpdepotcommservices);
      });
    this.partyService.getGlossDepotAlias(event.target.value, 'N').subscribe(
      arr => {
        for (var index in arr) {
          this.secpnostroaliases.push(arr[index].depot_alias);
          this.filteredsecpnostroaliases.push(arr[index].depot_alias);
          this.secpnostrocommservices.push(arr[index].comms_service);
          this.filteredsecpnostrocommservices.push(arr[index].comms_service);
        }
        this.formGroup.patchValue(this.filteredsecpnostroaliases = this.filteredsecpnostroaliases);
        this.formGroup.patchValue(this.filteredsecpnostrocommservices = this.filteredsecpnostrocommservices);
      });
  }

  cpfilter(event) {
    this.formGroup.patchValue(this.filteredcounterparties = this.counterparties.filter(
      data => data.party_ref.includes(event.target.value)));
  }

  pcafilter(event) {
    this.formGroup.patchValue(this.filteredcompdepotaliases = this.compdepotaliases.filter(
      data => data.includes(event.target.value)));
  }

  pcsfilter(event) {
    this.formGroup.patchValue(this.filteredcompdepotcommservices = this.compdepotcommservices.filter(
      data => data.includes(event.target.value)));
  }

  psafilter(event) {
    this.formGroup.patchValue(this.filteredsecpdepotaliases = this.secpdepotaliases.filter(
      data => data.includes(event.target.value)));
  }

  pssfilter(event) {
    this.formGroup.patchValue(this.filteredsecpdepotcommservices = this.secpdepotcommservices.filter(
      data => data.includes(event.target.value)));
  }

  scafilter(event) {
    this.formGroup.patchValue(this.filteredcompnostroaliases = this.compnostroaliases.filter(
      data => data.includes(event.target.value)));
  }

  scsfilter(event) {
    this.formGroup.patchValue(this.filteredcompnostrocommservices = this.compnostrocommservices.filter(
      data => data.includes(event.target.value)));
  }

  ssafilter(event) {
    this.formGroup.patchValue(this.filteredsecpnostroaliases = this.secpnostroaliases.filter(
      data => data.includes(event.target.value)));
  }

  sssfilter(event) {
    this.formGroup.patchValue(this.filteredsecpnostrocommservices = this.secpnostrocommservices.filter(
      data => data.includes(event.target.value)));
  } */

}
