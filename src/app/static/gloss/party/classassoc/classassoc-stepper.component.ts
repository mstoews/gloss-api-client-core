import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClassAssoc } from 'app/services/api.service';
import { PartyService } from 'app/services/party.service';
import { SnackService } from 'app/services/snack.service';

@Component({
  selector: 'app-party-classassoc-stepper',
  templateUrl: './classassoc-stepper.component.html',
})
export class ClassAssocStepperComponent {

  constructor(public dialog: MatDialog,
    private partyService: PartyService,
    private formBuilder: FormBuilder,
    public snackbar: SnackService
  ) {
    this.updateData();
  }

  loading = true;
  glossCodes1836: any;
  glossCodes2279: any;
  glossCodes1200: any;
  glossCodes5043: any;
  glossCodes1259: any;
  glossCodes1102: any;
  glossCodes1407: any;
  glossCodes1442: any;
  glossCodes1253: any;
  glossCodes1: any;
  glossCodes1205: any;
  glossCodes1503: any;
  glossCodes2559: any;
  glossCodes2278: any;
  glossCodes1211: any;
  glossCodes2919: any;
  glossCodes1829: any;
  glossCodes1501: any;
  glossCodes2537: any;
  glossCodes3048: any;
  glossCodes5101: any;
  glossCodes31: any;
  tfCodes = [{ p2000Code: true }, { p2000Code: false }];
  assocData = new Map<string, ClassAssoc>();
  formGroup: FormGroup;

  updateData() {
    if (localStorage.getItem('glossenv') === null) {
      this.snackbar.showMessage('Please activate the environment you would like to push/pull the static using Home Component');
    }
    else {
      this.partyService.getGlossCodeByClass(1836).subscribe(val => this.glossCodes1836 = val);
      this.partyService.getGlossCodeByClass(2279).subscribe(val => this.glossCodes2279 = val);
      this.partyService.getGlossCodeByClass(1200).subscribe(val => this.glossCodes1200 = val);
      this.partyService.getGlossCodeByClass(5043).subscribe(val => this.glossCodes5043 = val);
      this.partyService.getGlossCodeByClass(1259).subscribe(val => this.glossCodes1259 = val);
      this.partyService.getGlossCodeByClass(1102).subscribe(val => this.glossCodes1102 = val);
      this.partyService.getGlossCodeByClass(1407).subscribe(val => this.glossCodes1407 = val);
      this.partyService.getGlossCodeByClass(1442).subscribe(val => this.glossCodes1442 = val);
      this.partyService.getGlossCodeByClass(1253).subscribe(val => this.glossCodes1253 = val);
      this.partyService.getGlossCodeByClass(1).subscribe(val => this.glossCodes1 = val);
      this.partyService.getGlossCodeByClass(1205).subscribe(val => this.glossCodes1205 = val);
      this.partyService.getGlossCodeByClass(1503).subscribe(val => this.glossCodes1503 = val);
      this.partyService.getGlossCodeByClass(1211).subscribe(val => this.glossCodes1211 = val);
      this.partyService.getGlossCodeByClass(2919).subscribe(val => this.glossCodes2919 = val);
      this.partyService.getGlossCodeByClass(2559).subscribe(val => this.glossCodes2559 = val);
      this.partyService.getGlossCodeByClass(2278).subscribe(val => this.glossCodes2278 = val);
      this.partyService.getGlossCodeByClass(1829).subscribe(val => this.glossCodes1829 = val);
      this.partyService.getGlossCodeByClass(1501).subscribe(val => this.glossCodes1501 = val);
      this.partyService.getGlossCodeByClass(2537).subscribe(val => this.glossCodes2537 = val);
      this.partyService.getGlossCodeByClass(3048).subscribe(val => this.glossCodes3048 = val);
      this.partyService.getGlossCodeByClass(5101).subscribe(val => this.glossCodes5101 = val);
      this.partyService.getGlossCodeByClass(31).subscribe(val => this.glossCodes31 = val);
      this.partyService.getClassAssocByRef().subscribe({
        next: value => {
          value.forEach((element: ClassAssoc) => {
            delete element.__typename;
            this.assocData.set(element.class_assoc_code + element.code_type + element.class_1.toString() + element.class_2.toString(), element);
          });
          this.createForm();
        },
        error: err => console.log(`ERROR ${err.message}`),
      });
    }
  }

