import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JasdecConfigDefStepperComponent } from './dpm/jasdec-configdef-stepper.component';
import { DatabaseComponent } from './dpm/database.component';
import { JsdcFileDefComponent } from './dpm/jsdcfiledef.component';
import { DpmPartyComponent } from './dpm/party/dpm.party.component';
import { PartyComponent } from './gloss/party/party.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { BojConfigDefStepperComponent } from './dpm/boj-configdef-stepper.component';
import { TETemplateComponent } from './te/te-template.component';

const routes: Routes = [
  {
    path: 'comp',
    pathMatch: 'comp',
    component: PartyComponent,
    data: { partyType: 'COMP', componentType: 'PARTYDATA' },
  },
  {
    path: 'segp',
    pathMatch: 'segp',
    component: PartyComponent,
    data: { partyType: 'SEGP', componentType: 'PARTYDATA' },
  },
  {
    path: 'dacc',
    pathMatch: 'dacc',
    component: PartyComponent,
    data: { partyType: 'DACC', componentType: 'PARTYDATA' },
  },
  {
    path: 'book',
    pathMatch: 'book',
    component: PartyComponent,
    data: { partyType: 'BOOK', componentType: 'PARTYDATA' },
  },
  {
    path: 'depo',
    pathMatch: 'depo',
    component: PartyComponent,
    data: { partyType: 'DEPO', componentType: 'PARTYDATA' },
  },
  {
    path: 'swift',
    pathMatch: 'swift',
    component: PartyComponent,
    data: { partyType: 'COMP', componentType: 'SWIFT' },
  },
  {
    path: 'classassoc',
    pathMatch: 'classassoc',
    component: PartyComponent,
    data: { partyType: 'COMP', componentType: 'CLASSASSOC' },
  },
  {
    path: 'netting',
    pathMatch: 'netting',
    component: PartyComponent,
    data: { partyType: 'COMP', componentType: 'NETTING' },
  },
  {
    path: 'glossscheduler',
    pathMatch: 'glossscheduler',
    component: SchedulerComponent,
    data: { componentType: 'GLOSS' },
  },
  {
    path: 'counterparty',
    pathMatch: 'counterparty',
    component: PartyComponent,
    data: { partyType: 'SECP', componentType: 'PARTYDATA' },
  },
  {
    path: 'jasdeccomp',
    pathMatch: 'jasdeccomp',
    component: DpmPartyComponent,
    data: { componentType: 'JASDEC' },
  },
  {
    path: 'jasdecdatabases',
    pathMatch: 'jasdecdatabases',
    component: DatabaseComponent,
    data: { componentType: 'JASDEC' },
  },
  {
    path: 'jasdecfiles',
    pathMatch: 'jasdecfiles',
    component: JsdcFileDefComponent,
    data: { componentType: 'JASDEC' },
  },
  {
    path: 'jasdecscheduler',
    pathMatch: 'jasdecscheduler',
    component: SchedulerComponent,
    data: { componentType: 'JASDEC' },
  },
  {
    path: 'jasdecconfig',
    pathMatch: 'jasdecconfig',
    component: JasdecConfigDefStepperComponent,
  },
  {
    path: 'bojcomp',
    pathMatch: 'bojcomp',
    component: DpmPartyComponent,
    data: { componentType: 'BOJ' },
  },
  {
    path: 'bojdatabases',
    pathMatch: 'bojdatabases',
    component: DatabaseComponent,
    data: { componentType: 'BOJ' },
  },
  {
    path: 'bojfiles',
    pathMatch: 'bojfiles',
    component: JsdcFileDefComponent,
    data: { componentType: 'BOJ' },
  },
  {
    path: 'bojscheduler',
    pathMatch: 'bojscheduler',
    component: SchedulerComponent,
    data: { componentType: 'BOJ' },
  },
  {
    path: 'bojconfig',
    pathMatch: 'bojconfig',
    component: BojConfigDefStepperComponent,
  },
  {
    path: 'tetemplate',
    pathMatch: 'tetemplate',
    component: TETemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule { }
