import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigDef } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-jasdec-configdef-stepper',
  templateUrl: './jasdec-configdef-stepper.component.html',
})
export class JasdecConfigDefStepperComponent {

  loading = true;
  configData = new Map<string, ConfigDef>([
    ['PSMSNRNETVDVALUE_DATE', {
      client_ref: this.partyService.getClientRef(),
      component: 'VALUE_DATE',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'PSMSNRNET',
      config_type: 'VD',
      database_code: 'DPMDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['BFILEOUTCODEPROC_COMP', {
      client_ref: this.partyService.getClientRef(),
      component: 'PROC_COMP',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'BFILEOUT',
      config_type: 'CODE',
      database_code: 'EBDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['STATIONFILESTATION_CLIENT', {
      client_ref: this.partyService.getClientRef(),
      component: 'STATION_CLIENT',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'STATION',
      config_type: 'FILE',
      database_code: 'EBDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['ZENGINFILEINDUSTRYID', {
      client_ref: this.partyService.getClientRef(),
      component: 'INDUSTRYID',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'ZENGIN',
      config_type: 'FILE',
      database_code: 'EBDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['ZENGINFILETRANSFERCODE', {
      client_ref: this.partyService.getClientRef(),
      component: 'TRANSFERCODE',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'ZENGIN',
      config_type: 'FILE',
      database_code: 'EBDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['ADAPTERFLAGAUTO_SSI_MT54X_GENR', {
      client_ref: this.partyService.getClientRef(),
      component: 'AUTO_SSI_MT54X_GENR',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'ADAPTER',
      config_type: 'FLAG',
      database_code: 'IFDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['ADAPTERFLAGCRITICAL_AMEND_CHECK', {
      client_ref: this.partyService.getClientRef(),
      component: 'CRITICAL_AMEND_CHECK',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'ADAPTER',
      config_type: 'FLAG',
      database_code: 'IFDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['ADAPTERFLAGTIMING_CONTROL_REQ', {
      client_ref: this.partyService.getClientRef(),
      component: 'TIMING_CONTROL_REQ',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'ADAPTER',
      config_type: 'FLAG',
      database_code: 'IFDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['DUMMY_BICBICXXXXXXXX', {
      client_ref: this.partyService.getClientRef(),
      component: 'XXXXXXXX',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'DUMMY_BIC',
      config_type: 'BIC',
      database_code: 'IFDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['CLEARINGACMCOMP_BIC', {
      client_ref: this.partyService.getClientRef(),
      component: 'COMP_BIC',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'CLEARING',
      config_type: 'ACM',
      database_code: 'REPDB',
      version_date: new Intl.DateTimeFormat('en').format(),
      version_no: 0,
      version_user: localStorage.getItem('USER_ID')
    }],
    ['SLAB_DVPFLAGSDVP_INTM_FLAG', {
      client_ref: this.partyService.getClientRef(),
      component: 'SDVP_INTM_FLAG',
      component_data: [''],
      component_type: 'JASDEC',
      config_ref: 'SLAB_DVP',
      config_type: 'FLAG',
      database_code: 'REPDB',
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
  outTitle = 'JASDECPS CONFIG';
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private partyService: PartyService,
  ) {
    this.updateData();
  }

  updateData() {
    this.partyService.getConfigDefEntries('JASDEC').subscribe({
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
      PSMSNRNETVDVALUE_DATE: [this.configData.get('PSMSNRNETVDVALUE_DATE').component_data[0], Validators.required],
      BFILEOUTCODEPROC_COMP: [this.configData.get('BFILEOUTCODEPROC_COMP').component_data[0], Validators.required],
      STATIONFILESTATION_CLIENT: [this.configData.get('STATIONFILESTATION_CLIENT').component_data[0], Validators.required],
      ZENGINFILEINDUSTRYID: [this.configData.get('ZENGINFILEINDUSTRYID').component_data[0], Validators.required],
      ZENGINFILETRANSFERCODE: [this.configData.get('ZENGINFILETRANSFERCODE').component_data[0], Validators.required],
      ADAPTERFLAGAUTO_SSI_MT54X_GENR: [this.configData.get('ADAPTERFLAGAUTO_SSI_MT54X_GENR').component_data[0], Validators.required],
      ADAPTERFLAGCRITICAL_AMEND_CHECK: [this.configData.get('ADAPTERFLAGCRITICAL_AMEND_CHECK').component_data[0], Validators.required],
      ADAPTERFLAGTIMING_CONTROL_REQ: [this.configData.get('ADAPTERFLAGTIMING_CONTROL_REQ').component_data[0], Validators.required],
      DUMMY_BICBICXXXXXXXX: [this.configData.get('DUMMY_BICBICXXXXXXXX').component_data[0], Validators.required],
      CLEARINGACMCOMP_BIC: [this.configData.get('CLEARINGACMCOMP_BIC').component_data[0], Validators.required],
      SLAB_DVPFLAGSDVP_INTM_FLAG: [this.configData.get('SLAB_DVPFLAGSDVP_INTM_FLAG').component_data[0], Validators.required],
    });
  }

  updatePSMSNRNETVDVALUE_DATEConfig() {
    this.configData.get('PSMSNRNETVDVALUE_DATE').component_data = this.formGroup.getRawValue().PSMSNRNETVDVALUE_DATE.split(",");
    this.updateConfigData(this.configData.get('PSMSNRNETVDVALUE_DATE'));
  }

  updateBFILEOUTCODEPROC_COMPConfig() {
    this.configData.get('BFILEOUTCODEPROC_COMP').component_data = this.formGroup.getRawValue().BFILEOUTCODEPROC_COMP.split(",");
    this.updateConfigData(this.configData.get('BFILEOUTCODEPROC_COMP'));
  }

  updateSTATIONFILESTATION_CLIENTConfig() {
    this.configData.get('STATIONFILESTATION_CLIENT').component_data = this.formGroup.getRawValue().STATIONFILESTATION_CLIENT.split(",");
    this.updateConfigData(this.configData.get('STATIONFILESTATION_CLIENT'));
  }

  updateZENGINFILEINDUSTRYIDConfig() {
    this.configData.get('ZENGINFILEINDUSTRYID').component_data = this.formGroup.getRawValue().ZENGINFILEINDUSTRYID.split(",");
    this.updateConfigData(this.configData.get('ZENGINFILEINDUSTRYID'));
  }

  updateZENGINFILETRANSFERCODEConfig() {
    this.configData.get('ZENGINFILETRANSFERCODE').component_data = this.formGroup.getRawValue().ZENGINFILETRANSFERCODE.split(",");
    this.updateConfigData(this.configData.get('ZENGINFILETRANSFERCODE'));
  }

  updateADAPTERFLAGAUTO_SSI_MT54X_GENRConfig() {
    this.configData.get('ADAPTERFLAGAUTO_SSI_MT54X_GENR').component_data = this.formGroup.getRawValue().ADAPTERFLAGAUTO_SSI_MT54X_GENR.split(",");
    this.updateConfigData(this.configData.get('ADAPTERFLAGAUTO_SSI_MT54X_GENR'));
  }

  updateADAPTERFLAGCRITICAL_AMEND_CHECKConfig() {
    this.configData.get('ADAPTERFLAGCRITICAL_AMEND_CHECK').component_data = this.formGroup.getRawValue().ADAPTERFLAGCRITICAL_AMEND_CHECK.split(",");
    this.updateConfigData(this.configData.get('ADAPTERFLAGCRITICAL_AMEND_CHECK'));
  }

  updateADAPTERFLAGTIMING_CONTROL_REQConfig() {
    this.configData.get('ADAPTERFLAGTIMING_CONTROL_REQ').component_data = this.formGroup.getRawValue().ADAPTERFLAGTIMING_CONTROL_REQ.split(",");
    this.updateConfigData(this.configData.get('ADAPTERFLAGTIMING_CONTROL_REQ'));
  }

  updateSLAB_DVPFLAGSDVP_INTM_FLAGConfig() {
    this.configData.get('SLAB_DVPFLAGSDVP_INTM_FLAG').component_data = this.formGroup.getRawValue().SLAB_DVPFLAGSDVP_INTM_FLAG.split(",");
    this.updateConfigData(this.configData.get('SLAB_DVPFLAGSDVP_INTM_FLAG'));
  }

  updateDUMMY_BICBICXXXXXXXXConfig() {
    this.configData.get('DUMMY_BICBICXXXXXXXX').component_data = this.formGroup.getRawValue().DUMMY_BICBICXXXXXXXX.split(",");
    this.configData.get('CLEARINGACMCOMP_BIC').component_data = this.formGroup.getRawValue().DUMMY_BICBICXXXXXXXX.split(",");
    this.updateConfigData(this.configData.get('DUMMY_BICBICXXXXXXXX'));
    this.updateConfigData(this.configData.get('CLEARINGACMCOMP_BIC'));
  }

  updateConfigData(configData: ConfigDef) {
    console.log('updateConfigData', configData.config_ref);
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    configData.version_date = theDate;
    configData.version_user = localStorage.getItem('USER_ID');
    console.log(configData);
    this.partyService.updateConfigDef(configData);
  }

  onSend() {
    this.partyService.sendDPMConfig('JASDEC');
  }

  onRefresh() {
    this.updateData();
  }

}
