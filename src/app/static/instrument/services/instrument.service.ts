import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import * as instrApi from '../../../services/glossapi.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  constructor(
        private readonly instrAll: instrApi.InstrumentGQL,
        private readonly getInstrByRef: instrApi.InstrByRefGQL,
  ){
    this.isInstrTypeSelected = false;
  }

  instrType: string;
  instrRef: string;
  isInstrTypeSelected: boolean;

  public cloneInstrument(oldInstrRef: string, newInstrRef: string) {

  }

  public InstrumentAll(){
    return this.instrAll.watch().valueChanges.pipe(map(result => result.data.instr));
  }

  public instrByRef(Ref: string) {
    return this.getInstrByRef.watch({ instrRef: Ref}).valueChanges.pipe(map(result => result.data.instrByRef));
  }
  

  public getAccuralCols() {
    const cols = [
      { headerName: 'Type', field: 'assoc_type' },
      { headerName: 'Reference', field: 'assoc_instr_ref' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Assoc Ref', field: 'instr_ref' },
      { headerName: 'User', field: 'user_def' },
      { headerName: 'Version', field: 'version_no' },
      { headerName: 'Date', field: 'version_date' },
      { headerName: 'User', field: 'version_user' },
    ];
    return cols;
  }

  public getFlagCols() {
    const cols =
      [
        { headerName: 'Instr Ref', field: 'instr_ref', checkboxSelection: true },
        { headerName: 'Flag Type', field: 'flag_type' },
        { headerName: 'Flag Code', field: 'flag_code' },
        { headerName: 'User Defined', field: 'user_defined' },
        { headerName: 'Description', field: 'description' },
        { headerName: 'Version', field: 'version_no' },
      ];
    return cols;
  }

  public getNarrativeCols() {
    const cols =
      [{ headerName: 'Reference', field: 'instr_ref' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Type', field: 'narr_type' },
      { headerName: 'Narrative', field: 'narrative' },
      { headerName: 'User Defined', field: 'user_def' },
      { headerName: 'Date', field: 'version_date' },
      { headerName: 'Version', field: 'version_no' },
      { headerName: 'User', field: 'version_user' }
      ];
    return cols;
  }
  public getClassCols() {
    const cols = [
      { headerName: 'Instr Ref', field: 'instr_ref' },
      { headerName: 'Class Code', field: 'class_code' },
      { headerName: 'Class Type', field: 'class_type' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Defined', field: 'user_def' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }
  public getInstrCols() {
    const cols = [
      { headerName: 'Instr Ref', field: 'instr_ref' },
      { headerName: 'Instrument Type', field: 'instr_type' },
      { headerName: 'Reference Type', field: 'instr_ref_type' },
      { headerName: 'Reference', field: 'instr_ref' },
      { headerName: 'User Defined', field: 'user_def' },
      { headerName: 'Description', field: 'description' },

    ];
    return cols;
  }

  public getExtCols() {
    const cols = [
      { headerName: 'Instr Type', field: 'instr_ref' },
      { headerName: 'Type', field: 'instr_ext_ref_type' },
      { headerName: 'External Reference', field: 'instr_ext_ref' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User Defined', field: 'user_def' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }

  public getSsiCols() {
    const cols =
      [
        { headerName: 'Account Name', field: 'account_name' },
        { headerName: 'Instr Reference', field: 'instr_ref' },
        { headerName: 'Account No', field: 'account_no' },
        { headerName: 'Active', field: 'active_ind' },
        { headerName: 'Comms Service', field: 'comms_service' },
        { headerName: 'DACC Reference', field: 'dacc_ref' },
        { headerName: 'Depo Referenece', field: 'depo_ref' },
        { headerName: 'Depo Alias', field: 'depot_alias' },
        { headerName: 'Depo Description', field: 'depot_descr' },
        { headerName: 'Depo Type', field: 'depot_type' },
        { headerName: 'Description', field: 'description' },
        { headerName: 'User Definition', field: 'user_def' },
      ];
    return cols;
  }
}


