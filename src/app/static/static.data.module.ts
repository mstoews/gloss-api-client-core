import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shell/shared.module';
import { ConfirmationDialog } from './confirmation-dialog.form.component';
import { DpmAccountExtRefComponent } from './dpm/account/dpm.account-ext.ref.component';
import { DpmAccountFlagComponent } from './dpm/account/dpm.account-flag.component';
import { DpmAccountTypeComponent } from './dpm/account/dpm.account.type.component';
import { BojConfigDefStepperComponent } from './dpm/boj-configdef-stepper.component';
import { DatabaseComponent } from './dpm/database.component';
import { DatabaseFormComponent } from './dpm/forms/database.form.component';
import { DpmAccountFlagFormComponent } from './dpm/forms/dpm.account.flag.form.component';
import { DpmAccountFormComponent } from './dpm/forms/dpm.account.form.component';
import { DpmAccountRefFormComponent } from './dpm/forms/dpm.account.ref.form.component';
import { DpmConfigDefFormComponent } from './dpm/forms/dpm.config.def.form.component';
import { DpmPartyFlagFormComponent } from './dpm/forms/dpm.party.flag.form.component';
import { DpmPartyFormComponent } from './dpm/forms/dpm.party.form.component';
import { DpmPartyRefFormComponent } from './dpm/forms/dpm.party.ref.form.component';
import { DpmSchedulerFormComponent } from './dpm/forms/dpm.scheduler.form.component';
import { FilesCloneFormComponent } from './dpm/forms/files.clone.form.component';
import { JsdcFileDefFormComponent } from './dpm/forms/jsdcfiledef.form.component';
import { JasdecConfigDefStepperComponent } from './dpm/jasdec-configdef-stepper.component';
import { JsdcFileDefComponent } from './dpm/jsdcfiledef.component';
import { DpmConfigDefComponent } from './dpm/party/dpm.config-def.component';
import { DpmPartyExtRefComponent } from './dpm/party/dpm.party-ext.ref.component';
import { DpmPartyFlagComponent } from './dpm/party/dpm.party-flag.component';
import { DpmPartyGroupComponent } from './dpm/party/dpm.party-group.component';
import { DpmPartyComponent } from './dpm/party/dpm.party.component';
import { DpmPartyTypeComponent } from './dpm/party/dpm.party.type.component';
import { ClassAssocFormComponent } from './gloss/forms/classassoc.form.component';
import { GlossSchedulerFormComponent } from './gloss/forms/gloss.scheduler.form.component';
import { PartyAddressFormComponent } from './gloss/forms/party.address.form.component';
import { PartyAssocFormComponent } from './gloss/forms/party.assoc.form.component';
import { PartyClassificationFormComponent } from './gloss/forms/party.class.form.component';
import { PartyDateFormComponent } from './gloss/forms/party.date.form.component';
import { PartyFlagFormComponent } from './gloss/forms/party.flags.form.component';
import { PartyFormComponent } from './gloss/forms/party.form.component';
import { PartyInstrumentFormComponent } from './gloss/forms/party.instru.form.component';
import { PartyNarrativeFormComponent } from './gloss/forms/party.narrative.form.component';
import { PartyRefFormComponent } from './gloss/forms/party.ref.form.component';
import { PartySsiFormComponent } from './gloss/forms/party.ssi.form';
import { PartyTemplateFormComponent } from './gloss/forms/party.template.form.component';
import { ClassAssocGridComponent } from './gloss/party/classassoc/classassoc-grid.component';
import { ClassAssocStepperComponent } from './gloss/party/classassoc/classassoc-stepper.component';
import { NettingGridComponent } from './gloss/party/netting/netting-grid.component';
import { NettingStepperComponent } from './gloss/party/netting/netting-stepper.component';
import { PartyAddressComponent } from './gloss/party/party-address.component';
import { PartyAssocComponent } from './gloss/party/party-assoc.component';
import { PartyClassificationsComponent } from './gloss/party/party-classifications.component';
import { PartyDateComponent } from './gloss/party/party-date.component';
import { PartyExtRefComponent } from './gloss/party/party-ext.ref.component';
import { PartyFlagComponent } from './gloss/party/party-flag.component';
import { PartyGroupComponent } from './gloss/party/party-group.component';
import { PartyInstrComponent } from './gloss/party/party-instr.component';
import { PartyNarrativeComponent } from './gloss/party/party-nar.component';
import { PartySsiComponent } from './gloss/party/party-ssi.component';
import { PartyTemplateComponent } from './gloss/party/party-template.component';
import { PartyComponent } from './gloss/party/party.component';
import { PartyTypeComponent } from './gloss/party/party.type.component';
import { PartySwiftFormComponent } from './gloss/swift/party.swift.form.component';
import { SwiftGridComponent } from './gloss/swift/swift-grid.component';
import { PartyRestoreComponent } from './party-restore';
import { PartyCloneFormComponent } from './gloss/forms/party.clone.form';
import { SchedulerGridComponent } from './scheduler/scheduler-grid.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { StaticRoutingModule } from './static.data-routing.module';
import { TeTemplateFormComponent } from './te/te-template-form';
import { TETemplateComponent } from './te/te-template.component';
import { DpmPartyCloneFormComponent } from './dpm/forms/dpmparty.clone.form';
import { DndComponent } from '../components/grid/dnd/dnd.component';
import { DndDirective } from '../components/grid/dnd/dnd.directive';
import { ProgressComponent } from '../components/progress/progress.component';

@NgModule({
  declarations: [
    ConfirmationDialog,

    ClassAssocGridComponent,
    ClassAssocFormComponent,
    ClassAssocStepperComponent,
    NettingGridComponent,
    NettingStepperComponent,
    SwiftGridComponent,
    PartySwiftFormComponent,

    SchedulerComponent,
    SchedulerGridComponent,
    GlossSchedulerFormComponent,
    DpmSchedulerFormComponent,

    PartyComponent,
    PartyTypeComponent,
    PartyFormComponent,
    PartyGroupComponent,
    PartyCloneFormComponent,
    PartyRestoreComponent,

    PartyExtRefComponent,
    PartyRefFormComponent,
    PartyDateComponent,
    PartyDateFormComponent,
    PartyAddressComponent,
    PartyAddressFormComponent,
    PartyTemplateComponent,
    PartyTemplateFormComponent,
    PartyClassificationsComponent,
    PartyClassificationFormComponent,
    PartyInstrComponent,
    PartyInstrumentFormComponent,
    PartyFlagComponent,
    PartyFlagFormComponent,
    PartyNarrativeComponent,
    PartyNarrativeFormComponent,
    PartyAssocComponent,
    PartyAssocFormComponent,
    PartySsiComponent,
    PartySsiFormComponent,

    DpmPartyComponent,
    DpmPartyTypeComponent,
    DpmPartyFormComponent,
    DpmPartyGroupComponent,
    DpmPartyCloneFormComponent,

    DpmPartyExtRefComponent,
    DpmPartyRefFormComponent,
    DpmPartyFlagComponent,
    DpmPartyFlagFormComponent,
    DpmAccountTypeComponent,
    DpmAccountFormComponent,
    DpmAccountExtRefComponent,
    DpmAccountRefFormComponent,
    DpmAccountFlagComponent,
    DpmAccountFlagFormComponent,
    DatabaseComponent,
    DatabaseFormComponent,
    JsdcFileDefComponent,
    JsdcFileDefFormComponent,
    FilesCloneFormComponent,
    DpmConfigDefComponent,
    DpmConfigDefFormComponent,

    JasdecConfigDefStepperComponent,
    BojConfigDefStepperComponent,

    TETemplateComponent,
    TeTemplateFormComponent,
    DndComponent,
    DndDirective,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StaticRoutingModule,
    MatStepperModule,
  ],
})
export class StaticDataModule { }