  createForm() {
    this.loading = false;
    this.formGroup = this.formBuilder.group({
      AFPR2559applied: [this.assocData.get("AFPR" + "M" + "2278" + "2559").applied, Validators.required],
      BITP1836applied: [this.assocData.get("BITP" + "M" + "2278" + "1836").applied, Validators.required],
      CLDG2279applied: [this.assocData.get("CLDG" + "M" + "2278" + "2279").applied, Validators.required],
      CMVT1200applied: [this.assocData.get("CMVT" + "M" + "2278" + "1200").applied, Validators.required],
      COBC5043applied: [this.assocData.get("COBC" + "M" + "2278" + "5043").applied, Validators.required],
      COCP2279applied: [this.assocData.get("COCP" + "M" + "2278" + "2279").applied, Validators.required],
      CPDT1259applied: [this.assocData.get("CPDT" + "M" + "5043" + "1259").applied, Validators.required],
      CRIT1102applied: [this.assocData.get("CRIT" + "M" + "2278" + "1102").applied, Validators.required],
      CSBC1407applied: [this.assocData.get("CSBC" + "M" + "5043" + "1407").applied, Validators.required],
      CSCC1442applied: [this.assocData.get("CSCC" + "M" + "5043" + "1442").applied, Validators.required],
      CSDN1253applied: [this.assocData.get("CSDN" + "M" + "2278" + "1253").applied, Validators.required],
      CSIP1applied: [this.assocData.get("CSIP" + "M" + "5043" + "1").applied, Validators.required],
      CSNC1205applied: [this.assocData.get("CSNC" + "M" + "5043" + "1205").applied, Validators.required],
      DDAC1503applied: [this.assocData.get("DDAC" + "M" + "2278" + "1503").applied, Validators.required],
      DPID1200applied: [this.assocData.get("DPID" + "S" + "2278" + "1200").applied, Validators.required],
      ECCLM2278applied: [this.assocData.get("ECCL" + "M" + "2278" + "2278").applied, Validators.required],
      ECCLS2278applied: [this.assocData.get("ECCL" + "S" + "2278" + "2278").applied, Validators.required],
      FINR2559applied: [this.assocData.get("FINR" + "M" + "2278" + "2559").applied, Validators.required],
      FRNM2278applied: [this.assocData.get("FRNM" + "M" + "2278" + "2278").applied, Validators.required],
      GLDO1211applied: [this.assocData.get("GLDO" + "M" + "2278" + "1211").applied, Validators.required],
      JCCC2919applied: [this.assocData.get("JCCC" + "M" + "2278" + "2919").applied, Validators.required],
      MMWT2559applied: [this.assocData.get("MMWT" + "M" + "2278" + "2559").applied, Validators.required],
      PPEX1829applied: [this.assocData.get("PPEX" + "M" + "2278" + "1829").applied, Validators.required],
      PPRV1200applied: [this.assocData.get("PPRV" + "M" + "2278" + "1200").applied, Validators.required],
      SDMF2537applied: [this.assocData.get("SDMF" + "M" + "2278" + "2537").applied, Validators.required],
      SGMF2537applied: [this.assocData.get("SGMF" + "M" + "2278" + "2537").applied, Validators.required],
      SOI3048applied: [this.assocData.get("SOI " + "M" + "2278" + "3048").applied, Validators.required],
      SSCM5101applied: [this.assocData.get("SSCM" + "M" + "2320" + "5101").applied, Validators.required],
      SUTP1501applied: [this.assocData.get("SUTP" + "S" + "2278" + "1501").applied, Validators.required],
      SUTR1501applied: [this.assocData.get("SUTR" + "S" + "2278" + "1501").applied, Validators.required],
      TFLG2322applied: [this.assocData.get("TFLG" + "S" + "2322" + "1200").applied, Validators.required],
      TFLG2524applied: [this.assocData.get("TFLG" + "S" + "2524" + "1200").applied, Validators.required],
      UPUI31applied: [this.assocData.get("UPUI" + "M" + "2278" + "31").applied, Validators.required],

      glossCodeAFPR2559Configured: [this.assocData.get("AFPR" + "M" + "2278" + "2559").code_2[0], Validators.required],
      glossCodeBITP1836Configured: [this.assocData.get("BITP" + "M" + "2278" + "1836").code_2[0], Validators.required],
      glossCodesCLDG2279Configured: [this.assocData.get("CLDG" + "M" + "2278" + "2279").code_2, Validators.required],
      glossCodesCMVT1200Configured: [this.assocData.get("CMVT" + "M" + "2278" + "1200").code_2, Validators.required],
      glossCodeCOBC5043Configured: [this.assocData.get("COBC" + "M" + "2278" + "5043").code_2[0], Validators.required],
      glossCodeCOCP2279Configured: [this.assocData.get("COCP" + "M" + "2278" + "2279").code_2[0], Validators.required],
      glossCodesCPDT1259Configured: [this.assocData.get("CPDT" + "M" + "5043" + "1259").code_2, Validators.required],
      glossCodesCRIT1102Configured: [this.assocData.get("CRIT" + "M" + "2278" + "1102").code_2, Validators.required],
      glossCodesCSBC1407Configured: [this.assocData.get("CSBC" + "M" + "5043" + "1407").code_2, Validators.required],
      glossCodeCSCC1442Configured: [this.assocData.get("CSCC" + "M" + "5043" + "1442").code_2[0], Validators.required],
      glossCodesCSDN1253Configured: [this.assocData.get("CSDN" + "M" + "2278" + "1253").code_2, Validators.required],
      glossCodesCSIP1Configured: [this.assocData.get("CSIP" + "M" + "5043" + "1").code_2, Validators.required],
      glossCodeCSNC1205Configured: [this.assocData.get("CSNC" + "M" + "5043" + "1205").code_2[0], Validators.required],
      glossCodesDDAC1503Configured: [this.assocData.get("DDAC" + "M" + "2278" + "1503").code_2, Validators.required],
      glossCodeDPID1200Configured: [this.assocData.get("DPID" + "S" + "2278" + "1200").code_2[0], Validators.required],
      glossCodesECCLM2278Configured: [this.assocData.get("ECCL" + "M" + "2278" + "2278").code_2, Validators.required],
      glossCodesECCLS2278Configured: [this.assocData.get("ECCL" + "S" + "2278" + "2278").code_2, Validators.required],
      glossCodeFINR2559Configured: [this.assocData.get("FINR" + "M" + "2278" + "2559").code_2[0], Validators.required],
      glossCodesFRNM2278Configured: [this.assocData.get("FRNM" + "M" + "2278" + "2278").code_2, Validators.required],
      glossCodeGLDO1211Configured: [this.assocData.get("GLDO" + "M" + "2278" + "1211").code_2[0], Validators.required],
      glossCodeJCCC2919Configured: [this.assocData.get("JCCC" + "M" + "2278" + "2919").code_2[0], Validators.required],
      glossCodeMMWT2559Configured: [this.assocData.get("MMWT" + "M" + "2278" + "2559").code_2[0], Validators.required],
      glossCodePPEX1829Configured: [this.assocData.get("PPEX" + "M" + "2278" + "1829").code_2[0], Validators.required],
      glossCodesPPRV1200Configured: [this.assocData.get("PPRV" + "M" + "2278" + "1200").code_2, Validators.required],
      glossCodeSDMF2537Configured: [this.assocData.get("SDMF" + "M" + "2278" + "2537").code_2[0], Validators.required],
      glossCodeSGMF2537Configured: [this.assocData.get("SGMF" + "M" + "2278" + "2537").code_2[0], Validators.required],
      glossCodeSOI3048Configured: [this.assocData.get("SOI " + "M" + "2278" + "3048").code_2[0], Validators.required],
      glossCodesSSCM5101Configured: [this.assocData.get("SSCM" + "M" + "2320" + "5101").code_2, Validators.required],
      glossCodesSUTP1501Configured: [this.assocData.get("SUTP" + "S" + "2278" + "1501").code_2, Validators.required],
      glossCodesSUTR1501Configured: [this.assocData.get("SUTR" + "S" + "2278" + "1501").code_2, Validators.required],
      glossCodesTFLG2322Configured: [this.assocData.get("TFLG" + "S" + "2322" + "1200").code_2, Validators.required],
      glossCodesTFLG2524Configured: [this.assocData.get("TFLG" + "S" + "2524" + "1200").code_2, Validators.required],
      glossCodeUPUI31Configured: [this.assocData.get("UPUI" + "M" + "2278" + "31").code_2[0], Validators.required],

    });
  }

