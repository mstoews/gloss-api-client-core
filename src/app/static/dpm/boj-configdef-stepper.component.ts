import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigDef } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-boj-configdef-stepper',
  templateUrl: './boj-configdef-stepper.component.html',
})
export class BojConfigDefStepperComponent {
  constructor(
    private formBuilder: FormBuilder,
    private partyService: PartyService,
  ) {
    this.updateData();
  }

  loading = true;
  formGroup: FormGroup;
  configData = new Map<string, ConfigDef>([
    ['FIIDCPTYSECP', {
      client_ref: this.partyService.getClientRef(),
      component: 'SECP',
      component_data: [''],
      component_type: 'BOJ',
      config_ref: 'FIID',
      config_type: 'CPTY',
      database_code: 'DPMDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['VERIFICATIONVERISRCS', {
      client_ref: this.partyService.getClientRef(),
      component: 'SRCS',
      component_data: [''],
      component_type: 'BOJ',
      config_ref: 'VERIFICATION',
      config_type: 'VERI',
      database_code: 'DPMDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
  ]);

  tfCodes = [{ code_value: 'TRUE', code_descr: 'TRUE' }, { code_value: 'FALSE', code_descr: 'FALSE' }];
  ynCodes = [
    { code_value: 'Y', code_descr: 'Yes' },
    { code_value: 'N', code_descr: 'No' },
  ];
  outTitle = 'BOJPS CONFIG';

  updateData() {
    this.partyService.getConfigDefEntries('BOJ').subscribe({
      next: value => {
        value.forEach((element) => {
          delete element.__typename;
          this.configData.set(element.config_ref + element.config_type + element.component, element);
        });
        this.createForm();
      },
      error: err => console.log(`ERROR ${err.message}`),
    });
  }

  createForm() {
    this.loading = false;
    this.formGroup = this.formBuilder.group({
      FIIDCPTYSECP: [this.configData.get('FIIDCPTYSECP').component_data[0], Validators.required],
      VERIFICATIONVERISRCS: [this.configData.get('VERIFICATIONVERISRCS').component_data, Validators.required],
    });
  }

  updateFIIDCPTYSECPConfig() {
    this.configData.get('FIIDCPTYSECP').component_data = this.formGroup.getRawValue().FIIDCPTYSECP.split(",");
    this.updateConfigData(this.configData.get('FIIDCPTYSECP'));
  }

  updateVERIFICATIONVERISRCSConfig() {
    this.configData.get('VERIFICATIONVERISRCS').component_data = this.formGroup.getRawValue().VERIFICATIONVERISRCS;
    this.updateConfigData(this.configData.get('VERIFICATIONVERISRCS'));
  }

  updateConfigData(configData: ConfigDef) {
    console.log('updateConfigData');
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    configData.version_date = theDate;
    configData.version_user = localStorage.getItem('USER_ID');
    console.log(configData);
    this.partyService.updateConfigDef(configData);
  }

  onSend() {
    this.partyService.sendDPMConfig('BOJ');
  }

  onRefresh() {
    this.updateData();
  }
}
