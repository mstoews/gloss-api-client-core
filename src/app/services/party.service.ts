import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackService } from 'app/services/snack.service';
import { map } from 'rxjs/operators';
import * as glossApi from './api.service';
import { PartyRefService } from './partyRef.service';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  constructor(

    private readonly partyRefService: PartyRefService,
    private snackService: SnackService,
    private http: HttpClient,

    // Gloss
    // Party
    private readonly getPartyByTypeGQL: glossApi.PartyByTypeGQL,
    private readonly firstPartyByTypeGQL: glossApi.FirstPartyByTypeGQL,
    private readonly getPartyByRefGQL: glossApi.PartyGQL,
    private readonly createPartyGQL: glossApi.CreatePartyGQL,
    private readonly updatePartyByRefGQL: glossApi.UpdatePartyGQL,
    private readonly deletePartyTreeGQL: glossApi.DeletePartyTreeGQL,

    // Party Ext Reference
    private readonly partyExtByRef: glossApi.PartyExtRefGQL,
    private readonly createPartyExtRefGQL: glossApi.CreatePartyExtRefGQL,
    private readonly updatePartyExtRefGQL: glossApi.UpdatePartyExtRefGQL,
    private readonly deletePartyExtRefGQL: glossApi.DeletePartyExtRefGQL,
    private readonly savePartyStaticpushedToGlossGQL: glossApi.SavePartyStaticpushedToGlossGQL,

    // Classification
    private readonly classByRef: glossApi.PartyClassGQL,
    private readonly createPartyClassificationGQL: glossApi.CreatePartyClassificationGQL,
    private readonly updatePartyClassificationGQL: glossApi.UpdatePartyClassificationGQL,
    private readonly deletePartyClassificationGQL: glossApi.DeletePartyClassificationGQL,

    // Flags
    private readonly flagByRefGQL: glossApi.PartyFlagGQL,
    private readonly createPartyFlagGQL: glossApi.CreatePartyFlagGQL,
    private readonly updatePartyFlagGQL: glossApi.UpdatePartyFlagGQL,
    private readonly deletePartyFlagGQL: glossApi.DeletePartyFlagGQL,

    // Assoc
    private readonly assocByRefGQL: glossApi.PartyAssocGQL,
    private readonly createPartyAssociationGQL: glossApi.CreatePartyAssocGQL,
    private readonly updatePartyAssociationGQL: glossApi.UpdatePartyAssocGQL,
    private readonly deletePartyAssociationGQL: glossApi.DeletePartyAssocGQL,

    // Instrument
    private readonly instrByRefGQL: glossApi.PartyInstrGQL,
    private readonly createPartyInstrGQL: glossApi.CreatePartyInstrumentGQL,
    private readonly updatePartyInstrGQL: glossApi.UpdatePartyInstrumentGQL,
    private readonly deletePartyInstrGQL: glossApi.DeletePartyInstrumentGQL,

    // Narrative
    private readonly narrativeByRefGQL: glossApi.PartyNarrativeGQL,
    private readonly createPartyNarrativeGQL: glossApi.CreatePartyNarrativeGQL,
    private readonly updatePartyNarrativeGQL: glossApi.UpdatePartyNarrativeGQL,
    private readonly deletePartyNarrativeGQL: glossApi.DeletePartyNarrativeGQL,

    // SSI
    private readonly ssiByRefGQL: glossApi.PartySsiGQL,
    private readonly createPartySsiGQL: glossApi.CreatePartySsiGQL,
    private readonly updatePartySsiGQL: glossApi.UpdatePartySsiGQL,
    private readonly deletePartySsiGQL: glossApi.DeletePartySsiGQL,

    // DATE
    private readonly getDateByRefGQL: glossApi.PartyDateGQL,
    private readonly createPartyDateGQL: glossApi.CreatePartyDateGQL,
    private readonly updatePartyDateGQL: glossApi.UpdatePartyDateGQL,
    private readonly deletePartyDateGQL: glossApi.DeletePartyDateGQL,

    // ADDRESS
    private readonly getAddressByRefGQL: glossApi.PartyAddressGQL,
    private readonly createPartyAddressGQL: glossApi.CreatePartyAddressGQL,
    private readonly updatePartyAddressGQL: glossApi.UpdatePartyAddressGQL,
    private readonly deletePartyAddressGQL: glossApi.DeletePartyAddressGQL,

    // TEMPLATE
    private readonly getTemplateByRefGQL: glossApi.PartyTemplateGQL,
    private readonly createPartyTemplateGQL: glossApi.CreatePartyTemplateGQL,
    private readonly updatePartyTemplateGQL: glossApi.UpdatePartyTemplateGQL,
    private readonly deletePartyTemplateGQL: glossApi.DeletePartyTemplateGQL,

    // SWIFT
    private readonly getSwiftByRefGQL: glossApi.PartySwiftGQL,
    private readonly createPartySwiftGQL: glossApi.CreatePartySwiftGQL,
    private readonly updatePartySwiftGQL: glossApi.UpdatePartySwiftGQL,
    private readonly deletePartySwiftGQL: glossApi.DeletePartySwiftGQL,

    // ClassAssoc
    private readonly getClassAssocByRefGQL: glossApi.PartyClassAssocGQL,
    private readonly createPartyClassAssocGQL: glossApi.CreateClassAssocGQL,
    private readonly updatePartyClassAssocGQL: glossApi.UpdateClassAssocGQL,
    private readonly deletePartyClassAssocGQL: glossApi.DeleteClassAssocGQL,
    private readonly saveClassAssocStaticpushedToGlossGQL: glossApi.SaveClassAssocStaticpushedToGlossGQL,

    // Netting
    private readonly getNettingByRefGQL: glossApi.PartyNettingGQL,
    private readonly createPartyNettingGQL: glossApi.CreateNettingGQL,
    private readonly updatePartyNettingGQL: glossApi.UpdateNettingGQL,
    private readonly deletePartyNettingGQL: glossApi.DeleteNettingGQL,
    private readonly saveNettingStaticpushedToGlossGQL: glossApi.SaveNettingStaticpushedToGlossGQL,

    // Scheduler
    private readonly getGlossSchedulerGQL: glossApi.GlossSchedulerGQL,
    private readonly createGlossSchedulerGQL: glossApi.CreateglossSchedulerGQL,
    private readonly updateGlossSchedulerGQL: glossApi.UpdateglossSchedulerGQL,
    private readonly deleteGlossSchedulerGQL: glossApi.DeleteglossSchedulerGQL,

    // Utility Queries
    private readonly clonePartyGQL: glossApi.ClonePartyGQL,
    private readonly cloneSwiftPartyGQL: glossApi.CloneSwiftPartyGQL,
    private readonly cloneClassAssocGQL: glossApi.CloneClassAssocGQL,
    private readonly cloneNettingDataGQL: glossApi.CloneNettingDataGQL,
    private readonly cloneGlossSchedulerDataGQL: glossApi.CloneglossSchedulerGQL,
    private readonly backUpPartyDataGQL: glossApi.BackUpPartyDataGQL,
    private readonly getGlossPartyAuditByRefGQL: glossApi.GlossPartyAuditGQL,
    private readonly restorePartyDataGQL: glossApi.RestorePartyDataGQL,

    // Dpm Party
    private readonly getdpmPartyByTypeGQL: glossApi.DpmPartyByTypeGQL,
    private readonly getdpmPartyByClientGQL: glossApi.DpmPartyByClientGQL,
    private readonly firstdpmPartyByClient: glossApi.FirstdpmPartyByClientGQL,
    private readonly getdpmPartyByRefGQL: glossApi.DpmPartyGQL,
    private readonly createdpmPartyGQL: glossApi.CreatedpmPartyGQL,
    private readonly updatedpmPartyByRefGQL: glossApi.UpdatedpmPartyGQL,
    private readonly deletedpmPartyTreeGQL: glossApi.DeletedpmPartyTreeGQL,

    // Dpm Party Ext Reference
    private readonly getdpmPartyExtByRefGQL: glossApi.DpmPartyExtRefGQL,
    private readonly createdpmPartyExtRefGQL: glossApi.CreatedpmPartyExtRefGQL,
    private readonly updatedpmPartyExtRefGQL: glossApi.UpdatedpmPartyExtRefGQL,
    private readonly deletedpmPartyExtRefGQL: glossApi.DeletedpmPartyExtRefGQL,

    // Dpm Party Flags
    private readonly getdpmPartyFlagByRefGQL: glossApi.DpmPartyFlagGQL,
    private readonly createdpmPartyFlagGQL: glossApi.CreatedpmPartyFlagGQL,
    private readonly updatedpmPartyFlagGQL: glossApi.UpdatedpmPartyFlagGQL,
    private readonly deletedpmPartyFlagGQL: glossApi.DeletedpmPartyFlagGQL,

    // Dpm Account
    private readonly getdpmAccountByRefGQL: glossApi.DpmAccountGQL,
    private readonly createdpmAccountGQL: glossApi.CreatedpmAccountGQL,
    private readonly updatedpmAccountGQL: glossApi.UpdatedpmAccountGQL,
    private readonly deletedpmAccountGQL: glossApi.DeletedpmAccountGQL,

    // Dpm Account Ext Reference
    private readonly getdpmAccountExtByRefGQL: glossApi.DpmAccountExtRefGQL,
    private readonly createdpmAccountExtRefGQL: glossApi.CreatedpmAccountExtRefGQL,
    private readonly updatedpmAccountExtRefGQL: glossApi.UpdatedpmAccountExtRefGQL,
    private readonly deletedpmAccountExtRefGQL: glossApi.DeletedpmAccountExtRefGQL,

    // Dpm Account Flags
    private readonly getdpmAccountFlagByRefGQL: glossApi.DpmAccountFlagGQL,
    private readonly createdpmAccountFlagGQL: glossApi.CreatedpmAccountFlagGQL,
    private readonly updatedpmAccountFlagGQL: glossApi.UpdatedpmAccountFlagGQL,
    private readonly deletedpmAccountFlagGQL: glossApi.DeletedpmAccountFlagGQL,

    // Dpm Config Def
    private readonly getdpmConfigDefByRefGQL: glossApi.DpmConfigDefGQL,
    private readonly createdpmConfigDefGQL: glossApi.CreatedpmConfigDefGQL,
    private readonly updatedpmConfigDefGQL: glossApi.UpdatedpmConfigDefGQL,
    private readonly deletedpmConfigDefGQL: glossApi.DeletedpmConfigDefGQL,
    private readonly savedpmconfigdefpushedGQL: glossApi.SavedpmconfigdefpushedGQL,

    // Databases
    private readonly getdatabasesGQL: glossApi.DatabasesGQL,
    private readonly createdatabaseGQL: glossApi.CreatedatabaseGQL,
    private readonly updatedatabaseGQL: glossApi.UpdatedatabaseGQL,
    private readonly deletedatabaseGQL: glossApi.DeletedatabaseGQL,

    // Jsdc File Def
    private readonly getjsdcfiledefGQL: glossApi.JsdcFileDefGQL,
    private readonly createjsdcfiledefGQL: glossApi.CreateJsdcFileDefGQL,
    private readonly updatejsdcfiledefGQL: glossApi.UpdateJsdcFileDefGQL,
    private readonly deletejsdcfiledefGQL: glossApi.DeleteJsdcFileDefGQL,
    private readonly savefilesStaticpushed: glossApi.SavefilesStaticpushedGQL,

    // Scheduler
    private readonly getdpmSchedulerGQL: glossApi.DpmSchedulerGQL,
    private readonly createdpmSchedulerGQL: glossApi.CreatedpmSchedulerGQL,
    private readonly updatedpmSchedulerGQL: glossApi.UpdatedpmSchedulerGQL,
    private readonly deletedpmSchedulerGQL: glossApi.DeletedpmSchedulerGQL,

    // Config Def
    private readonly getConfigDefEntriesGQL: glossApi.ConfigDefEntriesGQL,
    private readonly updateConfigDefGQL: glossApi.UpdateConfigDefGQL,

    // Utilities

    private readonly clonedpmPartyGQL: glossApi.ClonedpmPartyGQL,
    private readonly clonedpmSchedulerDataGQL: glossApi.ClonedpmSchedulerGQL,
    private readonly clonedatabasesGQL: glossApi.ClonedatabasesGQL,
    private readonly clonejsdcfiledefGQL: glossApi.ClonejsdcfiledefGQL,
    private readonly backUpdpmPartyDataGQL: glossApi.BackUpDpmPartyDataGQL,
    private readonly getdpmPartyAuditByRefGQL: glossApi.DpmPartyAuditGQL,
    private readonly restoredpmPartyDataGQL: glossApi.RestoreDpmPartyDataGQL,

    // TE
    private readonly getTeTemplatesGQL: glossApi.TeTemplatesGQL,
    private readonly createTeTemplateGQL: glossApi.CreateTeTemplateGQL,
    private readonly updateTeTemplateGQL: glossApi.UpdateTeTemplateGQL,
    private readonly deleteTeTemplateGQL: glossApi.DeleteTeTemplateGQL,
  ) {
    this.isPartyTypeSelected = false;
  }

  httpOptions = {
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  dpmCompanyRef: string;
  partyRef: string;
  partyType: string;
  isPartyTypeSelected: boolean;

  public setParty(data) {
    if (data.company_ref) {
      this.dpmCompanyRef = data.company_ref;
    }
    this.partyRef = data.party_ref;
    this.partyType = data.party_type;
    this.isPartyTypeSelected = true;
    this.partyRefService.setParty(data);
  }

  public getDpmCompanyRef() {
    return this.dpmCompanyRef;
  }

  public getPartyRef() {
    return this.partyRef;
  }

  public getPartyType() {
    return this.partyType;
  }

  public getClientRef() {
    return localStorage.getItem('CLIENT');
  }

  dateFormatter(params) {
    const dateAsString = params.value;
    const dateParts = dateAsString.split('-');
    return `${dateParts[0]} - ${dateParts[1]} - ${dateParts[2].slice(0, 2)}`;
  }

  // Party

  public getPartyByType(partyType: string) {
    return this.getPartyByTypeGQL
      .watch({ party_type: partyType, client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyByType));
  }

  public getPartyByTypeAndClient(partyType: string, clientRef: string) {
    return this.getPartyByTypeGQL
      .watch({ party_type: partyType, client_ref: clientRef })
      .valueChanges.pipe(map((result) => result.data.partyByType));
  }

  public getFirstPartyByType(partyType: string) {
    return this.firstPartyByTypeGQL
      .watch({ party_type: partyType, client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.firstPartyByType));
  }

  public getPartyByRef(partyRef: string) {
    return this.getPartyByRefGQL
      .watch({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .valueChanges.pipe(map((result) => result.data.party));
  }

  public createParty(data: glossApi.PartyInput) {
    data.client_ref = this.getClientRef();
    return this.createPartyGQL.mutate({ data: data });
  }

  public updatePartyByRef(data: glossApi.PartyInput) {
    return this.updatePartyByRefGQL.mutate({ data: data });
  }

  public deletePartyTree(partyRef: string) {
    return this.deletePartyTreeGQL.mutate({
      party_ref: partyRef,
      client_ref: this.getClientRef(),
    });
  }

  public getPartyTypeCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Party Type', field: 'party_type' },
      { headerName: 'Short Name', field: 'party_short_name', minWidth: 75 },
      { headerName: 'Long Name', field: 'party_long_name', minWidth: 150 },
      {
        headerName: 'Full Name', field: 'party_extra_long_name', minWidth: 225,
      },
      { headerName: 'Active', field: 'active_ind' },
      { headerName: 'swift config present', field: 'has_swift_config' },
      { headerName: 'netting config present', field: 'has_netting_config' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public sendParty(envRef: string) {
    this.savePartyStaticpushedToGlossGQL
      .mutate({
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        environment: envRef,
      })
      .subscribe((val) => {
        if (this.getPartyType() === 'COMP') {
          this.http
            .post(
              localStorage.getItem('gloss_uri') + '/api/classassocstatic',
              val.data.savePartyStaticpushedToGloss.party_class_assoc
            )
            .subscribe((message) => {
              this.snackService.showMessage(message.toString());
            });
          if (val.data.savePartyStaticpushedToGloss.party_template[0]) {
            this.http
              .post(
                localStorage.getItem('gloss_uri') + '/api/companystaticT',
                val.data.savePartyStaticpushedToGloss.party_template[0]
              )
              .subscribe((message) => {
                this.snackService.showMessage(message.toString());
              });
            this.http
              .post(
                localStorage.getItem('gloss_uri') + '/api/companystaticC',
                val.data.savePartyStaticpushedToGloss.party_template[0]
              )
              .subscribe((message) => {
                this.snackService.showMessage(message.toString());
              });
          }
        }
        this.http
          .post(
            localStorage.getItem('gloss_uri') + '/api/partystatic',
            val.data.savePartyStaticpushedToGloss
          )
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      });
  }

  // PartyExtRef - Reference

  public getExtByRef() {
    return this.partyExtByRef
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyExtRef));
  }

  public createPartyExtRef(data: glossApi.PartyExtRefInput) {
    data.client_ref = this.getClientRef();
    this.createPartyExtRefGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyExtRef(data: glossApi.PartyExtRefInput) {
    this.updatePartyExtRefGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyExtRef(partyRef: string, extReftype: string) {
    this.deletePartyExtRefGQL
      .mutate({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        party_ext_ref_type: extReftype,
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartyExtRefCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'party_ext_ref_type' },
      { headerName: 'External Reference', field: 'party_ext_ref' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // PartyClassification

  public getClassByRef() {
    return this.classByRef
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyClassification));
  }

  public createPartyClassification(data: glossApi.PartyClassInput) {
    data.client_ref = this.getClientRef();
    this.createPartyClassificationGQL.mutate({ data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyClassification(data: glossApi.PartyClassInput) {
    this.updatePartyClassificationGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyClassification(partyRef: string, classType: string) {
    this.deletePartyClassificationGQL
      .mutate({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        class_type: classType,
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getClassCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'class_type' },
      { headerName: 'Class Code', field: 'class_code' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // PartyFlag

  public getFlagByRef() {
    return this.flagByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyFlag));
  }

  public createPartyFlag(data: glossApi.PartyFlagInput) {
    data.client_ref = this.getClientRef();
    this.createPartyFlagGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyFlag(data: glossApi.PartyFlagInput) {
    this.updatePartyFlagGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyFlag(partyRef: string, flagType: number, flagCode: string) {
    this.deletePartyFlagGQL
      .mutate({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        flag_type: flagType,
        flag_code: flagCode,
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartyFlagCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'flag_type' },
      { headerName: 'Flag Code', field: 'flag_code' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // Party Narrative

  public getNarrativeByRef() {
    return this.narrativeByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyNarrative));
  }

  public createPartyNarrative(data: glossApi.PartyNarrativeInput) {
    data.client_ref = this.getClientRef();
    this.createPartyNarrativeGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyNarrative(data: glossApi.PartyNarrativeInput) {
    this.updatePartyNarrativeGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyNarrative(
    partyRef: string,
    deleteNarrativeNarrType: string
  ) {
    this.deletePartyNarrativeGQL
      .mutate({
        narr_type: deleteNarrativeNarrType,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartyNarrativeCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'narr_type' },
      { headerName: 'Narrative', field: 'narrative' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // PartyAssociation

  public getAssocByRef() {
    return this.assocByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyAssoc));
  }

  public createPartyAssociation(data: glossApi.PartyAssocInput) {
    data.client_ref = this.getClientRef();
    this.createPartyAssociationGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyAssociation(data: glossApi.PartyAssocInput) {
    this.updatePartyAssociationGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyAssociation(partyRef: string, assocType: string) {
    this.deletePartyAssociationGQL
      .mutate({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        assoc_type: assocType,
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartyAssocCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'assoc_type' },
      { headerName: 'Assoc Party Reference', field: 'assoc_party_ref' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // PartyInstrument

  public getInstrByRef() {
    return this.instrByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyInstr));
  }

  public createPartyInstr(data: glossApi.PartyInstrInput) {
    data.client_ref = this.getClientRef();
    this.createPartyInstrGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyInstr(data: glossApi.PartyInstrInput) {
    this.updatePartyInstrGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyInstr(
    partyRef: string,
    instrType: string,
    instrRefType: string,
    instrRef: string
  ) {
    this.deletePartyInstrGQL
      .mutate({
        client_ref: this.getClientRef(),
        instr_type: instrType,
        instr_ref: instrRef,
        instr_ref_type: instrRefType,
        party_ref: partyRef,
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartyInstrCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Instrument Type', field: 'instr_type' },
      { headerName: 'Instrument Reference Type', field: 'instr_ref_type' },
      { headerName: 'Reference', field: 'instr_ref' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // Party SSI

  public getSsiByRef() {
    return this.ssiByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partySSI));
  }

  public createPartySsi(data: glossApi.PartySsiInput) {
    data.client_ref = this.getClientRef();
    this.createPartySsiGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartySsi(data: glossApi.PartySsiInput) {
    this.updatePartySsiGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartySsi(partyRef: string, ssiDepotAlias: string) {
    this.deletePartySsiGQL
      .mutate({
        deleteSsiDepotAlias: ssiDepotAlias,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartySsiCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Account Name', field: 'account_name' },
      { headerName: 'Account No', field: 'account_no' },
      { headerName: 'Active', field: 'active_ind' },
      { headerName: 'Comms Service', field: 'comms_service' },
      { headerName: 'DACC Reference', field: 'dacc_ref' },
      { headerName: 'Depo Referenece', field: 'depo_ref' },
      { headerName: 'Depo Alias', field: 'depot_alias' },
      { headerName: 'Depo Description', field: 'depot_descr' },
      { headerName: 'Depo Type', field: 'depot_type' },
      { headerName: 'Ccy', field: 'ccy' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public sendPartySSI() {
    this.getSsiByRef().subscribe((value) => {
      this.http
        .post(localStorage.getItem('gloss_uri') + '/api/partyssistatic', value)
        .subscribe((message) => {
          this.snackService.showMessage(message.toString());
        });
    });
  }

  // Party Date

  public getDateByRef() {
    return this.getDateByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyDate));
  }

  createPartyDate(data: glossApi.PartyDateInput) {
    data.client_ref = this.getClientRef();
    this.createPartyDateGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  updatePartyDate(data: glossApi.PartyDateInput) {
    this.updatePartyDateGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  deletePartyDate(partyRef: string, dateType: string) {
    this.deletePartyDateGQL
      .mutate({
        date_type: dateType,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  getPartyDateCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'date_type' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Time', field: 'time' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // Party Address

  public getAddressByRef() {
    return this.getAddressByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyAddress));
  }

  createPartyAddress(data: glossApi.PartyAddressInput) {
    data.client_ref = this.getClientRef();
    this.createPartyAddressGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  updatePartyAddress(data: glossApi.PartyAddressInput) {
    this.updatePartyAddressGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  deletePartyAddress(partyRef: string, addrType: string) {
    this.deletePartyAddressGQL
      .mutate({
        addr_type: addrType,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  getPartyAddressCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Address 1', field: 'addr_line1' },
      { headerName: 'Address 2', field: 'addr_line2' },
      { headerName: 'Address 3', field: 'addr_line3' },
      { headerName: 'Address 4', field: 'addr_line4' },
      { headerName: 'Address 5', field: 'addr_line5' },
      { headerName: 'Address 6', field: 'addr_line6' },
      { headerName: 'Address Type', field: 'addr_type' },
      { headerName: 'Contact Name', field: 'contact_name' },
      { headerName: 'Contact Title', field: 'contact_title' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Fax Number', field: 'fax_no' },
      { headerName: 'International Dial Code', field: 'int_dial_code' },
      { headerName: 'Phone number', field: 'phone_no' },
      { headerName: 'Postal Code', field: 'post_code' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // PartyTemplate

  public getTemplateByRef() {
    return this.getTemplateByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyTemplate));
  }

  public createPartyTemplate(data: glossApi.PartyTemplateInput) {
    data.client_ref = this.getClientRef();
    this.createPartyTemplateGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartyTemplate(data: glossApi.PartyTemplateInput) {
    this.updatePartyTemplateGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartyTemplate(partyRef: string) {
    this.deletePartyTemplateGQL
      .mutate({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  getPartyTemplateCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Template Party Reference', field: 'template_party_ref' },
      { headerName: 'Short Name', field: 'party_short_name', minWidth: 75 },
      { headerName: 'Long Name', field: 'party_long_name', minWidth: 150 },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  // Party Swift

  public getSwiftByRef() {
    return this.getSwiftByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partySwift));
  }

  public createPartySwift(data: glossApi.PartySwiftInput) {
    data.client_ref = this.getClientRef();
    this.createPartySwiftGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Created'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public updatePartySwift(data: glossApi.PartySwiftInput) {
    this.updatePartySwiftGQL.mutate({ data: data }).subscribe(
      (value) => this.snackService.showMessage('Updated'),
      (error) => this.snackService.showMessage(error.message)
    );
  }

  public deletePartySwift(partyRef: string) {
    this.deletePartySwiftGQL
      .mutate({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .subscribe(
        (value) => this.snackService.showMessage('Deleted'),
        (error) => this.snackService.showMessage(error.message)
      );
  }

  public getPartySwiftCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Bic Code', field: 'company_name' },
      { headerName: 'Branch Code', field: 'branch_code' },
      { headerName: 'Logical Terminal Id', field: 'logical_term_id' },
      { headerName: 'Queue Manager', field: 'queue_mgr' },
      { headerName: 'Incoming Queue', field: 'incoming_queue' },
      { headerName: 'Outgoing Queue', field: 'outgoing_queue' },
      { headerName: 'Channel', field: 'channel' },
      { headerName: 'Host', field: 'host' },
      { headerName: 'Port Number', field: 'port_number' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public sendSwiftStatic() {
    this.getSwiftByRef().subscribe({
      next: (value) => {
        this.http
          .post(
            localStorage.getItem('gloss_uri') + '/api/swiftstatic',
            value[0]
          )
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      },
      error: (err) => this.snackService.showMessage(err.toString()),
    });
  }

  // Party ClassAssoc

  public getClassAssocByRef() {
    return this.getClassAssocByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyClassAssoc));
  }

  public createPartyClassAssoc(data: glossApi.ClassAssocInput) {
    data.client_ref = this.getClientRef();
    this.createPartyClassAssocGQL.mutate({ data: data }).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Created Class assoc code:' +
          value.data.createClassAssoc.class_assoc_code +
          'for party:' +
          value.data.createClassAssoc.party_ref
        );
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  public updatePartyClassAssoc(data: glossApi.ClassAssocInput) {
    this.updatePartyClassAssocGQL
      .mutate({
        data: data,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Updated Class assoc code:' +
            value.data.updateClassAssoc.class_assoc_code +
            'for party:' +
            value.data.updateClassAssoc.party_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public deletePartyClassAssoc(
    partyRef: string,
    class_assoc_code: string,
    code_type: string,
    class_1: number,
    code_1: string,
    class_2: number) {
    this.deletePartyClassAssocGQL
      .mutate({
        client_ref: this.getClientRef(),
        party_ref: partyRef,
        class_assoc_code: class_assoc_code,
        code_type: code_type,
        class_1: class_1,
        code_1: code_1,
        class_2: class_2
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Updated Class assoc code:' +
            value.data.deleteClassAssoc.class_assoc_code +
            'for party:' +
            value.data.deleteClassAssoc.party_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public getPartyClassAssocCols() {
    const cols = [
      { headerName: 'Assoc', field: 'class_assoc_code' },
      { headerName: 'code_type', field: 'code_type' },
      { headerName: 'class_1', field: 'class_1' },
      { headerName: 'code_1', field: 'code_1' },
      { headerName: 'class_2', field: 'class_2' },
      { headerName: 'code_2', field: 'code_2' },
      { headerName: 'applied', field: 'applied' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
    ];
    return cols;
  }

  public sendClassAssocStatic(envRef: string) {
    this.saveClassAssocStaticpushedToGlossGQL
      .mutate({
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        environment: envRef,
      })
      .subscribe((val) => {
        this.http
          .post(
            localStorage.getItem('gloss_uri') + '/api/classassocstatic',
            val.data.saveClassAssocStaticpushedToGloss
          )
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      });
  }

  // Party Netting

  public getNettingByRef() {
    return this.getNettingByRefGQL
      .watch({ party_ref: this.getPartyRef(), client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.partyNetting));
  }

  public createPartyNetting(data: glossApi.NettingInput) {
    data.client_ref = this.getClientRef();
    this.createPartyNettingGQL.mutate({ data: data }).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Created :' +
          value.data.createNetting.net_driver +
          ' netting for party:' +
          value.data.createNetting.party_ref
        );
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  public updatePartyNetting(data: glossApi.NettingInput) {
    this.updatePartyNettingGQL.mutate({ data: data }).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Updated :' +
          value.data.updateNetting.net_driver +
          ' ' +
          value.data.updateNetting.settle_code +
          ' ' +
          value.data.updateNetting.transaction_type +
          ' ' +
          ' netting for party:' +
          value.data.updateNetting.party_ref
        );
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  public deletePartyNetting(
    netDriver: string,
    partyRef: string,
    settleCode: string,
    transactionType: string
  ) {
    this.deletePartyNettingGQL
      .mutate({
        client_ref: this.getClientRef(),
        net_driver: netDriver,
        party_ref: partyRef,
        settle_code: settleCode,
        transaction_type: transactionType,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Deleted :' +
            value.data.deleteNetting.net_driver +
            ' ' +
            value.data.deleteNetting.settle_code +
            ' ' +
            value.data.deleteNetting.transaction_type +
            ' ' +
            ' netting for party:' +
            value.data.deleteNetting.party_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public getPartyNettingCols() {
    const cols = [
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'Net Driver', field: 'net_driver' },
      { headerName: 'Settle Code', field: 'settle_code' },
      { headerName: 'Transaction Type', field: 'transaction_type' },
      { headerName: 'Trade group', field: 'trade_group' },
      { headerName: 'Late rule', field: 'late_rule' },
      { headerName: 'Net schedule code', field: 'net_schedule_code' },
      { headerName: 'Date type', field: 'date_type' },
      { headerName: 'Buy and sell flag', field: 'buy_and_sell_flag' },
      { headerName: 'Net party ref', field: 'net_party_ref' },
      { headerName: 'Net book', field: 'net_book' },
      { headerName: 'Override net book', field: 'override_net_book' },
      { headerName: 'Secondary party', field: 'secondary_party' },
      { headerName: 'Settle terms', field: 'settle_terms' },
      { headerName: 'Operation type', field: 'operation_type' },
      { headerName: 'Net primary', field: 'net_primary' },
      { headerName: 'Primary comp service', field: 'primary_comp_service' },
      { headerName: 'Primary secp service', field: 'primary_secp_service' },
      { headerName: 'Net secondary', field: 'net_secondary' },
      { headerName: 'Secondary comp service', field: 'secondary_comp_service' },
      { headerName: 'Secondary secp service', field: 'secondary_secp_service' },
      { headerName: 'Primary instr', field: 'primary_instr' },
      { headerName: 'Primary comp alias', field: 'primary_comp_alias' },
      { headerName: 'Primary depot type', field: 'primary_depot_type' },
      { headerName: 'Primary party ref', field: 'primary_party_ref' },
      { headerName: 'Primary secp alias', field: 'primary_secp_alias' },
      { headerName: 'Settle instr', field: 'settle_instr' },
      { headerName: 'Secondary comp alias', field: 'secondary_comp_alias' },
      { headerName: 'Secondary depot type', field: 'secondary_depot_type' },
      { headerName: 'Secondary party ref', field: 'secondary_party_ref' },
      { headerName: 'Secondary secp alias', field: 'secondary_secp_alias' },
      { headerName: 'Market party', field: 'market_party' },
      { headerName: 'Start date type', field: 'start_date_type' },
      { headerName: 'Start offset ind', field: 'start_offset_ind' },
      { headerName: 'Start offset code', field: 'start_offset_code' },
      { headerName: 'End date type', field: 'end_date_type' },
      { headerName: 'End offset ind', field: 'end_offset_ind' },
      { headerName: 'End offset code', field: 'end_offset_code' },
      {
        headerName: 'Net cash when zero stock',
        field: 'net_cash_when_zero_stock',
      },
      { headerName: 'Split buy sell', field: 'split_buy_sell' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
    ];
    return cols;
  }

  public sendNettingStatic(envRef: string) {
    this.saveNettingStaticpushedToGlossGQL
      .mutate({
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        environment: envRef,
      })
      .subscribe((val) => {
        this.http
          .post(
            localStorage.getItem('gloss_uri') + '/api/nettingstatic',
            val.data.saveNettingStaticpushedToGloss
          )
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      });
  }

  public getGlossScheduler() {
    return this.getGlossSchedulerGQL
      .watch({ client_ref: this.getClientRef() })
      .valueChanges.pipe(map((result) => result.data.glossScheduler));
  }

  public createGlossScheduler(data: glossApi.GlossSchedulerInput) {
    data.client_ref = this.getClientRef();
    this.createGlossSchedulerGQL.mutate({ data: data }).subscribe(
      (value) => {
        this.snackService.showMessage(
          'Created Event:' + value.data.createglossScheduler.event_ref
        );
      },
      (error) => {
        this.snackService.showMessage(error.message);
      }
    );
  }

  public updateGlossScheduler(
    msgType: number,
    eventRef: string,
    dueDateTime: Date,
    databaseCode: string,
    data: glossApi.GlossSchedulerInput
  ) {
    this.updateGlossSchedulerGQL
      .mutate({
        msg_type: msgType,
        client_ref: this.getClientRef(),
        event_ref: eventRef,
        due_date_time: dueDateTime,
        database_code: databaseCode,
        data: data,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Updated Event:' + value.data.updateglossScheduler.event_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public deleteGlossScheduler(
    msgType: number,
    eventRef: string,
    dueDateTime: Date,
    databaseCode: string
  ) {
    this.deleteGlossSchedulerGQL
      .mutate({
        msg_type: msgType,
        client_ref: this.getClientRef(),
        event_ref: eventRef,
        due_date_time: dueDateTime,
        database_code: databaseCode,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Deleted Event:' + value.data.deleteglossScheduler.event_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public getGlossSchedulerCols() {
    const cols = [
      { headerName: 'msg type', field: 'msg_type', minWidth: 100 },
      { headerName: 'event ref', field: 'event_ref', minWidth: 150 },
      { headerName: 'database type', field: 'database_type' },
      { headerName: 'database code', field: 'database_code', minWidth: 100 },
      { headerName: 'sql db code', field: 'sql_db_code' },
      { headerName: 'bus day', field: 'bus_day' },
      { headerName: 'holiday id', field: 'holiday_id' },
      { headerName: 'frequency unit', field: 'frequency_unit' },
      { headerName: 'frequency interval', field: 'frequency_interval' },
      { headerName: 'frequency start time', field: 'frequency_start_time' },
      { headerName: 'frequency end time', field: 'frequency_end_time' },
      { headerName: 'due date time', field: 'due_date_time', minWidth: 200 },
      { headerName: 'start by unit', field: 'start_by_unit' },
      { headerName: 'start by interval', field: 'start_by_interval' },
      { headerName: 'end by interval', field: 'end_by_interval' },
      { headerName: 'use current date', field: 'use_current_date' },
      { headerName: 'active ind p2k', field: 'active_ind_p2k' },
      { headerName: 'start by time', field: 'start_by_time' },
      { headerName: 'end by time', field: 'end_by_time' },
      { headerName: 'batch size', field: 'batch_size' },
      { headerName: 'supercede', field: 'supercede' },
      { headerName: 'dst region code', field: 'dst_region_code' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 100,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public sendGlossSchedulerStatic() {
    this.getGlossScheduler().subscribe((value) => {
      this.http
        .post(localStorage.getItem('gloss_uri') + '/api/schedulerstatic', value)
        .subscribe((message) => {
          this.snackService.showMessage(message.toString());
        });
    });
  }

  public cloneParty(partyRef: string, clientRef: string, newPartyRef: string) {
    return this.clonePartyGQL.mutate({
      party_ref: partyRef,
      client_ref: clientRef,
      new_party_ref: newPartyRef,
      new_client_ref: this.getClientRef(),
    });
  }

  public cloneSwiftParty(
    partyRef: string,
    clientRef: string,
    newPartyRef: string
  ) {
    return this.cloneSwiftPartyGQL.mutate({
      party_ref: partyRef,
      client_ref: clientRef,
      new_party_ref: newPartyRef,
      new_client_ref: this.getClientRef(),
    });
  }

  public cloneClassAssoc(
    partyRef: string,
    clientRef: string,
    newPartyRef: string
  ) {
    return this.cloneClassAssocGQL.mutate({
      party_ref: partyRef,
      client_ref: clientRef,
      new_party_ref: newPartyRef,
      new_client_ref: this.getClientRef(),
    });
  }

  public cloneNettingData(
    partyRef: string,
    clientRef: string,
    newPartyRef: string
  ) {
    return this.cloneNettingDataGQL.mutate({
      party_ref: partyRef,
      client_ref: clientRef,
      new_party_ref: newPartyRef,
      new_client_ref: this.getClientRef(),
    });
  }

  public cloneGlossSchedulerData(clientRef: string) {
    return this.cloneGlossSchedulerDataGQL.mutate({
      client_ref: clientRef,
      new_client_ref: this.getClientRef(),
    });
  }

  public backUpPartyData(partyRef: string) {
    return this.backUpPartyDataGQL.mutate({
      party_ref: partyRef,
      client_ref: this.getClientRef(),
    });
  }

  // Party Audit

  public getGlossPartyAuditByRef(partyRef: string) {
    return this.getGlossPartyAuditByRefGQL
      .watch({
        party_ref: partyRef,
        client_ref: this.getClientRef(),
      })
      .valueChanges.pipe(map((result) => result.data.glossPartyAudit));
  }

  getPartyAuditCols() {
    const cols = [
      { headerName: 'Reference', field: 'party_ref' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
      },
    ];
    return cols;
  }

  public restorePartyData(partyRef: string, versionNo: number) {
    return this.restorePartyDataGQL.mutate({
      party_ref: partyRef,
      client_ref: this.getClientRef(),
      version_no: versionNo,
    });
  }

  // Gloss Spring Service

  public getGlossCodeByClass(codeType: number) {
    return this.http.get(
      localStorage.getItem('gloss_uri') +
      '/api/glosscodes' +
      '?codeType=' +
      codeType,
      this.httpOptions
    );
  }

  public getGlossPartyByType(partyType: string) {
    return this.http.get(
      localStorage.getItem('gloss_uri') +
      '/api/by-type' +
      '?partyType=' +
      partyType.trim(),
      this.httpOptions
    );
  }

  public getGlossDepotAlias(partyRef: string, depotNostroType: string) {
    return this.http.get(
      localStorage.getItem('gloss_uri') +
      '/api/depot-alias-by-ref?partyRef=' +
      partyRef.trim() +
      '&depotNostroType=' +
      depotNostroType,
      this.httpOptions
    );
  }

  // Dpm Party

  public getdpmPartyByType(partyType: string, clientRef: string, componentType: string) {
    return this.getdpmPartyByTypeGQL
      .watch({ party_type: partyType, client_ref: clientRef, component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.dpmPartyByType));
  }

  public getdpmPartyByClient(componentType: string) {
    return this.getdpmPartyByClientGQL
      .watch({ client_ref: this.getClientRef(), component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.dpmPartyByClient));
  }

  public getFirstdpmPartyByClient(componentType: string) {
    return this.firstdpmPartyByClient
      .watch({ client_ref: this.getClientRef(), component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.firstdpmPartyByClient));
  }

  public getdpmPartyByRef(
    companyRef: string,
    partyRef: string,
    componentType: string
  ) {
    return this.getdpmPartyByRefGQL
      .watch({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmParty));
  }

  public getdpmPartyByComponentAndClient(componentType: string, clientRef: string) {
    return this.getdpmPartyByClientGQL
      .watch({
        component_type: componentType,
        client_ref: clientRef
      })
      .valueChanges.pipe(map((result) => result.data.dpmPartyByClient));
  }

  public createdpmParty(data: glossApi.DpmPartyDefInput) {
    data.client_ref = this.getClientRef();
    return this.createdpmPartyGQL.mutate({
      data: data,
    });
  }

  public updatedpmPartyByRef(data: glossApi.DpmPartyDefInput) {
    return this.updatedpmPartyByRefGQL.mutate({
      data: data,
    });
  }

  public deletedpmPartyTree(
    companyRef: string,
    partyRef: string,
    componentType: string
  ) {
    return this.deletedpmPartyTreeGQL.mutate({
      company_ref: companyRef,
      party_ref: partyRef,
      client_ref: this.getClientRef(),
      component_type: componentType,
    });
  }

  public getdpmPartyTypeCols() {
    const cols = [
      { headerName: 'Company Ref', field: 'company_ref' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Type', field: 'party_type' },
      { headerName: 'Inactive', field: 'inactive' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  public senddpmParty(componentType: string, envRef: string) {
    this.getdpmPartyByRef(
      this.getDpmCompanyRef(),
      this.getPartyRef(),
      componentType
    ).subscribe((value) => {
      if (componentType === 'JASDEC') {
        this.http
          .post(localStorage.getItem('jasdec_uri') + '/api/partystatic', value)
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
      if (componentType === 'BOJ') {
        this.http
          .post(localStorage.getItem('boj_uri') + '/api/partystatic', value)
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
    });
    this.savedpmconfigdefpushedGQL
      .mutate({
        client_ref: this.getClientRef(),
        component_type: componentType,
        company_ref: this.getDpmCompanyRef(),
        environment: envRef,
      }).subscribe((value) => {
        if (componentType === 'JASDEC') {
          this.http
            .post(localStorage.getItem('jasdec_uri') + '/api/companyconfig', value.data.savedpmconfigdefpushed)
            .subscribe((message) => {
              this.snackService.showMessage(message.toString());
            });
        }
        if (componentType === 'BOJ') {
          this.http
            .post(localStorage.getItem('boj_uri') + '/api/companyconfig', value.data.savedpmconfigdefpushed)
            .subscribe((message) => {
              this.snackService.showMessage(message.toString());
            });
        }
      });
  }

  // Dpm Party Ext Reference

  public getdpmPartyExtByRef(componentType: string) {
    return this.getdpmPartyExtByRefGQL
      .watch({
        company_ref: this.getDpmCompanyRef(),
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmPartyExtRef));
  }

  public createdpmPartyExtRef(data: glossApi.DpmPartyExtRefInput) {
    data.client_ref = this.getClientRef();
    this.createdpmPartyExtRefGQL.mutate({ data: data }).subscribe((value) => {
      this.snackService.showMessage(
        'Created Party ext ref ' + value.data.createdpmPartyExtRef.party_ref
      );
    });
  }

  public updatedpmPartyExtRef(data: glossApi.DpmPartyExtRefInput) {
    this.updatedpmPartyExtRefGQL
      .mutate({
        data: data,
      })
      .subscribe();
  }

  public deletedpmPartyExtRef(
    companyRef: string,
    partyRef: string,
    componentType: string,
    partyExtRefType: string
  ) {
    this.deletedpmPartyExtRefGQL
      .mutate({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
        party_ext_ref_type: partyExtRefType,
      })
      .subscribe();
  }

  public getdpmPartyExtRefCols() {
    const cols = [
      { headerName: 'Company Ref', field: 'company_ref' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Type', field: 'party_ext_ref_type' },
      { headerName: 'External Reference', field: 'party_ext_ref' },
      { headerName: 'Description', field: 'description' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  // Dpm Party Flag

  public dpmPartyflagByRef(componentType: string) {
    return this.getdpmPartyFlagByRefGQL
      .watch({
        company_ref: this.getDpmCompanyRef(),
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmPartyFlag));
  }

  public createdpmPartyFlag(data: glossApi.DpmPartyFlagInput) {
    data.client_ref = this.getClientRef();
    this.createdpmPartyFlagGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Created Party Flag ' + value.data.createdpmPartyFlag.company_ref
        );
      });
  }

  public updatedpmPartyFlag(data: glossApi.DpmPartyFlagInput) {
    this.updatedpmPartyFlagGQL
      .mutate({
        data: data,
      })
      .subscribe();
  }

  public deletedpmPartyFlag(
    companyRef: string,
    partyRef: string,
    componentType: string,
    flagType: number,
    flagCode: string
  ) {
    this.deletedpmPartyFlagGQL
      .mutate({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
        party_flag_type: flagType,
        party_flag: flagCode,
      })
      .subscribe();
  }

  public getdpmPartyFlagCols() {
    const cols = [
      { headerName: 'Company Ref', field: 'company_ref' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Flag Type', field: 'party_flag_type' },
      { headerName: 'Flag Code', field: 'party_flag' },
      { headerName: 'Description', field: 'description' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  // Dpm Account

  public getdpmAccountByRef(componentType: string) {
    return this.getdpmAccountByRefGQL
      .watch({
        company_ref: this.getDpmCompanyRef(),
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmAccount));
  }

  public createdpmAccount(data: glossApi.DpmAccountInput) {
    data.client_ref = this.getClientRef();
    this.createdpmAccountGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Created Account ' + value.data.createdpmAccount.company_ref
        );
      });
  }

  public updateDpmAccount(data: glossApi.DpmAccountInput) {
    return this.updatedpmAccountGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Update Account ' + value.data.updatedpmAccount.company_ref
        );
      });
  }

  public deleteDpmAccount(
    companyRef: string,
    partyRef: string,
    componentType: string,
    accountNo: string
  ) {
    this.deletedpmAccountGQL
      .mutate({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
        account_no: accountNo,
      })
      .subscribe();
  }

  public getDpmAccountTypeCols() {
    const cols = [
      { headerName: 'Company Ref', field: 'company_ref' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Account No', field: 'account_no' },
      { headerName: 'Account Type', field: 'account_type' },
      { headerName: 'InActive', field: 'inactive' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }
  // Dpm Account Ext Reference

  public getdpmAccountExtByRef(componentType: string) {
    return this.getdpmAccountExtByRefGQL
      .watch({
        company_ref: this.getDpmCompanyRef(),
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmAccountExtRef));
  }

  public createdpmAccountExtRef(data: glossApi.DpmAccountExtRefInput) {
    data.client_ref = this.getClientRef();
    this.createdpmAccountExtRefGQL.mutate({ data: data }).subscribe((value) => {
      this.snackService.showMessage(
        'Created Account ext ref ' +
        value.data.createdpmAccountExtRef.company_ref
      );
    });
  }

  public updatedpmAccountExtRef(data: glossApi.DpmAccountExtRefInput) {
    this.updatedpmAccountExtRefGQL
      .mutate({
        data: data,
      })
      .subscribe();
  }

  public deletedpmAccountExtRef(
    companyRef: string,
    partyRef: string,
    componentType: string,
    account_no: string,
    account_ext_ref_type: string
  ) {
    this.deletedpmAccountExtRefGQL
      .mutate({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
        account_no: account_no,
        account_ext_ref_type: account_ext_ref_type,
      })
      .subscribe();
  }

  public getDpmAccountExtRefCols() {
    const cols = [
      { headerName: 'Company Ref', field: 'company_ref' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Account No', field: 'account_no' },
      { headerName: 'Type', field: 'account_ext_ref_type' },
      { headerName: 'External Reference', field: 'account_ext_ref' },
      { headerName: 'Description', field: 'description' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  // Dpm Account Flag

  public dpmAccountFlagByRef(componentType: string) {
    return this.getdpmAccountFlagByRefGQL
      .watch({
        company_ref: this.getDpmCompanyRef(),
        party_ref: this.getPartyRef(),
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmAccountFlag));
  }

  public createdpmAccountFlag(data: glossApi.DpmAccountFlagInput) {
    data.client_ref = this.getClientRef();
    this.createdpmAccountFlagGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Created Account Flag ' + value.data.createdpmAccountFlag.company_ref
        );
      });
  }

  public updatedpmAccountFlag(data: glossApi.DpmAccountFlagInput) {
    this.updatedpmAccountFlagGQL
      .mutate({
        data: data,
      })
      .subscribe();
  }

  public deletedpmAccountFlag(
    companyRef: string,
    partyRef: string,
    componentType: string,
    account_no: string,
    flagType: number,
    flagCode: string
  ) {
    this.deletedpmAccountFlagGQL
      .mutate({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
        account_no: account_no,
        account_flag_type: flagType,
        account_flag: flagCode,
      })
      .subscribe();
  }

  public getDpmAccountFlagCols() {
    const cols = [
      { headerName: 'Company Ref', field: 'company_ref' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Account No', field: 'account_no' },
      { headerName: 'Flag Type', field: 'account_flag_type' },
      { headerName: 'Flag Code', field: 'account_flag' },
      { headerName: 'Description', field: 'description' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  // Dpm Config Def

  public dpmConfigDefByRef(componentType: string) {
    return this.getdpmConfigDefByRefGQL
      .watch({
        client_ref: this.getClientRef(),
        component_type: componentType,
        company_ref: this.getDpmCompanyRef(),
      })
      .valueChanges.pipe(map((result) => result.data.dpmConfigDef));
  }

  public createdpmConfigDef(data: glossApi.DpmConfigDefInput) {
    data.client_ref = this.getClientRef();
    this.createdpmConfigDefGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Created Dpm Config Def ' + value.data.createdpmConfigDef.company_ref
        );
      });
  }

  public updatedpmConfigDef(data: glossApi.DpmConfigDefInput) {
    this.updatedpmConfigDefGQL
      .mutate({
        data: data,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Updated Config:' + value.data.updatedpmConfigDef.company_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public deletedpmConfigDef(
    componentType: string,
    companyRef: string,
    dpmConfigType: string
  ) {
    this.deletedpmConfigDefGQL
      .mutate({
        client_ref: this.getClientRef(),
        component_type: componentType,
        company_ref: companyRef,
        config_type: dpmConfigType,
      })
      .subscribe();
  }

  public getDpmConfigDefCols() {
    const cols = [
      { headerName: 'Description', field: 'description' },
      { headerName: 'Config value', field: 'config_value' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  // Databases

  public getdatabases(componentType: string) {
    return this.getdatabasesGQL
      .watch({ client_ref: this.getClientRef(), component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.databases));
  }

  public createdatabase(data: glossApi.DatabasesInput) {
    data.client_ref = this.getClientRef();
    this.createdatabaseGQL.mutate({ data: data }).subscribe((value) => {
      this.snackService.showMessage(
        'Created Database ' + value.data.createdatabase
      );
    });
  }

  public updatedatabase(data: glossApi.DatabasesInput) {
    this.updatedatabaseGQL
      .mutate({
        data: data,
      })
      .subscribe();
  }

  public deletedatabase(
    componentType: string,
    databaseType: string,
    databaseCode: string
  ) {
    this.deletedatabaseGQL
      .mutate({
        client_ref: this.getClientRef(),
        component_type: componentType,
        database_type: databaseType,
        database_code: databaseCode,
      })
      .subscribe();
  }

  public getDatabasesCols() {
    const cols = [
      { headerName: 'Database type', field: 'database_type' },
      { headerName: 'Database code', field: 'database_code' },
      { headerName: 'Descr', field: 'descr' },
      { headerName: 'SQL db code', field: 'sql_db_code' },
      { headerName: 'Holiday Id', field: 'holiday_id_p2k' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  public sendDataBasesStatic(componentType: string) {
    this.getdatabases(componentType).subscribe((value) => {
      if (componentType === 'JASDEC') {
        this.http
          .post(
            localStorage.getItem('jasdec_uri') + '/api/databasesstatic',
            value
          )
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
      if (componentType === 'BOJ') {
        this.http
          .post(localStorage.getItem('boj_uri') + '/api/databasesstatic', value)
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
    });
  }

  // Jsdc File Def

  public getjsdcfiledef(componentType: string) {
    return this.getjsdcfiledefGQL
      .watch({ client_ref: this.getClientRef(), component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.JsdcFileDef));
  }

  public createjsdcfiledef(data: glossApi.JsdcFileDefInput) {
    data.client_ref = this.getClientRef();
    this.createjsdcfiledefGQL.mutate({ data: data }).subscribe((value) => {
      this.snackService.showMessage(
        'Created jsdcfiledef ' + value.data.createJsdcFileDef
      );
    });
  }

  public updatejsdcfiledef(data: glossApi.JsdcFileDefInput) {
    this.updatejsdcfiledefGQL
      .mutate({
        data: data,
      })
      .subscribe();
  }

  public deletejsdcfiledef(componentType: string, file_name: string) {
    this.deletejsdcfiledefGQL
      .mutate({
        client_ref: this.getClientRef(),
        component_type: componentType,
        file_name: file_name,
      })
      .subscribe();
  }

  public getjsdcfiledefCols() {
    const cols = [
      { headerName: 'Product group', field: 'product_group' },
      { headerName: 'File Name', field: 'file_name' },
      { headerName: 'Transfer Type', field: 'transfer_type' },
      { headerName: 'File Length', field: 'rec_len' },
      { headerName: 'Data Rec Type Len', field: 'data_rec_type_len' },
      { headerName: 'File Diff', field: 'file_diff' },
      { headerName: 'Proc Status Check', field: 'proc_status_check' },
      { headerName: 'Proc Status Pos', field: 'proc_status_pos' },
      { headerName: 'Proc Status Value', field: 'proc_status_value' },
      { headerName: 'File Proc Type', field: 'file_proc_type' },
      { headerName: 'Multi Basis Date', field: 'multi_basis_date' },
      { headerName: 'Required File Name', field: 'required_file_name' },
      { headerName: 'Db Code', field: 'db_code' },
      { headerName: 'file_desc', field: 'File Description' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  public sendJsdcFileDefStatic(componentType: string, envRef: string) {
    this.savefilesStaticpushed
      .mutate({
        client_ref: this.getClientRef(),
        component_type: componentType,
        environment: envRef,
      })
      .subscribe((value) => {
        if (componentType === 'JASDEC') {
          this.http
            .post(
              localStorage.getItem('jasdec_uri') + '/api/filesstatic',
              value.data.savefilesStaticpushed)
            .subscribe((message) => {
              this.snackService.showMessage(message.toString());
            });
        }
        if (componentType === 'BOJ') {
          this.http
            .post(
              localStorage.getItem('boj_uri') + '/api/filesstatic',
              value.data.savefilesStaticpushed)
            .subscribe((message) => {
              this.snackService.showMessage(message.toString());
            });
        }
      });
  }

  //DPM SCHEDULER

  public getdpmScheduler(componentType: string) {
    return this.getdpmSchedulerGQL
      .watch({ client_ref: this.getClientRef(), component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.dpmScheduler));
  }

  public createdpmScheduler(data: glossApi.DpmSchedulerInput) {
    data.client_ref = this.getClientRef();
    this.createdpmSchedulerGQL.mutate({ data: data }).subscribe((value) => {
      this.snackService.showMessage(
        'Created Event:' + value.data.createdpmScheduler.event_ref
      );
    });
  }

  public updatedpmScheduler(
    componentType: string,
    msgType: number,
    eventRef: string,
    dueDateTime: Date,
    databaseCode: string,
    data: glossApi.DpmSchedulerInput
  ) {
    this.updatedpmSchedulerGQL
      .mutate({
        client_ref: this.getClientRef(),
        component_type: componentType,
        msg_type: msgType,
        event_ref: eventRef,
        due_date_time: dueDateTime,
        database_code: databaseCode,
        data: data,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Updated Event:' + value.data.updatedpmScheduler.event_ref
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public deletedpmScheduler(
    componentType: string,
    msg_type: number,
    event_ref: string,
    due_date_time: Date,
    database_code: string
  ) {
    this.deletedpmSchedulerGQL
      .mutate({
        msg_type: msg_type,
        client_ref: this.getClientRef(),
        component_type: componentType,
        event_ref: event_ref,
        due_date_time: due_date_time,
        database_code: database_code,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Deleted Event:' + value.data.deletedpmScheduler.event_ref
        );
      });
  }

  public getDpmSchedulerCols() {
    const cols = [
      { headerName: 'msg type', field: 'msg_type', minWidth: 100 },
      { headerName: 'event ref', field: 'event_ref', minWidth: 150 },
      { headerName: 'database type', field: 'database_type' },
      { headerName: 'database code', field: 'database_code', minWidth: 100 },
      { headerName: 'sql db code', field: 'sql_db_code' },
      { headerName: 'bus day', field: 'bus_day' },
      { headerName: 'holiday id', field: 'holiday_id' },
      { headerName: 'frequency unit', field: 'frequency_unit' },
      { headerName: 'frequency interval', field: 'frequency_interval' },
      { headerName: 'frequency start time', field: 'frequency_start_time' },
      { headerName: 'frequency end time', field: 'frequency_end_time' },
      { headerName: 'due date time', field: 'due_date_time', minWidth: 200 },
      { headerName: 'start by unit', field: 'start_by_unit' },
      { headerName: 'start by interval', field: 'start_by_interval' },
      { headerName: 'end by interval', field: 'end_by_interval' },
      { headerName: 'use current date', field: 'use_current_date' },
      { headerName: 'active ind p2k', field: 'active_ind_p2k' },
      { headerName: 'start by time', field: 'start_by_time' },
      { headerName: 'end by time', field: 'end_by_time' },
      { headerName: 'batch size', field: 'batch_size' },
      { headerName: 'supercede', field: 'supercede' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 100,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public sendDpmSchedulerStatic(componentType: string) {
    this.getdpmScheduler(componentType).subscribe((value) => {
      if (componentType === 'JASDEC') {
        this.http
          .post(
            localStorage.getItem('jasdec_uri') + '/api/schedulerstatic',
            value
          )
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
      if (componentType === 'BOJ') {
        this.http
          .post(localStorage.getItem('boj_uri') + '/api/schedulerstatic', value)
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
    });
  }

  // Config Def

  public getConfigDefEntries(componentType: string) {
    return this.getConfigDefEntriesGQL
      .watch({ client_ref: this.getClientRef(), component_type: componentType })
      .valueChanges.pipe(map((result) => result.data.configDefEntries));
  }

  public updateConfigDef(
    data: glossApi.ConfigDefInput
  ) {
    this.updateConfigDefGQL
      .mutate({
        data: data,
      })
      .subscribe(
        (value) => {
          this.snackService.showMessage(
            'Updated Config:'
          );
        },
        (error) => {
          this.snackService.showMessage(error.message);
        }
      );
  }

  public sendDPMConfig(componentType: string) {
    this.getConfigDefEntries(componentType).subscribe((value) => {
      if (componentType === 'JASDEC') {
        this.http
          .post(
            localStorage.getItem('jasdec_uri') + '/api/configdefstatic', value)
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
      if (componentType === 'BOJ') {
        this.http
          .post(localStorage.getItem('boj_uri') + '/api/configdefstatic', value)
          .subscribe((message) => {
            this.snackService.showMessage(message.toString());
          });
      }
    });
  }

  public clonedpmParty(
    companyRef: string,
    clientRef: string,
    newCompanyRef: string,
    componentType: string
  ) {
    return this.clonedpmPartyGQL.mutate({
      company_ref: companyRef,
      client_ref: clientRef,
      new_company_ref: newCompanyRef,
      new_client_ref: this.getClientRef(),
      component_type: componentType,
    });
  }

  public cloneDatabases(clientRef: string, componentType: string) {
    return this.clonedatabasesGQL.mutate({
      client_ref: clientRef,
      new_client_ref: this.getClientRef(),
      component_type: componentType,
    });
  }

  public cloneJsdcFileDef(
    clientRef: string,
    productGroup: string,
    componentType: string
  ) {
    return this.clonejsdcfiledefGQL.mutate({
      client_ref: clientRef,
      new_client_ref: this.getClientRef(),
      component_type: componentType,
      product_group: productGroup,
    });
  }

  public cloneDpmSchedulerData(clientRef: string, componentType: string) {
    return this.clonedpmSchedulerDataGQL.mutate({
      client_ref: clientRef,
      new_client_ref: this.getClientRef(),
      component_type: componentType,
    });
  }

  public backupdpmPartyData(
    companyRef: string,
    partyRef: string,
    componentType: string
  ) {
    return this.backUpdpmPartyDataGQL.mutate({
      company_ref: companyRef,
      party_ref: partyRef,
      client_ref: this.getClientRef(),
      component_type: componentType,
    });
  }

  // Party Audit

  public getdpmPartyAuditByRef(
    companyRef: string,
    partyRef: string,
    componentType: string
  ) {
    return this.getdpmPartyAuditByRefGQL
      .watch({
        company_ref: companyRef,
        party_ref: partyRef,
        client_ref: this.getClientRef(),
        component_type: componentType,
      })
      .valueChanges.pipe(map((result) => result.data.dpmPartyAudit));
  }

  getdpmPartyAuditCols() {
    const cols = [
      { headerName: 'Company Reference', field: 'company_ref' },
      { headerName: 'Party Reference', field: 'party_ref' },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
      },
    ];
    return cols;
  }

  public restoredpmPartyData(
    companyRef: string,
    partyRef: string,
    versionNo: number,
    componentType: string
  ) {
    return this.restoredpmPartyDataGQL.mutate({
      company_ref: companyRef,
      party_ref: partyRef,
      client_ref: this.getClientRef(),
      component_type: componentType,
      version_no: versionNo,
    });
  }

  public getDpmCodeByClass(componentType: string, classValue: number) {
    if (componentType === 'JASDEC')
      return this.http.get(
        localStorage.getItem('jasdec_uri') +
        '/api/dpmcodes' +
        '?classValue=' +
        classValue,
        this.httpOptions
      );
    else
      return this.http.get(
        localStorage.getItem('boj_uri') +
        '/api/dpmcodes' +
        '?classValue=' +
        classValue,
        this.httpOptions
      );
  }

  public getDpmClassByClass(classValue: number) {
    // if (componentType === 'JASDEC')
    return this.http.get(
      localStorage.getItem('jasdec_uri') +
      '/api/dpmclasses' +
      '?classValue=' +
      classValue,
      this.httpOptions
    );
    /*else
      return this.http.get(
        localStorage.getItem('boj_uri') +
          '/api/dpmcodes' +
          '?classValue=' +
          classValue,
        this.httpOptions
      );*/
  }
  // TE

  public getTeTemplates() {
    return this.getTeTemplatesGQL
      .watch({})
      .valueChanges.pipe(map((result) => result.data.teTemplates));
  }

  public createTeTemplate(data: glossApi.TeTemplateInput) {
    this.createTeTemplateGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Created TE Template ' + value.data.createTETemplate.template_type
        );
      });
  }

  public updateTeTemplate(data: glossApi.TeTemplateInput) {
    this.updateTeTemplateGQL
      .mutate({
        data: data,
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Updated TE Template ' + value.data.updateTETemplate.template_type
        );
      });
  }

  public deleteTeTemplate(
    componentType: string,
    templateType: string
  ) {
    this.deleteTeTemplateGQL
      .mutate({
        component_type: componentType,
        template_type: templateType
      })
      .subscribe((value) => {
        this.snackService.showMessage(
          'Deleted TE Template ' + value.data.deleteTETemplate.template_type
        );
      });
  }

  public getTeTemplateCols() {
    const cols = [
      { headerName: 'component_type', field: 'component_type' },
      { headerName: 'Template Name', field: 'template_type' },
      { headerName: 'Template Data', field: 'template_data' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

}