  OnDestroy() {
  }

  updateAFPRassoc() {
    console.log('updateAFPRassoc');
    this.assocData.get("AFPR" + "M" + "2278" + "2559").code_2 = this.formGroup.getRawValue().glossCodeAFPR2559Configured.split(",");
    this.assocData.get("AFPR" + "M" + "2278" + "2559").applied = this.formGroup.getRawValue().AFPR2559applied;
    this.updateSubAssoc(this.assocData.get("AFPR" + "M" + "2278" + "2559"));
  }

  updateBITPassoc() {
    console.log('updateBITPassoc');
    this.assocData.get("BITP" + "M" + "2278" + "1836").code_2 = this.formGroup.getRawValue().glossCodeBITP1836Configured.split(",");
    this.assocData.get("BITP" + "M" + "2278" + "1836").applied = this.formGroup.getRawValue().BITP1836applied;
    this.updateSubAssoc(this.assocData.get("BITP" + "M" + "2278" + "1836"));
  }

  updateCLDGassoc() {
    console.log('updateCLDGassoc');
    this.assocData.get("CLDG" + "M" + "2278" + "2279").code_2 = this.formGroup.getRawValue().glossCodesCLDG2279Configured;
    this.assocData.get("CLDG" + "M" + "2278" + "2279").applied = this.formGroup.getRawValue().CLDG2279applied;
    this.updateSubAssoc(this.assocData.get("CLDG" + "M" + "2278" + "2279"));
  }

