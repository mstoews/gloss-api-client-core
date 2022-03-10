import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnvironmentService } from 'app/services/environment.service';
import {
  BojEnvironment,
  GlossEnvironment,
  JasdecEnvironment,
} from 'app/services/api.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private envservice: EnvironmentService
  ) {}

  loading = true;
  glossenvironments: GlossEnvironment[];
  jasdecenvironments: JasdecEnvironment[];
  bojenvironments: BojEnvironment[];
  formGroup: FormGroup;

  glossenv: string = localStorage.getItem('glossenv');
  jasdecenv: string = localStorage.getItem('jasdecenv');
  bojenv: string = localStorage.getItem('bojenv');

  iconStyle(){
    const styles = {
      'fontSize.em': 2,
      backgroundColor: 'red',
      color: 'black'
    };
    return styles;
  }

  ngOnInit() {
    this.envservice
      .getGlossEnvironmentsofClient(localStorage.getItem('CLIENT'))
      .subscribe({
        next: (value) => this.createForm(value),
        error: (err) => console.log(`ERROR ${err.message}`),
      });
  }

  createForm(value: any) {
    this.glossenvironments = value;
    this.envservice
      .getJasdecEnvironmentsofClient(localStorage.getItem('CLIENT'))
      .subscribe((value) => {
        this.jasdecenvironments = value;
      });
    this.envservice
      .getBojEnvironmentsofClient(localStorage.getItem('CLIENT'))
      .subscribe((value) => {
        this.loading = false;
        this.bojenvironments = value;
      });
    this.formGroup = this.formBuilder.group({
      glossenvironment: [''],
      jasdecenvironment: [''],
      bojenvironment: [''],
    });
  }

  activeglossEnvironment() {
    localStorage.setItem(
      'glossenv',
      this.formGroup.getRawValue().glossenvironment.environment
    );
    localStorage.setItem(
      'gloss_uri',
      this.formGroup.getRawValue().glossenvironment.sst_glossapi_url
    );
    window.location.reload();
  }

  activejasdecEnvironment() {
    localStorage.setItem(
      'jasdecenv',
      this.formGroup.getRawValue().jasdecenvironment.environment
    );
    localStorage.setItem(
      'jasdec_uri',
      this.formGroup.getRawValue().jasdecenvironment.sst_jasdecapi_url
    );
    window.location.reload();
  }

  activebojEnvironment() {
    localStorage.setItem(
      'bojenv',
      this.formGroup.getRawValue().bojenvironment.environment
    );
    localStorage.setItem(
      'boj_uri',
      this.formGroup.getRawValue().bojenvironment.sst_bojapi_url
    );
    window.location.reload();
  }
}