  updateCMVTassoc() {
    console.log('updateCMVTassoc');
    this.assocData.get("CMVT" + "M" + "2278" + "1200").code_2 = this.formGroup.getRawValue().glossCodesCMVT1200Configured;
    this.assocData.get("CMVT" + "M" + "2278" + "1200").applied = this.formGroup.getRawValue().CMVT1200applied;
    this.updateSubAssoc(this.assocData.get("CMVT" + "M" + "2278" + "1200"));
  }

  updateCOBCassoc() {
    console.log('updateCOBCassoc');
    this.assocData.get("COBC" + "M" + "2278" + "5043").code_2 = this.formGroup.getRawValue().glossCodeCOBC5043Configured.split(",");
    this.assocData.get("COBC" + "M" + "2278" + "5043").applied = this.formGroup.getRawValue().COBC5043applied;
    this.updateSubAssoc(this.assocData.get("COBC" + "M" + "2278" + "5043"));
  }

  updateCOCPassoc() {
    console.log('updateCOCPassoc');
    this.assocData.get("COCP" + "M" + "2278" + "2279").code_2 = this.formGroup.getRawValue().glossCodeCOCP2279Configured.split(",");
    this.assocData.get("COCP" + "M" + "2278" + "2279").applied = this.formGroup.getRawValue().COCP2279applied;
    this.updateSubAssoc(this.assocData.get("COCP" + "M" + "2278" + "2279"));
  }

  updateCPDTassoc() {
    console.log('updateCPDTassoc');
    this.assocData.get("CPDT" + "M" + "5043" + "1259").code_2 = this.formGroup.getRawValue().glossCodesCPDT1259Configured;
    this.assocData.get("CPDT" + "M" + "5043" + "1259").applied = this.formGroup.getRawValue().CPDT1259applied;
    this.updateSubAssoc(this.assocData.get("CPDT" + "M" + "5043" + "1259"));
  }

  updateCRITassoc() {
    console.log('updateCRITassoc');
    this.assocData.get("CRIT" + "M" + "2278" + "1102").code_2 = this.formGroup.getRawValue().glossCodesCRIT1102Configured;
    this.assocData.get("CRIT" + "M" + "2278" + "1102").applied = this.formGroup.getRawValue().CRIT1102applied;
    this.updateSubAssoc(this.assocData.get("CRIT" + "M" + "2278" + "1102"));
  }

  updateCSBCassoc() {
    console.log('updateCSBCassoc');
    this.assocData.get("CSBC" + "M" + "5043" + "1407").code_2 = this.formGroup.getRawValue().glossCodesCSBC1407Configured;
    this.assocData.get("CSBC" + "M" + "5043" + "1407").applied = this.formGroup.getRawValue().CSBC1407applied;
    this.updateSubAssoc(this.assocData.get("CSBC" + "M" + "5043" + "1407"));
  }

  updateCSCCassoc() {
    console.log('updateCSCCassoc');
    this.assocData.get("CSCC" + "M" + "5043" + "1442").code_2 = this.formGroup.getRawValue().glossCodeCSCC1442Configured.split(",");
    this.assocData.get("CSCC" + "M" + "5043" + "1442").applied = this.formGroup.getRawValue().CSCC1442applied;
    this.updateSubAssoc(this.assocData.get("CSCC" + "M" + "5043" + "1442"));
  }

  updateCSDNassoc() {
    console.log('updateCSDNassoc');
    this.assocData.get("CSDN" + "M" + "2278" + "1253").code_2 = this.formGroup.getRawValue().glossCodesCSDN1253Configured;
    this.assocData.get("CSDN" + "M" + "2278" + "1253").applied = this.formGroup.getRawValue().CSDN1253applied;
    this.updateSubAssoc(this.assocData.get("CSDN" + "M" + "2278" + "1253"));
  }

  updateCSIPassoc() {
    console.log('updateCSIPassoc');
    this.assocData.get("CSIP" + "M" + "5043" + "1").code_2 = this.formGroup.getRawValue().glossCodesCSIP1Configured;
    this.assocData.get("CSIP" + "M" + "5043" + "1").applied = this.formGroup.getRawValue().CSIP1applied;
    this.updateSubAssoc(this.assocData.get("CSIP" + "M" + "5043" + "1"));
  }

  updateCSNCassoc() {
    console.log('updateCSNCassoc');
    this.assocData.get("CSNC" + "M" + "5043" + "1205").code_2 = this.formGroup.getRawValue().glossCodeCSNC1205Configured.split(",");
    this.assocData.get("CSNC" + "M" + "5043" + "1205").applied = this.formGroup.getRawValue().CSNC1205applied;
    this.updateSubAssoc(this.assocData.get("CSNC" + "M" + "5043" + "1205"));
  }

  updateDDACassoc() {
    console.log('updateDDACassoc');
    this.assocData.get("DDAC" + "M" + "2278" + "1503").code_2 = this.formGroup.getRawValue().glossCodesDDAC1503Configured;
    this.assocData.get("DDAC" + "M" + "2278" + "1503").applied = this.formGroup.getRawValue().DDAC1503applied;
    this.updateSubAssoc(this.assocData.get("DDAC" + "M" + "2278" + "1503"));
  }

  updateDPIDassoc() {
    console.log('updateDPIDassoc');
    this.assocData.get("DPID" + "S" + "2278" + "1200").code_2 = this.formGroup.getRawValue().glossCodeDPID1200Configured;
    this.assocData.get("DPID" + "S" + "2278" + "1200").applied = this.formGroup.getRawValue().DPID1200applied;
    this.updateSubAssoc(this.assocData.get("DPID" + "S" + "2278" + "1200"));
  }

  updateECCLMassoc() {
    console.log('updateECCLMassoc');
    this.assocData.get("ECCL" + "M" + "2278" + "2278").code_2 = this.formGroup.getRawValue().glossCodesECCLM2278Configured;
    this.assocData.get("ECCL" + "M" + "2278" + "2278").applied = this.formGroup.getRawValue().ECCLM2278applied;
    this.updateSubAssoc(this.assocData.get("ECCL" + "M" + "2278" + "2278"));
  }

  updateECCLSassoc() {
    console.log('updateECCLSassoc');
    this.assocData.get("ECCL" + "S" + "2278" + "2278").code_2 = this.formGroup.getRawValue().glossCodesECCLS2278Configured;
    this.assocData.get("ECCL" + "S" + "2278" + "2278").applied = this.formGroup.getRawValue().ECCLS2278applied;
    this.updateSubAssoc(this.assocData.get("ECCL" + "S" + "2278" + "2278"));
  }

  updateFINRassoc() {
    console.log('updateFINRassoc');
    this.assocData.get("FINR" + "M" + "2278" + "2559").code_2 = this.formGroup.getRawValue().glossCodeFINR2559Configured;
    this.assocData.get("FINR" + "M" + "2278" + "2559").applied = this.formGroup.getRawValue().FINR2559applied;
    this.updateSubAssoc(this.assocData.get("FINR" + "M" + "2278" + "2559"));
  }

  updateFRNMassoc() {
    console.log('updateFRNMassoc');
    this.assocData.get("FRNM" + "M" + "2278" + "2278").code_2 = this.formGroup.getRawValue().glossCodesFRNM2278Configured;
    this.assocData.get("FRNM" + "M" + "2278" + "2278").applied = this.formGroup.getRawValue().FRNM2278applied;
    this.updateSubAssoc(this.assocData.get("FRNM" + "M" + "2278" + "2278"));
  }

  updateGLDOassoc() {
    console.log('updateGLDOassoc');
    this.assocData.get("GLDO" + "M" + "2278" + "1211").code_2 = this.formGroup.getRawValue().glossCodeGLDO1211Configured.split(",");
    this.assocData.get("GLDO" + "M" + "2278" + "1211").applied = this.formGroup.getRawValue().SSCM1211applied;
    this.updateSubAssoc(this.assocData.get("GLDO" + "M" + "2278" + "1211"));
  }

  updateJCCCassoc() {
    console.log('updateJCCCassoc');
    this.assocData.get("JCCC" + "M" + "2278" + "2919").code_2 = this.formGroup.getRawValue().glossCodeJCCC2919Configured.split(",");
    this.assocData.get("JCCC" + "M" + "2278" + "2919").applied = this.formGroup.getRawValue().JCCC2919applied;
    this.updateSubAssoc(this.assocData.get("JCCC" + "M" + "2278" + "2919"));
  }

  updateMMWTassoc() {
    console.log('updateMMWTassoc');
    this.assocData.get("MMWT" + "M" + "2278" + "2559").code_2 = this.formGroup.getRawValue().glossCodeMMWT2559Configured.split(",");
    this.assocData.get("MMWT" + "M" + "2278" + "2559").applied = this.formGroup.getRawValue().MMWT2559applied;
    this.updateSubAssoc(this.assocData.get("MMWT" + "M" + "2278" + "2559"));
  }

  updatePPEXassoc() {
    console.log('updatePPEXassoc');
    this.assocData.get("PPEX" + "M" + "2278" + "1829").code_2 = this.formGroup.getRawValue().glossCodePPEX1829Configured.split(",");
    this.assocData.get("PPEX" + "M" + "2278" + "1829").applied = this.formGroup.getRawValue().PPEX1829applied;
    this.updateSubAssoc(this.assocData.get("PPEX" + "M" + "2278" + "1829"));
  }

  updatePPRVassoc() {
    console.log('updatePPRVassoc');
    this.assocData.get("PPRV" + "M" + "2278" + "1200").code_2 = this.formGroup.getRawValue().glossCodesPPRV1200Configured;
    this.assocData.get("PPRV" + "M" + "2278" + "1200").applied = this.formGroup.getRawValue().PPRV1200applied;
    this.updateSubAssoc(this.assocData.get("PPRV" + "M" + "2278" + "1200"));
  }

  updateSDMFassoc() {
    console.log('updateSDMFassoc');
    this.assocData.get("SDMF" + "M" + "2278" + "2537").code_2 = this.formGroup.getRawValue().glossCodeSDMF2537Configured.split(",");
    this.assocData.get("SDMF" + "M" + "2278" + "2537").applied = this.formGroup.getRawValue().SDMF2537applied;
    this.updateSubAssoc(this.assocData.get("SDMF" + "M" + "2278" + "2537"));
  }

  updateSGMFassoc() {
    console.log('updateSGMFassoc');
    this.assocData.get("SGMF" + "M" + "2278" + "2537").code_2 = this.formGroup.getRawValue().glossCodeSGMF2537Configured.split(",");
    this.assocData.get("SGMF" + "M" + "2278" + "2537").applied = this.formGroup.getRawValue().SGMF2537applied;
    this.updateSubAssoc(this.assocData.get("SGMF" + "M" + "2278" + "2537"));
  }

  updateSOIassoc() {
    console.log('updateSOIassoc');
    this.assocData.get("SOI " + "M" + "2278" + "3048").code_2 = this.formGroup.getRawValue().glossCodeSOI3048Configured.split(",");
    this.assocData.get("SOI " + "M" + "2278" + "3048").applied = this.formGroup.getRawValue().SOI3048applied;
    this.updateSubAssoc(this.assocData.get("SOI " + "M" + "2278" + "3048"));
  }

  updateSSCMassoc() {
    console.log('updateSSCMassoc');
    this.assocData.get("SSCM" + "M" + "2320" + "5101").code_2 = this.formGroup.getRawValue().glossCodesSSCM5101Configured;
    this.assocData.get("SSCM" + "M" + "2320" + "5101").applied = this.formGroup.getRawValue().SSCM5101applied;
    this.updateSubAssoc(this.assocData.get("SSCM" + "M" + "2320" + "5101"));
  }

  updateSUTPassoc() {
    console.log('updateSUTPassoc');
    this.assocData.get("SUTP" + "S" + "2278" + "1501").code_2 = this.formGroup.getRawValue().glossCodesSUTP1501Configured;
    this.assocData.get("SUTP" + "S" + "2278" + "1501").applied = this.formGroup.getRawValue().SUTP1501applied;
    this.updateSubAssoc(this.assocData.get("SUTP" + "S" + "2278" + "1501"));
  }

  updateSUTRassoc() {
    console.log('updateSUTRassoc');
    this.assocData.get("SUTR" + "S" + "2278" + "1501").code_2 = this.formGroup.getRawValue().glossCodesSUTR1501Configured;
    this.assocData.get("SUTR" + "S" + "2278" + "1501").applied = this.formGroup.getRawValue().SUTR1501applied;
    this.updateSubAssoc(this.assocData.get("SUTR" + "S" + "2278" + "1501"));
  }

  updateTFLG2322assoc() {
    console.log('updateTFLG2322assoc');
    this.assocData.get("TFLG" + "S" + "2322" + "1200").code_2 = this.formGroup.getRawValue().glossCodesTFLG2322Configured;
    this.assocData.get("TFLG" + "S" + "2322" + "1200").applied = this.formGroup.getRawValue().TFLG2322applied;
    this.updateSubAssoc(this.assocData.get("TFLG" + "S" + "2322" + "1200"));
  }

  updateTFLG2524assoc() {
    console.log('updateTFLG2524assoc');
    this.assocData.get("TFLG" + "S" + "2524" + "1200").code_2 = this.formGroup.getRawValue().glossCodesTFLG2524Configured;
    this.assocData.get("TFLG" + "S" + "2524" + "1200").applied = this.formGroup.getRawValue().TFLG2524applied;
    this.updateSubAssoc(this.assocData.get("TFLG" + "S" + "2524" + "1200"));
  }

  updateUPUIassoc() {
    console.log('updateUPUIassoc');
    this.assocData.get("UPUI" + "M" + "2278" + "31").code_2 = this.formGroup.getRawValue().glossCodeUPUI31Configured.split(",");
    this.assocData.get("UPUI" + "M" + "2278" + "31").applied = this.formGroup.getRawValue().UPUI31applied;
    this.updateSubAssoc(this.assocData.get("UPUI" + "M" + "2278" + "31"));
  }

  updateSubAssoc(assocData) {
    const currentDate = new Intl.DateTimeFormat('en');
    const theDate = currentDate.format();
    assocData.version_date = theDate;
    assocData.version_user = localStorage.getItem('USER_ID');
    this.partyService.updatePartyClassAssoc(assocData);
  }

}
