import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type BojEnvironment = {
  __typename?: 'BojEnvironment';
  active: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: Scalars['String'];
  sst_bojapi_url: Scalars['String'];
};

export type ClassAssoc = {
  __typename?: 'ClassAssoc';
  applied: Scalars['Boolean'];
  class_1: Scalars['Int'];
  class_2: Scalars['Int'];
  class_assoc_code: Scalars['String'];
  client_ref: Scalars['String'];
  code_1: Scalars['String'];
  code_2: Array<Scalars['String']>;
  code_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type ClassAssocInput = {
  applied: Scalars['Boolean'];
  class_1: Scalars['Int'];
  class_2: Scalars['Int'];
  class_assoc_code: Scalars['String'];
  client_ref: Scalars['String'];
  code_1: Scalars['String'];
  code_2: Array<Scalars['String']>;
  code_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Clients = {
  __typename?: 'Clients';
  client_ref: Scalars['String'];
};

export type ConfigDef = {
  __typename?: 'ConfigDef';
  client_ref: Scalars['String'];
  component: Scalars['String'];
  component_data: Array<Scalars['String']>;
  component_type: Scalars['String'];
  config_ref: Scalars['String'];
  config_type: Scalars['String'];
  database_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type ConfigDefInput = {
  client_ref: Scalars['String'];
  component: Scalars['String'];
  component_data: Array<Scalars['String']>;
  component_type: Scalars['String'];
  config_ref: Scalars['String'];
  config_type: Scalars['String'];
  database_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Databases = {
  __typename?: 'Databases';
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  descr: Scalars['String'];
  holiday_id_p2k: Scalars['String'];
  sql_db_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DatabasesInput = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  descr: Scalars['String'];
  holiday_id_p2k: Scalars['String'];
  sql_db_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccount = {
  __typename?: 'DpmAccount';
  account_no: Scalars['String'];
  account_type: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountExtRef = {
  __typename?: 'DpmAccountExtRef';
  account_ext_ref: Scalars['String'];
  account_ext_ref_type: Scalars['String'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountExtRefInput = {
  account_ext_ref: Scalars['String'];
  account_ext_ref_type: Scalars['String'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountFlag = {
  __typename?: 'DpmAccountFlag';
  account_flag: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountFlagInput = {
  account_flag: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountInput = {
  account_no: Scalars['String'];
  account_type: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmConfigDef = {
  __typename?: 'DpmConfigDef';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  config_type: Scalars['String'];
  config_value: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmConfigDefInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  config_type: Scalars['String'];
  config_value: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmParty = {
  __typename?: 'DpmParty';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  dpm_account_def: Array<DpmAccount>;
  dpm_account_ext_ref: Array<DpmAccountExtRef>;
  dpm_account_flag: Array<DpmAccountFlag>;
  dpm_party_ext_ref: Array<DpmPartyExtRef>;
  dpm_party_flag: Array<DpmPartyFlag>;
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyAudit = {
  __typename?: 'DpmPartyAudit';
  account_data: Scalars['String'];
  account_ext_ref_data: Scalars['String'];
  account_flag_data: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  dpm_config_data: Scalars['String'];
  party_data: Scalars['String'];
  party_ext_ref_data: Scalars['String'];
  party_flag_data: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyDef = {
  __typename?: 'DpmPartyDef';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyDefInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyExtRef = {
  __typename?: 'DpmPartyExtRef';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyExtRefInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyFlag = {
  __typename?: 'DpmPartyFlag';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_flag: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyFlagInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_flag: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmScheduler = {
  __typename?: 'DpmScheduler';
  active_ind_p2k?: Maybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  due_date_time?: Maybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmSchedulerInput = {
  active_ind_p2k?: InputMaybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  due_date_time?: InputMaybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type GlossEnvironment = {
  __typename?: 'GlossEnvironment';
  active: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: Scalars['String'];
  sst_glossapi_url: Scalars['String'];
};

export type GlossScheduler = {
  __typename?: 'GlossScheduler';
  active_ind_p2k?: Maybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  dst_region_code?: Maybe<Scalars['String']>;
  due_date_time?: Maybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type GlossSchedulerInput = {
  active_ind_p2k?: InputMaybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  dst_region_code?: InputMaybe<Scalars['String']>;
  due_date_time?: InputMaybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type JasdecEnvironment = {
  __typename?: 'JasdecEnvironment';
  active: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: Scalars['String'];
  sst_jasdecapi_url: Scalars['String'];
};

export type JsdcFileDef = {
  __typename?: 'JsdcFileDef';
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  data_rec_type_len: Scalars['Int'];
  db_code?: Maybe<Scalars['String']>;
  file_desc: Scalars['String'];
  file_diff: Scalars['String'];
  file_name: Scalars['String'];
  file_proc_type: Scalars['String'];
  multi_basis_date: Scalars['String'];
  proc_status_check: Scalars['String'];
  proc_status_pos?: Maybe<Scalars['Int']>;
  proc_status_value?: Maybe<Scalars['String']>;
  product_group: Scalars['String'];
  rec_len: Scalars['Int'];
  required_file_name?: Maybe<Scalars['String']>;
  transfer_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type JsdcFileDefInput = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  data_rec_type_len: Scalars['Int'];
  db_code?: InputMaybe<Scalars['String']>;
  file_desc: Scalars['String'];
  file_diff: Scalars['String'];
  file_name: Scalars['String'];
  file_proc_type: Scalars['String'];
  multi_basis_date: Scalars['String'];
  proc_status_check: Scalars['String'];
  proc_status_pos?: InputMaybe<Scalars['Int']>;
  proc_status_value?: InputMaybe<Scalars['String']>;
  product_group: Scalars['String'];
  rec_len: Scalars['Int'];
  required_file_name?: InputMaybe<Scalars['String']>;
  transfer_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type KanbanInputs = {
  Id?: InputMaybe<Scalars['Int']>;
  assignee?: InputMaybe<Scalars['String']>;
  classname?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  dependencies?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['Date']>;
  estimate?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  party_ref?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['String']>;
  rankid?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['Date']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  task_id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  password: Scalars['String'];
  userid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  backUpDpmPartyData: DpmPartyAudit;
  backUpPartyData: PartyAudit;
  cloneClassAssoc: Scalars['Boolean'];
  cloneNettingData: Scalars['Boolean'];
  cloneParty: Scalars['Boolean'];
  cloneSwiftParty: Scalars['Boolean'];
  clonedatabases: Scalars['Boolean'];
  clonedpmParty: Scalars['Boolean'];
  clonedpmScheduler: Scalars['Boolean'];
  cloneglossScheduler: Scalars['Boolean'];
  clonejsdcfiledef: Scalars['Boolean'];
  createClassAssoc: ClassAssoc;
  createJsdcFileDef: JsdcFileDef;
  createKanbanPriority: Kb_Priority;
  createKanbanStatus: Kb_Status;
  createKanbanType: Kb_Type;
  createNetting: Netting;
  createParty: Party;
  createPartyAddress: PartyAddress;
  createPartyAssoc: PartyAssoc;
  createPartyClassification: PartyClassification;
  createPartyDate: PartyDate;
  createPartyExtRef: PartyExtRef;
  createPartyFlag: PartyFlag;
  createPartyInstrument: PartyInstr;
  createPartyNarrative: PartyNarrative;
  createPartySSI: PartySsi;
  createPartySwift: PartySwift;
  createPartyTemplate: PartyTemplate;
  createSubTask: SubTasks;
  createTETemplate: TeTemplate;
  createTask: Kb_Task;
  createdatabase: Databases;
  createdpmAccount: DpmAccount;
  createdpmAccountExtRef: DpmAccountExtRef;
  createdpmAccountFlag: DpmAccountFlag;
  createdpmConfigDef: DpmConfigDef;
  createdpmParty: DpmPartyDef;
  createdpmPartyExtRef: DpmPartyExtRef;
  createdpmPartyFlag: DpmPartyFlag;
  createdpmScheduler: DpmScheduler;
  createglossScheduler: GlossScheduler;
  deleteClassAssoc: ClassAssoc;
  deleteJsdcFileDef: JsdcFileDef;
  deleteKanbanPriority: Kb_Priority;
  deleteKanbanStatus: Kb_Status;
  deleteKanbanSubTask: SubTasks;
  deleteKanbanType: Kb_Type;
  deleteNetting: Netting;
  deletePartyAddress: PartyAddress;
  deletePartyAssoc: PartyAssoc;
  deletePartyClassification: PartyClassification;
  deletePartyDate: PartyDate;
  deletePartyExtRef: PartyExtRef;
  deletePartyFlag: PartyFlag;
  deletePartyInstrument: PartyInstr;
  deletePartyNarrative: PartyNarrative;
  deletePartySSI: PartySsi;
  deletePartySwift: PartySwift;
  deletePartyTemplate: PartyTemplate;
  deletePartyTree: Party;
  deleteTETemplate: TeTemplate;
  deleteTask: Kb_Task;
  deleteUser: User;
  deletedatabase: Databases;
  deletedpmAccount: DpmAccount;
  deletedpmAccountExtRef: DpmAccountExtRef;
  deletedpmAccountFlag: DpmAccountFlag;
  deletedpmConfigDef: DpmConfigDef;
  deletedpmPartyExtRef: DpmPartyExtRef;
  deletedpmPartyFlag: DpmPartyFlag;
  deletedpmPartyTree: DpmPartyDef;
  deletedpmScheduler: DpmScheduler;
  deleteglossScheduler: GlossScheduler;
  resetPassword: User;
  restoreDpmPartyData: DpmPartyDef;
  restorePartyData: Party;
  saveClassAssocStaticpushedToGloss: Array<ClassAssoc>;
  saveNettingStaticpushedToGloss: Array<Netting>;
  savePartyStaticpushedToGloss: Party;
  savedpmconfigdefpushed: Array<DpmConfigDef>;
  savefilesStaticpushed: Array<JsdcFileDef>;
  signup: User;
  updateClassAssoc: ClassAssoc;
  updateConfigDef: ConfigDef;
  updateJsdcFileDef: JsdcFileDef;
  updateKanbanPriority: Kb_Priority;
  updateKanbanStatus: Kb_Status;
  updateKanbanType: Kb_Type;
  updateNetting: Netting;
  updateParty: Party;
  updatePartyAddress: PartyAddress;
  updatePartyAssoc: PartyAssoc;
  updatePartyClassification: PartyClassification;
  updatePartyDate: PartyDate;
  updatePartyExtRef: PartyExtRef;
  updatePartyFlag: PartyFlag;
  updatePartyInstrument: PartyInstr;
  updatePartyNarrative: PartyNarrative;
  updatePartySSI: PartySsi;
  updatePartySwift: PartySwift;
  updatePartyTemplate: PartyTemplate;
  updateTETemplate: TeTemplate;
  updateTask: Kb_Task;
  updateTaskDependency: Kb_Task;
  updateTaskParentId: Kb_Task;
  updatedatabase: Databases;
  updatedpmAccount: DpmAccount;
  updatedpmAccountExtRef: DpmAccountExtRef;
  updatedpmAccountFlag: DpmAccountFlag;
  updatedpmConfigDef: DpmConfigDef;
  updatedpmParty: DpmPartyDef;
  updatedpmPartyExtRef: DpmPartyExtRef;
  updatedpmPartyFlag: DpmPartyFlag;
  updatedpmScheduler: DpmScheduler;
  updateglossScheduler: GlossScheduler;
};


export type MutationBackUpDpmPartyDataArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationBackUpPartyDataArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationCloneClassAssocArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationCloneNettingDataArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationClonePartyArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationCloneSwiftPartyArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationClonedatabasesArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
};


export type MutationClonedpmPartyArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_company_ref: Scalars['String'];
};


export type MutationClonedpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
};


export type MutationCloneglossSchedulerArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
};


export type MutationClonejsdcfiledefArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
  product_group: Scalars['String'];
};


export type MutationCreateClassAssocArgs = {
  data: ClassAssocInput;
};


export type MutationCreateJsdcFileDefArgs = {
  data: JsdcFileDefInput;
};


export type MutationCreateKanbanPriorityArgs = {
  kanbanData: TaskPriorityInputs;
};


export type MutationCreateKanbanStatusArgs = {
  data: TaskStatusInputs;
};


export type MutationCreateKanbanTypeArgs = {
  data: TaskStatusInputs;
};


export type MutationCreateNettingArgs = {
  data: NettingInput;
};


export type MutationCreatePartyArgs = {
  data: PartyInput;
};


export type MutationCreatePartyAddressArgs = {
  data: PartyAddressInput;
};


export type MutationCreatePartyAssocArgs = {
  data: PartyAssocInput;
};


export type MutationCreatePartyClassificationArgs = {
  data: PartyClassInput;
};


export type MutationCreatePartyDateArgs = {
  data: PartyDateInput;
};


export type MutationCreatePartyExtRefArgs = {
  data: PartyExtRefInput;
};


export type MutationCreatePartyFlagArgs = {
  data: PartyFlagInput;
};


export type MutationCreatePartyInstrumentArgs = {
  data: PartyInstrInput;
};


export type MutationCreatePartyNarrativeArgs = {
  data: PartyNarrativeInput;
};


export type MutationCreatePartySsiArgs = {
  data: PartySsiInput;
};


export type MutationCreatePartySwiftArgs = {
  data: PartySwiftInput;
};


export type MutationCreatePartyTemplateArgs = {
  data: PartyTemplateInput;
};


export type MutationCreateSubTaskArgs = {
  data: SubTaskInputs;
};


export type MutationCreateTeTemplateArgs = {
  data: TeTemplateInput;
};


export type MutationCreateTaskArgs = {
  data: KanbanInputs;
};


export type MutationCreatedatabaseArgs = {
  data: DatabasesInput;
};


export type MutationCreatedpmAccountArgs = {
  data: DpmAccountInput;
};


export type MutationCreatedpmAccountExtRefArgs = {
  data: DpmAccountExtRefInput;
};


export type MutationCreatedpmAccountFlagArgs = {
  data: DpmAccountFlagInput;
};


export type MutationCreatedpmConfigDefArgs = {
  data: DpmConfigDefInput;
};


export type MutationCreatedpmPartyArgs = {
  data: DpmPartyDefInput;
};


export type MutationCreatedpmPartyExtRefArgs = {
  data: DpmPartyExtRefInput;
};


export type MutationCreatedpmPartyFlagArgs = {
  data: DpmPartyFlagInput;
};


export type MutationCreatedpmSchedulerArgs = {
  data: DpmSchedulerInput;
};


export type MutationCreateglossSchedulerArgs = {
  data: GlossSchedulerInput;
};


export type MutationDeleteClassAssocArgs = {
  class_1: Scalars['Int'];
  class_2: Scalars['Int'];
  class_assoc_code: Scalars['String'];
  client_ref: Scalars['String'];
  code_1: Scalars['String'];
  code_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeleteJsdcFileDefArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  file_name: Scalars['String'];
};


export type MutationDeleteKanbanPriorityArgs = {
  priority: Scalars['String'];
};


export type MutationDeleteKanbanStatusArgs = {
  status: Scalars['String'];
};


export type MutationDeleteKanbanSubTaskArgs = {
  subid: Scalars['String'];
  task_id: Scalars['String'];
};


export type MutationDeleteKanbanTypeArgs = {
  type: Scalars['String'];
};


export type MutationDeleteNettingArgs = {
  client_ref: Scalars['String'];
  net_driver: Scalars['String'];
  party_ref: Scalars['String'];
  settle_code: Scalars['String'];
  transaction_type: Scalars['String'];
};


export type MutationDeletePartyAddressArgs = {
  addr_type: Scalars['String'];
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyAssocArgs = {
  assoc_type: Scalars['String'];
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyClassificationArgs = {
  class_type: Scalars['String'];
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyDateArgs = {
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyExtRefArgs = {
  client_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyFlagArgs = {
  client_ref: Scalars['String'];
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyInstrumentArgs = {
  client_ref: Scalars['String'];
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyNarrativeArgs = {
  client_ref: Scalars['String'];
  narr_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartySsiArgs = {
  client_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartySwiftArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyTemplateArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyTreeArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeleteTeTemplateArgs = {
  component_type: Scalars['String'];
  template_type: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  task_id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userid: Scalars['String'];
};


export type MutationDeletedatabaseArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
};


export type MutationDeletedpmAccountArgs = {
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmAccountExtRefArgs = {
  account_ext_ref_type: Scalars['String'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmAccountFlagArgs = {
  account_flag: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmConfigDefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  config_type: Scalars['String'];
};


export type MutationDeletedpmPartyExtRefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmPartyFlagArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_flag: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmPartyTreeArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};


export type MutationDeleteglossSchedulerArgs = {
  client_ref: Scalars['String'];
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};


export type MutationResetPasswordArgs = {
  data: LoginInput;
};


export type MutationRestoreDpmPartyDataArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_no: Scalars['Int'];
};


export type MutationRestorePartyDataArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
  version_no: Scalars['Int'];
};


export type MutationSaveClassAssocStaticpushedToGlossArgs = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationSaveNettingStaticpushedToGlossArgs = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationSavePartyStaticpushedToGlossArgs = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationSavedpmconfigdefpushedArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  environment: Scalars['String'];
};


export type MutationSavefilesStaticpushedArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  environment: Scalars['String'];
};


export type MutationSignupArgs = {
  data: UserInput;
};


export type MutationUpdateClassAssocArgs = {
  data: ClassAssocInput;
};


export type MutationUpdateConfigDefArgs = {
  data: ConfigDefInput;
};


export type MutationUpdateJsdcFileDefArgs = {
  data: JsdcFileDefInput;
};


export type MutationUpdateKanbanPriorityArgs = {
  kanbanData: TaskPriorityInputs;
  priority: Scalars['String'];
};


export type MutationUpdateKanbanStatusArgs = {
  id: Scalars['String'];
  newData: TaskStatusInputs;
};


export type MutationUpdateKanbanTypeArgs = {
  newData: TaskStatusInputs;
  type: Scalars['String'];
};


export type MutationUpdateNettingArgs = {
  data: NettingInput;
};


export type MutationUpdatePartyArgs = {
  data: PartyInput;
};


export type MutationUpdatePartyAddressArgs = {
  data: PartyAddressInput;
};


export type MutationUpdatePartyAssocArgs = {
  data: PartyAssocInput;
};


export type MutationUpdatePartyClassificationArgs = {
  data: PartyClassInput;
};


export type MutationUpdatePartyDateArgs = {
  data: PartyDateInput;
};


export type MutationUpdatePartyExtRefArgs = {
  data: PartyExtRefInput;
};


export type MutationUpdatePartyFlagArgs = {
  data: PartyFlagInput;
};


export type MutationUpdatePartyInstrumentArgs = {
  data: PartyInstrInput;
};


export type MutationUpdatePartyNarrativeArgs = {
  data: PartyNarrativeInput;
};


export type MutationUpdatePartySsiArgs = {
  data: PartySsiInput;
};


export type MutationUpdatePartySwiftArgs = {
  data: PartySwiftInput;
};


export type MutationUpdatePartyTemplateArgs = {
  data: PartyTemplateInput;
};


export type MutationUpdateTeTemplateArgs = {
  data: TeTemplateInput;
};


export type MutationUpdateTaskArgs = {
  newData: KanbanInputs;
  task_id: Scalars['String'];
};


export type MutationUpdateTaskDependencyArgs = {
  dependency: Scalars['String'];
  task_id: Scalars['String'];
};


export type MutationUpdateTaskParentIdArgs = {
  parentId: Scalars['Int'];
  task_id: Scalars['String'];
};


export type MutationUpdatedatabaseArgs = {
  data: DatabasesInput;
};


export type MutationUpdatedpmAccountArgs = {
  data: DpmAccountInput;
};


export type MutationUpdatedpmAccountExtRefArgs = {
  data: DpmAccountExtRefInput;
};


export type MutationUpdatedpmAccountFlagArgs = {
  data: DpmAccountFlagInput;
};


export type MutationUpdatedpmConfigDefArgs = {
  data: DpmConfigDefInput;
};


export type MutationUpdatedpmPartyArgs = {
  data: DpmPartyDefInput;
};


export type MutationUpdatedpmPartyExtRefArgs = {
  data: DpmPartyExtRefInput;
};


export type MutationUpdatedpmPartyFlagArgs = {
  data: DpmPartyFlagInput;
};


export type MutationUpdatedpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  data: DpmSchedulerInput;
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};


export type MutationUpdateglossSchedulerArgs = {
  client_ref: Scalars['String'];
  data: GlossSchedulerInput;
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};

export type Netting = {
  __typename?: 'Netting';
  buy_and_sell_flag: Scalars['String'];
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
  end_date_type: Scalars['String'];
  end_offset_code: Scalars['String'];
  end_offset_ind: Scalars['String'];
  late_rule: Scalars['String'];
  market_party: Scalars['String'];
  net_book: Scalars['String'];
  net_cash_when_zero_stock: Scalars['String'];
  net_driver: Scalars['String'];
  net_party_ref: Scalars['String'];
  net_primary: Scalars['String'];
  net_schedule_code: Scalars['String'];
  net_secondary: Scalars['String'];
  operation_type: Scalars['String'];
  override_net_book: Scalars['String'];
  party_ref: Scalars['String'];
  primary_comp_alias: Scalars['String'];
  primary_comp_service: Scalars['String'];
  primary_depot_type: Scalars['String'];
  primary_instr: Scalars['String'];
  primary_party_ref: Scalars['String'];
  primary_secp_alias: Scalars['String'];
  primary_secp_service: Scalars['String'];
  secondary_comp_alias: Scalars['String'];
  secondary_comp_service: Scalars['String'];
  secondary_depot_type: Scalars['String'];
  secondary_party: Scalars['String'];
  secondary_party_ref: Scalars['String'];
  secondary_secp_alias: Scalars['String'];
  secondary_secp_service: Scalars['String'];
  settle_code: Scalars['String'];
  settle_instr: Scalars['String'];
  settle_terms: Scalars['String'];
  split_buy_sell: Scalars['String'];
  start_date_type: Scalars['String'];
  start_offset_code: Scalars['String'];
  start_offset_ind: Scalars['String'];
  trade_group: Scalars['Int'];
  transaction_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type NettingInput = {
  buy_and_sell_flag: Scalars['String'];
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
  end_date_type: Scalars['String'];
  end_offset_code: Scalars['String'];
  end_offset_ind: Scalars['String'];
  late_rule: Scalars['String'];
  market_party: Scalars['String'];
  net_book: Scalars['String'];
  net_cash_when_zero_stock: Scalars['String'];
  net_driver: Scalars['String'];
  net_party_ref: Scalars['String'];
  net_primary: Scalars['String'];
  net_schedule_code: Scalars['String'];
  net_secondary: Scalars['String'];
  operation_type: Scalars['String'];
  override_net_book: Scalars['String'];
  party_ref: Scalars['String'];
  primary_comp_alias: Scalars['String'];
  primary_comp_service: Scalars['String'];
  primary_depot_type: Scalars['String'];
  primary_instr: Scalars['String'];
  primary_party_ref: Scalars['String'];
  primary_secp_alias: Scalars['String'];
  primary_secp_service: Scalars['String'];
  secondary_comp_alias: Scalars['String'];
  secondary_comp_service: Scalars['String'];
  secondary_depot_type: Scalars['String'];
  secondary_party: Scalars['String'];
  secondary_party_ref: Scalars['String'];
  secondary_secp_alias: Scalars['String'];
  secondary_secp_service: Scalars['String'];
  settle_code: Scalars['String'];
  settle_instr: Scalars['String'];
  settle_terms: Scalars['String'];
  split_buy_sell: Scalars['String'];
  start_date_type: Scalars['String'];
  start_offset_code: Scalars['String'];
  start_offset_ind: Scalars['String'];
  trade_group: Scalars['Int'];
  transaction_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Party = {
  __typename?: 'Party';
  active_ind: Scalars['String'];
  client_ref: Scalars['String'];
  has_netting_config: Scalars['String'];
  has_swift_config: Scalars['String'];
  party_addr: Array<PartyAddress>;
  party_assoc: Array<PartyAssoc>;
  party_class_assoc: Array<ClassAssoc>;
  party_classification: Array<PartyClassification>;
  party_date: Array<PartyDate>;
  party_ext_ref: Array<PartyExtRef>;
  party_extra_long_name: Scalars['String'];
  party_flag: Array<PartyFlag>;
  party_instr: Array<PartyInstr>;
  party_long_name: Scalars['String'];
  party_narrative: Array<PartyNarrative>;
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  party_ssi: Array<PartySsi>;
  party_template: Array<PartyTemplate>;
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAddress = {
  __typename?: 'PartyAddress';
  addr_line1: Scalars['String'];
  addr_line2: Scalars['String'];
  addr_line3: Scalars['String'];
  addr_line4: Scalars['String'];
  addr_line5: Scalars['String'];
  addr_line6: Scalars['String'];
  addr_type: Scalars['String'];
  client_ref: Scalars['String'];
  contact_name: Scalars['String'];
  contact_title: Scalars['String'];
  email: Scalars['String'];
  fax_no: Scalars['String'];
  int_dial_code: Scalars['String'];
  party_ref: Scalars['String'];
  phone_no: Scalars['String'];
  post_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAddressInput = {
  addr_line1: Scalars['String'];
  addr_line2: Scalars['String'];
  addr_line3: Scalars['String'];
  addr_line4: Scalars['String'];
  addr_line5: Scalars['String'];
  addr_line6: Scalars['String'];
  addr_type: Scalars['String'];
  client_ref: Scalars['String'];
  contact_name: Scalars['String'];
  contact_title: Scalars['String'];
  email: Scalars['String'];
  fax_no: Scalars['String'];
  int_dial_code: Scalars['String'];
  party_ref: Scalars['String'];
  phone_no: Scalars['String'];
  post_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAssoc = {
  __typename?: 'PartyAssoc';
  assoc_party_ref: Scalars['String'];
  assoc_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAssocInput = {
  assoc_party_ref: Scalars['String'];
  assoc_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAudit = {
  __typename?: 'PartyAudit';
  client_ref: Scalars['String'];
  party_address_data: Scalars['String'];
  party_assoc_data: Scalars['String'];
  party_class_assoc_data: Scalars['String'];
  party_classification_data: Scalars['String'];
  party_data: Scalars['String'];
  party_date_data: Scalars['String'];
  party_ext_ref_data: Scalars['String'];
  party_flag_data: Scalars['String'];
  party_instr_data: Scalars['String'];
  party_narrative_data: Scalars['String'];
  party_netting_data: Scalars['String'];
  party_ref: Scalars['String'];
  party_ssi_data: Scalars['String'];
  party_template_data: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyClassInput = {
  class_code: Scalars['String'];
  class_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyClassification = {
  __typename?: 'PartyClassification';
  class_code: Scalars['String'];
  class_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyDate = {
  __typename?: 'PartyDate';
  client_ref: Scalars['String'];
  date: Scalars['String'];
  date_type: Scalars['String'];
  party_ref: Scalars['String'];
  time: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyDateInput = {
  client_ref: Scalars['String'];
  date: Scalars['String'];
  date_type: Scalars['String'];
  party_ref: Scalars['String'];
  time: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyExtRef = {
  __typename?: 'PartyExtRef';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyExtRefInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyFlag = {
  __typename?: 'PartyFlag';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyFlagInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInput = {
  active_ind: Scalars['String'];
  client_ref: Scalars['String'];
  has_netting_config: Scalars['String'];
  has_swift_config: Scalars['String'];
  party_extra_long_name: Scalars['String'];
  party_long_name: Scalars['String'];
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInstr = {
  __typename?: 'PartyInstr';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInstrInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyNarrative = {
  __typename?: 'PartyNarrative';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  narr_type: Scalars['String'];
  narrative: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyNarrativeInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  narr_type: Scalars['String'];
  narrative: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySsi = {
  __typename?: 'PartySSI';
  account_name: Scalars['String'];
  account_no: Scalars['String'];
  active_ind: Scalars['String'];
  ccy: Scalars['String'];
  client_ref: Scalars['String'];
  comms_service: Scalars['String'];
  dacc_ref: Scalars['String'];
  depo_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  depot_descr: Scalars['String'];
  depot_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySsiInput = {
  account_name: Scalars['String'];
  account_no: Scalars['String'];
  active_ind: Scalars['String'];
  ccy: Scalars['String'];
  client_ref: Scalars['String'];
  comms_service: Scalars['String'];
  dacc_ref: Scalars['String'];
  depo_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  depot_descr: Scalars['String'];
  depot_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySwift = {
  __typename?: 'PartySwift';
  branch_code: Scalars['String'];
  channel: Scalars['String'];
  client_ref: Scalars['String'];
  company_name: Scalars['String'];
  host: Scalars['String'];
  incoming_queue: Scalars['String'];
  logical_term_id: Array<Scalars['String']>;
  outgoing_queue: Scalars['String'];
  party_ref: Scalars['String'];
  port_number: Scalars['Int'];
  queue_mgr: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySwiftInput = {
  branch_code: Scalars['String'];
  channel: Scalars['String'];
  client_ref: Scalars['String'];
  company_name: Scalars['String'];
  host: Scalars['String'];
  incoming_queue: Scalars['String'];
  logical_term_id: Array<Scalars['String']>;
  outgoing_queue: Scalars['String'];
  party_ref: Scalars['String'];
  port_number: Scalars['Int'];
  queue_mgr: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyTemplate = {
  __typename?: 'PartyTemplate';
  client_ref: Scalars['String'];
  party_long_name: Scalars['String'];
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  template_party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyTemplateInput = {
  client_ref: Scalars['String'];
  party_long_name: Scalars['String'];
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  template_party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  JsdcFileDef: Array<JsdcFileDef>;
  KanbanByTaskId: Array<Kb_Task>;
  KanbanFirstTask: Kb_Task;
  KanbanPriority: Array<Kb_Priority>;
  KanbanPriorityById: Array<Kb_Priority>;
  KanbanStatus: Array<Kb_Status>;
  KanbanStatusById: Array<Kb_Status>;
  KanbanTask: Array<Kb_Task>;
  KanbanTaskByRef: Array<Kb_Task>;
  KanbanTaskByRefAndStatus: Array<Kb_Task>;
  KanbanTaskByStatus: Array<Kb_Task>;
  KanbanTaskByTaskId: Kb_Task;
  KanbanType: Array<Kb_Type>;
  KanbanTypeById: Array<Kb_Type>;
  KanbanUniqueByTaskId: Kb_Task;
  SubTaskById: Array<SubTasks>;
  SubTasks: Array<SubTasks>;
  SubTasksByTaskId: Array<SubTasks>;
  bojenvironments: Array<BojEnvironment>;
  clients: Array<Clients>;
  configDefEntries: Array<ConfigDef>;
  databases: Array<Databases>;
  dpmAccount: Array<DpmAccount>;
  dpmAccountExtRef: Array<DpmAccountExtRef>;
  dpmAccountFlag: Array<DpmAccountFlag>;
  dpmConfigDef: Array<DpmConfigDef>;
  dpmParty: DpmParty;
  dpmPartyAudit: Array<DpmPartyAudit>;
  dpmPartyByClient: Array<DpmParty>;
  dpmPartyByType: Array<DpmParty>;
  dpmPartyExtRef: Array<DpmPartyExtRef>;
  dpmPartyFlag: Array<DpmPartyFlag>;
  dpmScheduler: Array<DpmScheduler>;
  firstPartyByType: Party;
  firstdpmPartyByClient: DpmPartyDef;
  glossPartyAudit: Array<PartyAudit>;
  glossScheduler: Array<GlossScheduler>;
  glossenvironments: Array<GlossEnvironment>;
  jasdecenvironments: Array<JasdecEnvironment>;
  me: User;
  party: Party;
  partyAddress: Array<PartyAddress>;
  partyAssoc: Array<PartyAssoc>;
  partyByType: Array<Party>;
  partyClassAssoc: Array<ClassAssoc>;
  partyClassification: Array<PartyClassification>;
  partyDate: Array<PartyDate>;
  partyExtRef: Array<PartyExtRef>;
  partyFlag: Array<PartyFlag>;
  partyInstr: Array<PartyInstr>;
  partyNarrative: Array<PartyNarrative>;
  partyNetting: Array<Netting>;
  partySSI: Array<PartySsi>;
  partySwift: Array<PartySwift>;
  partyTemplate: Array<PartyTemplate>;
  teTemplates: Array<TeTemplate>;
  users: Array<User>;
};


export type QueryJsdcFileDefArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryKanbanByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QueryKanbanFirstTaskArgs = {
  party_ref: Scalars['String'];
};


export type QueryKanbanPriorityByIdArgs = {
  priority: Scalars['String'];
};


export type QueryKanbanStatusByIdArgs = {
  status: Scalars['String'];
};


export type QueryKanbanTaskByRefArgs = {
  partyRef: Scalars['String'];
};


export type QueryKanbanTaskByRefAndStatusArgs = {
  partyRef: Scalars['String'];
  status: Scalars['String'];
};


export type QueryKanbanTaskByStatusArgs = {
  status: Scalars['String'];
};


export type QueryKanbanTaskByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QueryKanbanTypeByIdArgs = {
  type: Scalars['String'];
};


export type QueryKanbanUniqueByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QuerySubTaskByIdArgs = {
  subid: Scalars['String'];
  task_id: Scalars['String'];
};


export type QuerySubTasksByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QueryBojenvironmentsArgs = {
  client_ref: Scalars['String'];
};


export type QueryConfigDefEntriesArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDatabasesArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDpmAccountArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmAccountExtRefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmAccountFlagArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmConfigDefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDpmPartyArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmPartyAuditArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmPartyByClientArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDpmPartyByTypeArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_type: Scalars['String'];
};


export type QueryDpmPartyExtRefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmPartyFlagArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryFirstPartyByTypeArgs = {
  client_ref: Scalars['String'];
  party_type: Scalars['String'];
};


export type QueryFirstdpmPartyByClientArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryGlossPartyAuditArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryGlossSchedulerArgs = {
  client_ref: Scalars['String'];
};


export type QueryGlossenvironmentsArgs = {
  client_ref: Scalars['String'];
};


export type QueryJasdecenvironmentsArgs = {
  client_ref: Scalars['String'];
};


export type QueryPartyArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyAddressArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyAssocArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyByTypeArgs = {
  client_ref: Scalars['String'];
  party_type: Scalars['String'];
};


export type QueryPartyClassAssocArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyClassificationArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyDateArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyExtRefArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyFlagArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyInstrArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyNarrativeArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyNettingArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartySsiArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartySwiftArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyTemplateArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};

export type SubTaskInputs = {
  desc?: InputMaybe<Scalars['String']>;
  estimate?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  subid: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
  task_id: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type SubTasks = {
  __typename?: 'SubTasks';
  desc?: Maybe<Scalars['String']>;
  estimate: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  subid: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  task_id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type TeTemplate = {
  __typename?: 'TETemplate';
  component_type: Scalars['String'];
  template_data: Scalars['String'];
  template_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type TeTemplateInput = {
  component_type: Scalars['String'];
  template_data: Scalars['String'];
  template_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type TaskPriorityInputs = {
  description: Scalars['String'];
  priority: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type TaskStatusInputs = {
  description: Scalars['String'];
  status: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  client_ref: Scalars['String'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['Date'];
  userid: Scalars['ID'];
};

export type UserInput = {
  client_ref: Scalars['String'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['Date'];
  userid: Scalars['ID'];
};

export type Kb_Priority = {
  __typename?: 'kb_priority';
  description: Scalars['String'];
  priority: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type Kb_Status = {
  __typename?: 'kb_status';
  description: Scalars['String'];
  status: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type Kb_Task = {
  __typename?: 'kb_task';
  Id?: Maybe<Scalars['Int']>;
  Priority: Array<Kb_Priority>;
  Status: Array<Kb_Status>;
  Type: Array<Kb_Type>;
  assignee?: Maybe<Scalars['String']>;
  classname?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['Date']>;
  estimate?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  party_ref?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  rankid?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  subtasks: Array<SubTasks>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  task_id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Kb_Type = {
  __typename?: 'kb_type';
  description: Scalars['String'];
  type: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type KanbanTaskFragment = { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null };

export type KanbanTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanTasksQuery = { __typename?: 'Query', KanbanTask: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanPriorityQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanPriorityQuery = { __typename?: 'Query', KanbanPriority: Array<{ __typename?: 'kb_priority', priority: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanTypeQuery = { __typename?: 'Query', KanbanType: Array<{ __typename?: 'kb_type', type: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanStatusQuery = { __typename?: 'Query', KanbanStatus: Array<{ __typename?: 'kb_status', status: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanTaskByTaskIdQueryVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type KanbanTaskByTaskIdQuery = { __typename?: 'Query', KanbanByTaskId: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByStatusQueryVariables = Exact<{
  status: Scalars['String'];
}>;


export type KanbanTaskByStatusQuery = { __typename?: 'Query', KanbanTaskByStatus: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanByTaskIdQueryVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type KanbanByTaskIdQuery = { __typename?: 'Query', KanbanByTaskId: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByRefAndStatusQueryVariables = Exact<{
  partyRef: Scalars['String'];
  status: Scalars['String'];
}>;


export type KanbanTaskByRefAndStatusQuery = { __typename?: 'Query', KanbanTaskByRefAndStatus: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByRefQueryVariables = Exact<{
  party_ref: Scalars['String'];
}>;


export type KanbanTaskByRefQuery = { __typename?: 'Query', KanbanTaskByRef: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanByStatusQueryVariables = Exact<{
  status: Scalars['String'];
}>;


export type KanbanByStatusQuery = { __typename?: 'Query', KanbanTaskByStatus: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type CreateKanbanTaskMutationVariables = Exact<{
  taskInput: KanbanInputs;
}>;


export type CreateKanbanTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type UpdateTaskMutationVariables = Exact<{
  task_id: Scalars['String'];
  taskInput: KanbanInputs;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type DeleteTaskMutationVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type KanbanFirstTaskQueryVariables = Exact<{
  party_ref: Scalars['String'];
}>;


export type KanbanFirstTaskQuery = { __typename?: 'Query', KanbanFirstTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type UpdateTaskParentIdMutationVariables = Exact<{
  task_id: Scalars['String'];
  parentId: Scalars['Int'];
}>;


export type UpdateTaskParentIdMutation = { __typename?: 'Mutation', updateTaskParentId: { __typename?: 'kb_task', task_id: string, parentId?: number | null } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', createdAt: any, client_ref: string, updatedAt: any, userid: string, email: string, firstname?: string | null, lastname?: string | null, role: string }> };

export type SignUpMutationVariables = Exact<{
  data: UserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', createdAt: any, client_ref: string, updatedAt: any, userid: string, email: string, firstname?: string | null, lastname?: string | null, role: string } };

export type ResetPasswordMutationVariables = Exact<{
  data: LoginInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'User', createdAt: any, client_ref: string, updatedAt: any, userid: string, email: string, firstname?: string | null, lastname?: string | null, role: string } };

export type DeleteUserMutationVariables = Exact<{
  userid: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', userid: string, email: string, firstname?: string | null, lastname?: string | null, role: string } };

export type PartyQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyQuery = { __typename?: 'Query', party: { __typename?: 'Party', party_ref: string, client_ref: string, party_type: string, party_short_name: string, party_long_name: string, party_extra_long_name: string, active_ind: string, has_swift_config: string, has_netting_config: string, version_no: number, version_date: any, version_user: string } };

export type PartyByTypeQueryVariables = Exact<{
  party_type: Scalars['String'];
  client_ref: Scalars['String'];
}>;


export type PartyByTypeQuery = { __typename?: 'Query', partyByType: Array<{ __typename?: 'Party', party_ref: string, client_ref: string, party_type: string, party_short_name: string, party_long_name: string, party_extra_long_name: string, active_ind: string, has_swift_config: string, has_netting_config: string, version_no: number, version_date: any, version_user: string }> };

export type FirstPartyByTypeQueryVariables = Exact<{
  party_type: Scalars['String'];
  client_ref: Scalars['String'];
}>;


export type FirstPartyByTypeQuery = { __typename?: 'Query', firstPartyByType: { __typename?: 'Party', party_ref: string, client_ref: string, party_type: string, party_short_name: string, party_long_name: string, party_extra_long_name: string, active_ind: string, has_swift_config: string, has_netting_config: string, version_date: any, version_no: number, version_user: string } };

export type CreatePartyMutationVariables = Exact<{
  data: PartyInput;
}>;


export type CreatePartyMutation = { __typename?: 'Mutation', createParty: { __typename?: 'Party', party_ref: string } };

export type UpdatePartyMutationVariables = Exact<{
  data: PartyInput;
}>;


export type UpdatePartyMutation = { __typename?: 'Mutation', updateParty: { __typename?: 'Party', party_ref: string } };

export type DeletePartyTreeMutationVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type DeletePartyTreeMutation = { __typename?: 'Mutation', deletePartyTree: { __typename?: 'Party', party_ref: string } };

export type PartyExtRefQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyExtRefQuery = { __typename?: 'Query', partyExtRef: Array<{ __typename?: 'PartyExtRef', party_ref: string, client_ref: string, party_ext_ref: string, party_ext_ref_type: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyExtRefMutationVariables = Exact<{
  data: PartyExtRefInput;
}>;


export type CreatePartyExtRefMutation = { __typename?: 'Mutation', createPartyExtRef: { __typename?: 'PartyExtRef', party_ref: string } };

export type UpdatePartyExtRefMutationVariables = Exact<{
  data: PartyExtRefInput;
}>;


export type UpdatePartyExtRefMutation = { __typename?: 'Mutation', updatePartyExtRef: { __typename?: 'PartyExtRef', party_ref: string, party_ext_ref: string, party_ext_ref_type: string } };

export type DeletePartyExtRefMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
}>;


export type DeletePartyExtRefMutation = { __typename?: 'Mutation', deletePartyExtRef: { __typename?: 'PartyExtRef', party_ref: string } };

export type PartyClassQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyClassQuery = { __typename?: 'Query', partyClassification: Array<{ __typename?: 'PartyClassification', party_ref: string, client_ref: string, class_code: string, class_type: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyClassificationMutationVariables = Exact<{
  data: PartyClassInput;
}>;


export type CreatePartyClassificationMutation = { __typename?: 'Mutation', createPartyClassification: { __typename?: 'PartyClassification', party_ref: string } };

export type UpdatePartyClassificationMutationVariables = Exact<{
  data: PartyClassInput;
}>;


export type UpdatePartyClassificationMutation = { __typename?: 'Mutation', updatePartyClassification: { __typename?: 'PartyClassification', party_ref: string, class_type: string } };

export type DeletePartyClassificationMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  class_type: Scalars['String'];
}>;


export type DeletePartyClassificationMutation = { __typename?: 'Mutation', deletePartyClassification: { __typename?: 'PartyClassification', party_ref: string } };

export type PartyFlagQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyFlagQuery = { __typename?: 'Query', partyFlag: Array<{ __typename?: 'PartyFlag', party_ref: string, client_ref: string, flag_type: number, flag_code: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyFlagMutationVariables = Exact<{
  data: PartyFlagInput;
}>;


export type CreatePartyFlagMutation = { __typename?: 'Mutation', createPartyFlag: { __typename?: 'PartyFlag', party_ref: string } };

export type UpdatePartyFlagMutationVariables = Exact<{
  data: PartyFlagInput;
}>;


export type UpdatePartyFlagMutation = { __typename?: 'Mutation', updatePartyFlag: { __typename?: 'PartyFlag', party_ref: string, flag_type: number, flag_code: string } };

export type DeletePartyFlagMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  flag_type: Scalars['Int'];
  flag_code: Scalars['String'];
}>;


export type DeletePartyFlagMutation = { __typename?: 'Mutation', deletePartyFlag: { __typename?: 'PartyFlag', party_ref: string } };

export type PartyNarrativeQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyNarrativeQuery = { __typename?: 'Query', partyNarrative: Array<{ __typename?: 'PartyNarrative', party_ref: string, client_ref: string, narr_type: string, narrative: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyNarrativeMutationVariables = Exact<{
  data: PartyNarrativeInput;
}>;


export type CreatePartyNarrativeMutation = { __typename?: 'Mutation', createPartyNarrative: { __typename?: 'PartyNarrative', party_ref: string } };

export type UpdatePartyNarrativeMutationVariables = Exact<{
  data: PartyNarrativeInput;
}>;


export type UpdatePartyNarrativeMutation = { __typename?: 'Mutation', updatePartyNarrative: { __typename?: 'PartyNarrative', party_ref: string, narr_type: string } };

export type DeletePartyNarrativeMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  narr_type: Scalars['String'];
}>;


export type DeletePartyNarrativeMutation = { __typename?: 'Mutation', deletePartyNarrative: { __typename?: 'PartyNarrative', party_ref: string } };

export type PartyInstrQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyInstrQuery = { __typename?: 'Query', partyInstr: Array<{ __typename?: 'PartyInstr', party_ref: string, client_ref: string, instr_ref: string, instr_ref_type: string, instr_type: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyInstrumentMutationVariables = Exact<{
  data: PartyInstrInput;
}>;


export type CreatePartyInstrumentMutation = { __typename?: 'Mutation', createPartyInstrument: { __typename?: 'PartyInstr', party_ref: string, instr_ref: string, instr_ref_type: string } };

export type UpdatePartyInstrumentMutationVariables = Exact<{
  data: PartyInstrInput;
}>;


export type UpdatePartyInstrumentMutation = { __typename?: 'Mutation', updatePartyInstrument: { __typename?: 'PartyInstr', party_ref: string, instr_ref: string, instr_ref_type: string } };

export type DeletePartyInstrumentMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  instr_type: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_ref: Scalars['String'];
}>;


export type DeletePartyInstrumentMutation = { __typename?: 'Mutation', deletePartyInstrument: { __typename?: 'PartyInstr', party_ref: string } };

export type PartyAssocQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyAssocQuery = { __typename?: 'Query', partyAssoc: Array<{ __typename?: 'PartyAssoc', party_ref: string, client_ref: string, assoc_type: string, assoc_party_ref: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyAssocMutationVariables = Exact<{
  data: PartyAssocInput;
}>;


export type CreatePartyAssocMutation = { __typename?: 'Mutation', createPartyAssoc: { __typename?: 'PartyAssoc', party_ref: string } };

export type UpdatePartyAssocMutationVariables = Exact<{
  data: PartyAssocInput;
}>;


export type UpdatePartyAssocMutation = { __typename?: 'Mutation', updatePartyAssoc: { __typename?: 'PartyAssoc', assoc_type: string, party_ref: string } };

export type DeletePartyAssocMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  assoc_type: Scalars['String'];
}>;


export type DeletePartyAssocMutation = { __typename?: 'Mutation', deletePartyAssoc: { __typename?: 'PartyAssoc', assoc_type: string, party_ref: string } };

export type PartySsiQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartySsiQuery = { __typename?: 'Query', partySSI: Array<{ __typename?: 'PartySSI', account_name: string, account_no: string, active_ind: string, comms_service: string, dacc_ref: string, depo_ref: string, depot_type: string, ccy: string, depot_alias: string, depot_descr: string, party_ref: string, client_ref: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatePartySsiMutationVariables = Exact<{
  data: PartySsiInput;
}>;


export type CreatePartySsiMutation = { __typename?: 'Mutation', createPartySSI: { __typename?: 'PartySSI', party_ref: string } };

export type UpdatePartySsiMutationVariables = Exact<{
  data: PartySsiInput;
}>;


export type UpdatePartySsiMutation = { __typename?: 'Mutation', updatePartySSI: { __typename?: 'PartySSI', party_ref: string } };

export type DeletePartySsiMutationVariables = Exact<{
  client_ref: Scalars['String'];
  deleteSsiDepotAlias: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type DeletePartySsiMutation = { __typename?: 'Mutation', deletePartySSI: { __typename?: 'PartySSI', party_ref: string } };

export type PartyDateQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyDateQuery = { __typename?: 'Query', partyDate: Array<{ __typename?: 'PartyDate', party_ref: string, client_ref: string, date_type: string, date: string, time: string, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyDateMutationVariables = Exact<{
  data: PartyDateInput;
}>;


export type CreatePartyDateMutation = { __typename?: 'Mutation', createPartyDate: { __typename?: 'PartyDate', party_ref: string } };

export type UpdatePartyDateMutationVariables = Exact<{
  data: PartyDateInput;
}>;


export type UpdatePartyDateMutation = { __typename?: 'Mutation', updatePartyDate: { __typename?: 'PartyDate', party_ref: string } };

export type DeletePartyDateMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
}>;


export type DeletePartyDateMutation = { __typename?: 'Mutation', deletePartyDate: { __typename?: 'PartyDate', party_ref: string } };

export type PartyAddressQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyAddressQuery = { __typename?: 'Query', partyAddress: Array<{ __typename?: 'PartyAddress', party_ref: string, client_ref: string, addr_type: string, contact_name: string, contact_title: string, addr_line1: string, addr_line2: string, addr_line3: string, addr_line4: string, addr_line5: string, addr_line6: string, post_code: string, int_dial_code: string, phone_no: string, fax_no: string, email: string, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyAddressMutationVariables = Exact<{
  data: PartyAddressInput;
}>;


export type CreatePartyAddressMutation = { __typename?: 'Mutation', createPartyAddress: { __typename?: 'PartyAddress', party_ref: string } };

export type UpdatePartyAddressMutationVariables = Exact<{
  data: PartyAddressInput;
}>;


export type UpdatePartyAddressMutation = { __typename?: 'Mutation', updatePartyAddress: { __typename?: 'PartyAddress', party_ref: string } };

export type DeletePartyAddressMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  addr_type: Scalars['String'];
}>;


export type DeletePartyAddressMutation = { __typename?: 'Mutation', deletePartyAddress: { __typename?: 'PartyAddress', party_ref: string } };

export type PartyTemplateQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyTemplateQuery = { __typename?: 'Query', partyTemplate: Array<{ __typename?: 'PartyTemplate', party_ref: string, client_ref: string, template_party_ref: string, party_short_name: string, party_long_name: string, version_date: any, version_no: number, version_user: string }> };

export type CreatePartyTemplateMutationVariables = Exact<{
  data: PartyTemplateInput;
}>;


export type CreatePartyTemplateMutation = { __typename?: 'Mutation', createPartyTemplate: { __typename?: 'PartyTemplate', party_ref: string } };

export type UpdatePartyTemplateMutationVariables = Exact<{
  data: PartyTemplateInput;
}>;


export type UpdatePartyTemplateMutation = { __typename?: 'Mutation', updatePartyTemplate: { __typename?: 'PartyTemplate', party_ref: string } };

export type DeletePartyTemplateMutationVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type DeletePartyTemplateMutation = { __typename?: 'Mutation', deletePartyTemplate: { __typename?: 'PartyTemplate', party_ref: string } };

export type PartySwiftQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartySwiftQuery = { __typename?: 'Query', partySwift: Array<{ __typename?: 'PartySwift', party_ref: string, client_ref: string, company_name: string, branch_code: string, logical_term_id: Array<string>, queue_mgr: string, incoming_queue: string, outgoing_queue: string, channel: string, host: string, port_number: number, version_date: any, version_no: number, version_user: string }> };

export type CreatePartySwiftMutationVariables = Exact<{
  data: PartySwiftInput;
}>;


export type CreatePartySwiftMutation = { __typename?: 'Mutation', createPartySwift: { __typename?: 'PartySwift', party_ref: string } };

export type UpdatePartySwiftMutationVariables = Exact<{
  data: PartySwiftInput;
}>;


export type UpdatePartySwiftMutation = { __typename?: 'Mutation', updatePartySwift: { __typename?: 'PartySwift', party_ref: string } };

export type DeletePartySwiftMutationVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type DeletePartySwiftMutation = { __typename?: 'Mutation', deletePartySwift: { __typename?: 'PartySwift', party_ref: string } };

export type PartyClassAssocQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyClassAssocQuery = { __typename?: 'Query', partyClassAssoc: Array<{ __typename?: 'ClassAssoc', party_ref: string, client_ref: string, class_assoc_code: string, code_type: string, class_1: number, code_1: string, class_2: number, code_2: Array<string>, applied: boolean, version_date: any, version_no: number, version_user: string }> };

export type CreateClassAssocMutationVariables = Exact<{
  data: ClassAssocInput;
}>;


export type CreateClassAssocMutation = { __typename?: 'Mutation', createClassAssoc: { __typename?: 'ClassAssoc', party_ref: string, class_assoc_code: string } };

export type UpdateClassAssocMutationVariables = Exact<{
  data: ClassAssocInput;
}>;


export type UpdateClassAssocMutation = { __typename?: 'Mutation', updateClassAssoc: { __typename?: 'ClassAssoc', party_ref: string, class_assoc_code: string } };

export type DeleteClassAssocMutationVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
  class_assoc_code: Scalars['String'];
  code_type: Scalars['String'];
  class_1: Scalars['Int'];
  code_1: Scalars['String'];
  class_2: Scalars['Int'];
}>;


export type DeleteClassAssocMutation = { __typename?: 'Mutation', deleteClassAssoc: { __typename?: 'ClassAssoc', party_ref: string, class_assoc_code: string } };

export type PartyNettingQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type PartyNettingQuery = { __typename?: 'Query', partyNetting: Array<{ __typename?: 'Netting', party_ref: string, client_ref: string, net_driver: string, settle_code: string, transaction_type: string, trade_group: number, late_rule: string, net_schedule_code: string, date_type: string, buy_and_sell_flag: string, net_party_ref: string, net_book: string, override_net_book: string, secondary_party: string, settle_terms: string, operation_type: string, net_primary: string, primary_comp_service: string, primary_secp_service: string, net_secondary: string, secondary_comp_service: string, secondary_secp_service: string, primary_instr: string, primary_comp_alias: string, primary_depot_type: string, primary_party_ref: string, primary_secp_alias: string, settle_instr: string, secondary_comp_alias: string, secondary_depot_type: string, secondary_party_ref: string, secondary_secp_alias: string, market_party: string, start_date_type: string, start_offset_ind: string, start_offset_code: string, end_date_type: string, end_offset_ind: string, end_offset_code: string, net_cash_when_zero_stock: string, split_buy_sell: string, version_date: any, version_no: number, version_user: string }> };

export type CreateNettingMutationVariables = Exact<{
  data: NettingInput;
}>;


export type CreateNettingMutation = { __typename?: 'Mutation', createNetting: { __typename?: 'Netting', party_ref: string, net_driver: string, settle_code: string, transaction_type: string } };

export type UpdateNettingMutationVariables = Exact<{
  data: NettingInput;
}>;


export type UpdateNettingMutation = { __typename?: 'Mutation', updateNetting: { __typename?: 'Netting', party_ref: string, net_driver: string, settle_code: string, transaction_type: string } };

export type DeleteNettingMutationVariables = Exact<{
  client_ref: Scalars['String'];
  net_driver: Scalars['String'];
  party_ref: Scalars['String'];
  settle_code: Scalars['String'];
  transaction_type: Scalars['String'];
}>;


export type DeleteNettingMutation = { __typename?: 'Mutation', deleteNetting: { __typename?: 'Netting', party_ref: string, net_driver: string, settle_code: string, transaction_type: string } };

export type GlossSchedulerQueryVariables = Exact<{
  client_ref: Scalars['String'];
}>;


export type GlossSchedulerQuery = { __typename?: 'Query', glossScheduler: Array<{ __typename?: 'GlossScheduler', client_ref: string, active_ind_p2k?: string | null, batch_size: number, bus_day: string, database_code: string, database_type: string, dst_region_code?: string | null, due_date_time?: any | null, end_by_interval: number, end_by_time: any, event_ref: string, frequency_end_time: any, frequency_interval: number, frequency_start_time: any, frequency_unit: string, holiday_id: string, msg_type: number, sql_db_code: string, start_by_interval: number, start_by_time: any, start_by_unit: string, supercede: string, use_current_date: string, version_date: any, version_no: number, version_user: string }> };

export type CreateglossSchedulerMutationVariables = Exact<{
  data: GlossSchedulerInput;
}>;


export type CreateglossSchedulerMutation = { __typename?: 'Mutation', createglossScheduler: { __typename?: 'GlossScheduler', event_ref: string } };

export type UpdateglossSchedulerMutationVariables = Exact<{
  client_ref: Scalars['String'];
  msg_type: Scalars['Int'];
  event_ref: Scalars['String'];
  due_date_time: Scalars['Date'];
  database_code: Scalars['String'];
  data: GlossSchedulerInput;
}>;


export type UpdateglossSchedulerMutation = { __typename?: 'Mutation', updateglossScheduler: { __typename?: 'GlossScheduler', event_ref: string } };

export type DeleteglossSchedulerMutationVariables = Exact<{
  client_ref: Scalars['String'];
  msg_type: Scalars['Int'];
  event_ref: Scalars['String'];
  due_date_time: Scalars['Date'];
  database_code: Scalars['String'];
}>;


export type DeleteglossSchedulerMutation = { __typename?: 'Mutation', deleteglossScheduler: { __typename?: 'GlossScheduler', event_ref: string } };

export type BackUpPartyDataMutationVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type BackUpPartyDataMutation = { __typename?: 'Mutation', backUpPartyData: { __typename?: 'PartyAudit', party_ref: string } };

export type RestorePartyDataMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  version_no: Scalars['Int'];
}>;


export type RestorePartyDataMutation = { __typename?: 'Mutation', restorePartyData: { __typename?: 'Party', party_ref: string } };

export type SavePartyStaticpushedToGlossMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  environment: Scalars['String'];
}>;


export type SavePartyStaticpushedToGlossMutation = { __typename?: 'Mutation', savePartyStaticpushedToGloss: { __typename?: 'Party', party_ref: string, party_type: string, party_short_name: string, party_long_name: string, party_extra_long_name: string, active_ind: string, has_swift_config: string, has_netting_config: string, version_no: number, version_date: any, version_user: string, party_addr: Array<{ __typename?: 'PartyAddress', party_ref: string, addr_type: string, contact_name: string, contact_title: string, addr_line1: string, addr_line2: string, addr_line3: string, addr_line4: string, addr_line5: string, addr_line6: string, post_code: string, int_dial_code: string, phone_no: string, fax_no: string, email: string }>, party_assoc: Array<{ __typename?: 'PartyAssoc', party_ref: string, assoc_type: string, assoc_party_ref: string }>, party_classification: Array<{ __typename?: 'PartyClassification', party_ref: string, class_type: string, class_code: string }>, party_date: Array<{ __typename?: 'PartyDate', party_ref: string, date_type: string, date: string, time: string }>, party_ext_ref: Array<{ __typename?: 'PartyExtRef', party_ref: string, party_ext_ref_type: string, party_ext_ref: string }>, party_flag: Array<{ __typename?: 'PartyFlag', party_ref: string, flag_type: number, flag_code: string }>, party_instr: Array<{ __typename?: 'PartyInstr', party_ref: string, instr_type: string, instr_ref_type: string, instr_ref: string }>, party_narrative: Array<{ __typename?: 'PartyNarrative', party_ref: string, narr_type: string, narrative: string }>, party_template: Array<{ __typename?: 'PartyTemplate', party_ref: string, template_party_ref: string, party_short_name: string, party_long_name: string, version_no: number, version_date: any, version_user: string }>, party_class_assoc: Array<{ __typename?: 'ClassAssoc', party_ref: string, class_assoc_code: string, code_type: string, class_1: number, code_1: string, class_2: number, code_2: Array<string>, applied: boolean, version_no: number, version_date: any, version_user: string }> } };

export type SaveClassAssocStaticpushedToGlossMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  environment: Scalars['String'];
}>;


export type SaveClassAssocStaticpushedToGlossMutation = { __typename?: 'Mutation', saveClassAssocStaticpushedToGloss: Array<{ __typename?: 'ClassAssoc', party_ref: string, class_assoc_code: string, code_type: string, class_1: number, code_1: string, class_2: number, code_2: Array<string>, applied: boolean, version_date: any, version_no: number, version_user: string }> };

export type SaveNettingStaticpushedToGlossMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  environment: Scalars['String'];
}>;


export type SaveNettingStaticpushedToGlossMutation = { __typename?: 'Mutation', saveNettingStaticpushedToGloss: Array<{ __typename?: 'Netting', party_ref: string, net_driver: string, settle_code: string, transaction_type: string, trade_group: number, late_rule: string, net_schedule_code: string, date_type: string, buy_and_sell_flag: string, net_party_ref: string, net_book: string, override_net_book: string, secondary_party: string, settle_terms: string, operation_type: string, net_primary: string, primary_comp_service: string, primary_secp_service: string, net_secondary: string, secondary_comp_service: string, secondary_secp_service: string, primary_instr: string, primary_comp_alias: string, primary_depot_type: string, primary_party_ref: string, primary_secp_alias: string, settle_instr: string, secondary_comp_alias: string, secondary_depot_type: string, secondary_party_ref: string, secondary_secp_alias: string, market_party: string, start_date_type: string, start_offset_ind: string, start_offset_code: string, end_date_type: string, end_offset_ind: string, end_offset_code: string, net_cash_when_zero_stock: string, split_buy_sell: string, version_date: any, version_no: number, version_user: string }> };

export type ClonePartyMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type ClonePartyMutation = { __typename?: 'Mutation', cloneParty: boolean };

export type CloneClassAssocMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type CloneClassAssocMutation = { __typename?: 'Mutation', cloneClassAssoc: boolean };

export type CloneSwiftPartyMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type CloneSwiftPartyMutation = { __typename?: 'Mutation', cloneSwiftParty: boolean };

export type CloneNettingDataMutationVariables = Exact<{
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type CloneNettingDataMutation = { __typename?: 'Mutation', cloneNettingData: boolean };

export type GlossPartyAuditQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
}>;


export type GlossPartyAuditQuery = { __typename?: 'Query', glossPartyAudit: Array<{ __typename?: 'PartyAudit', party_ref: string, client_ref: string, party_data: string, party_ext_ref_data: string, party_classification_data: string, party_flag_data: string, party_narrative_data: string, party_assoc_data: string, party_instr_data: string, party_ssi_data: string, party_date_data: string, party_address_data: string, party_template_data: string, version_no: number, version_date: any, version_user: string }> };

export type CloneglossSchedulerMutationVariables = Exact<{
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type CloneglossSchedulerMutation = { __typename?: 'Mutation', cloneglossScheduler: boolean };

export type GlossenvironmentsQueryVariables = Exact<{
  client_ref: Scalars['String'];
}>;


export type GlossenvironmentsQuery = { __typename?: 'Query', glossenvironments: Array<{ __typename?: 'GlossEnvironment', environment: string, client_ref: string, description?: string | null, sst_glossapi_url: string, active: string }> };

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = { __typename?: 'Query', clients: Array<{ __typename?: 'Clients', client_ref: string }> };

export type DpmPartyByClientQueryVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmPartyByClientQuery = { __typename?: 'Query', dpmPartyByClient: Array<{ __typename?: 'DpmParty', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_type: string, inactive: string, version_date: any, version_no: number, version_user: string }> };

export type DpmPartyByTypeQueryVariables = Exact<{
  client_ref: Scalars['String'];
  party_type: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmPartyByTypeQuery = { __typename?: 'Query', dpmPartyByType: Array<{ __typename?: 'DpmParty', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_type: string, inactive: string, version_date: any, version_no: number, version_user: string }> };

export type FirstdpmPartyByClientQueryVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type FirstdpmPartyByClientQuery = { __typename?: 'Query', firstdpmPartyByClient: { __typename?: 'DpmPartyDef', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_type: string, inactive: string, version_date: any, version_no: number, version_user: string } };

export type DpmPartyQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmPartyQuery = { __typename?: 'Query', dpmParty: { __typename?: 'DpmParty', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_type: string, inactive: string, version_date: any, version_no: number, version_user: string, dpm_party_ext_ref: Array<{ __typename?: 'DpmPartyExtRef', company_ref: string, party_ref: string, party_ext_ref_type: string, party_ext_ref: string, version_no: number, version_user: string }>, dpm_party_flag: Array<{ __typename?: 'DpmPartyFlag', company_ref: string, party_ref: string, party_flag_type: number, party_flag: string, version_no: number, version_user: string }>, dpm_account_def: Array<{ __typename?: 'DpmAccount', company_ref: string, party_ref: string, account_no: string, account_type: string, inactive: string, version_no: number, version_user: string }>, dpm_account_ext_ref: Array<{ __typename?: 'DpmAccountExtRef', company_ref: string, party_ref: string, account_no: string, account_ext_ref_type: string, account_ext_ref: string, version_no: number, version_user: string }>, dpm_account_flag: Array<{ __typename?: 'DpmAccountFlag', company_ref: string, party_ref: string, account_no: string, account_flag_type: number, account_flag: string, version_no: number, version_user: string }> } };

export type CreatedpmPartyMutationVariables = Exact<{
  data: DpmPartyDefInput;
}>;


export type CreatedpmPartyMutation = { __typename?: 'Mutation', createdpmParty: { __typename?: 'DpmPartyDef', company_ref: string, party_ref: string } };

export type UpdatedpmPartyMutationVariables = Exact<{
  data: DpmPartyDefInput;
}>;


export type UpdatedpmPartyMutation = { __typename?: 'Mutation', updatedpmParty: { __typename?: 'DpmPartyDef', company_ref: string, party_ref: string } };

export type DeletedpmPartyTreeMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DeletedpmPartyTreeMutation = { __typename?: 'Mutation', deletedpmPartyTree: { __typename?: 'DpmPartyDef', company_ref: string, party_ref: string } };

export type DpmPartyExtRefQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmPartyExtRefQuery = { __typename?: 'Query', dpmPartyExtRef: Array<{ __typename?: 'DpmPartyExtRef', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_ext_ref_type: string, party_ext_ref: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmPartyExtRefMutationVariables = Exact<{
  data: DpmPartyExtRefInput;
}>;


export type CreatedpmPartyExtRefMutation = { __typename?: 'Mutation', createdpmPartyExtRef: { __typename?: 'DpmPartyExtRef', company_ref: string, party_ref: string } };

export type UpdatedpmPartyExtRefMutationVariables = Exact<{
  data: DpmPartyExtRefInput;
}>;


export type UpdatedpmPartyExtRefMutation = { __typename?: 'Mutation', updatedpmPartyExtRef: { __typename?: 'DpmPartyExtRef', company_ref: string, party_ref: string, party_ext_ref: string, party_ext_ref_type: string } };

export type DeletedpmPartyExtRefMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
}>;


export type DeletedpmPartyExtRefMutation = { __typename?: 'Mutation', deletedpmPartyExtRef: { __typename?: 'DpmPartyExtRef', company_ref: string, party_ref: string } };

export type DpmPartyFlagQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmPartyFlagQuery = { __typename?: 'Query', dpmPartyFlag: Array<{ __typename?: 'DpmPartyFlag', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_flag_type: number, party_flag: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmPartyFlagMutationVariables = Exact<{
  data: DpmPartyFlagInput;
}>;


export type CreatedpmPartyFlagMutation = { __typename?: 'Mutation', createdpmPartyFlag: { __typename?: 'DpmPartyFlag', company_ref: string, party_ref: string } };

export type UpdatedpmPartyFlagMutationVariables = Exact<{
  data: DpmPartyFlagInput;
}>;


export type UpdatedpmPartyFlagMutation = { __typename?: 'Mutation', updatedpmPartyFlag: { __typename?: 'DpmPartyFlag', company_ref: string, party_ref: string, party_flag_type: number, party_flag: string } };

export type DeletedpmPartyFlagMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_flag: Scalars['String'];
}>;


export type DeletedpmPartyFlagMutation = { __typename?: 'Mutation', deletedpmPartyFlag: { __typename?: 'DpmPartyFlag', company_ref: string, party_ref: string } };

export type DpmAccountQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmAccountQuery = { __typename?: 'Query', dpmAccount: Array<{ __typename?: 'DpmAccount', company_ref: string, party_ref: string, client_ref: string, component_type: string, account_no: string, account_type: string, inactive: string, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmAccountMutationVariables = Exact<{
  data: DpmAccountInput;
}>;


export type CreatedpmAccountMutation = { __typename?: 'Mutation', createdpmAccount: { __typename?: 'DpmAccount', company_ref: string, party_ref: string } };

export type UpdatedpmAccountMutationVariables = Exact<{
  data: DpmAccountInput;
}>;


export type UpdatedpmAccountMutation = { __typename?: 'Mutation', updatedpmAccount: { __typename?: 'DpmAccount', company_ref: string, party_ref: string } };

export type DeletedpmAccountMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  account_no: Scalars['String'];
}>;


export type DeletedpmAccountMutation = { __typename?: 'Mutation', deletedpmAccount: { __typename?: 'DpmAccount', company_ref: string, party_ref: string } };

export type DpmAccountExtRefQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmAccountExtRefQuery = { __typename?: 'Query', dpmAccountExtRef: Array<{ __typename?: 'DpmAccountExtRef', company_ref: string, party_ref: string, client_ref: string, component_type: string, account_no: string, account_ext_ref_type: string, account_ext_ref: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmAccountExtRefMutationVariables = Exact<{
  data: DpmAccountExtRefInput;
}>;


export type CreatedpmAccountExtRefMutation = { __typename?: 'Mutation', createdpmAccountExtRef: { __typename?: 'DpmAccountExtRef', company_ref: string, party_ref: string } };

export type UpdatedpmAccountExtRefMutationVariables = Exact<{
  data: DpmAccountExtRefInput;
}>;


export type UpdatedpmAccountExtRefMutation = { __typename?: 'Mutation', updatedpmAccountExtRef: { __typename?: 'DpmAccountExtRef', company_ref: string, party_ref: string, account_ext_ref_type: string, account_ext_ref: string } };

export type DeletedpmAccountExtRefMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  account_no: Scalars['String'];
  account_ext_ref_type: Scalars['String'];
}>;


export type DeletedpmAccountExtRefMutation = { __typename?: 'Mutation', deletedpmAccountExtRef: { __typename?: 'DpmAccountExtRef', company_ref: string, party_ref: string } };

export type DpmAccountFlagQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmAccountFlagQuery = { __typename?: 'Query', dpmAccountFlag: Array<{ __typename?: 'DpmAccountFlag', company_ref: string, party_ref: string, client_ref: string, component_type: string, account_no: string, account_flag_type: number, account_flag: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmAccountFlagMutationVariables = Exact<{
  data: DpmAccountFlagInput;
}>;


export type CreatedpmAccountFlagMutation = { __typename?: 'Mutation', createdpmAccountFlag: { __typename?: 'DpmAccountFlag', company_ref: string, party_ref: string } };

export type UpdatedpmAccountFlagMutationVariables = Exact<{
  data: DpmAccountFlagInput;
}>;


export type UpdatedpmAccountFlagMutation = { __typename?: 'Mutation', updatedpmAccountFlag: { __typename?: 'DpmAccountFlag', company_ref: string, party_ref: string, account_flag_type: number, account_flag: string } };

export type DeletedpmAccountFlagMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  account_no: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_flag: Scalars['String'];
}>;


export type DeletedpmAccountFlagMutation = { __typename?: 'Mutation', deletedpmAccountFlag: { __typename?: 'DpmAccountFlag', company_ref: string, party_ref: string } };

export type DpmConfigDefQueryVariables = Exact<{
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  client_ref: Scalars['String'];
}>;


export type DpmConfigDefQuery = { __typename?: 'Query', dpmConfigDef: Array<{ __typename?: 'DpmConfigDef', client_ref: string, component_type: string, company_ref: string, party_ref: string, config_type: string, config_value: string, description?: string | null, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmConfigDefMutationVariables = Exact<{
  data: DpmConfigDefInput;
}>;


export type CreatedpmConfigDefMutation = { __typename?: 'Mutation', createdpmConfigDef: { __typename?: 'DpmConfigDef', company_ref: string } };

export type UpdatedpmConfigDefMutationVariables = Exact<{
  data: DpmConfigDefInput;
}>;


export type UpdatedpmConfigDefMutation = { __typename?: 'Mutation', updatedpmConfigDef: { __typename?: 'DpmConfigDef', company_ref: string } };

export type DeletedpmConfigDefMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  company_ref: Scalars['String'];
  config_type: Scalars['String'];
}>;


export type DeletedpmConfigDefMutation = { __typename?: 'Mutation', deletedpmConfigDef: { __typename?: 'DpmConfigDef', company_ref: string } };

export type SavedpmconfigdefpushedMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  company_ref: Scalars['String'];
  environment: Scalars['String'];
}>;


export type SavedpmconfigdefpushedMutation = { __typename?: 'Mutation', savedpmconfigdefpushed: Array<{ __typename?: 'DpmConfigDef', company_ref: string, config_type: string, config_value: string, version_date: any, version_no: number, version_user: string }> };

export type DatabasesQueryVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DatabasesQuery = { __typename?: 'Query', databases: Array<{ __typename?: 'Databases', client_ref: string, component_type: string, database_type: string, database_code: string, descr: string, sql_db_code: string, holiday_id_p2k: string, version_date: any, version_no: number, version_user: string }> };

export type CreatedatabaseMutationVariables = Exact<{
  data: DatabasesInput;
}>;


export type CreatedatabaseMutation = { __typename?: 'Mutation', createdatabase: { __typename?: 'Databases', client_ref: string } };

export type UpdatedatabaseMutationVariables = Exact<{
  data: DatabasesInput;
}>;


export type UpdatedatabaseMutation = { __typename?: 'Mutation', updatedatabase: { __typename?: 'Databases', client_ref: string } };

export type DeletedatabaseMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_type: Scalars['String'];
  database_code: Scalars['String'];
}>;


export type DeletedatabaseMutation = { __typename?: 'Mutation', deletedatabase: { __typename?: 'Databases', client_ref: string } };

export type JsdcFileDefQueryVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type JsdcFileDefQuery = { __typename?: 'Query', JsdcFileDef: Array<{ __typename?: 'JsdcFileDef', client_ref: string, component_type: string, data_rec_type_len: number, db_code?: string | null, file_desc: string, file_diff: string, file_name: string, file_proc_type: string, multi_basis_date: string, proc_status_check: string, proc_status_pos?: number | null, proc_status_value?: string | null, rec_len: number, required_file_name?: string | null, transfer_type: string, product_group: string, version_date: any, version_no: number, version_user: string }> };

export type CreateJsdcFileDefMutationVariables = Exact<{
  data: JsdcFileDefInput;
}>;


export type CreateJsdcFileDefMutation = { __typename?: 'Mutation', createJsdcFileDef: { __typename?: 'JsdcFileDef', client_ref: string } };

export type UpdateJsdcFileDefMutationVariables = Exact<{
  data: JsdcFileDefInput;
}>;


export type UpdateJsdcFileDefMutation = { __typename?: 'Mutation', updateJsdcFileDef: { __typename?: 'JsdcFileDef', client_ref: string } };

export type DeleteJsdcFileDefMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  file_name: Scalars['String'];
}>;


export type DeleteJsdcFileDefMutation = { __typename?: 'Mutation', deleteJsdcFileDef: { __typename?: 'JsdcFileDef', client_ref: string } };

export type SavefilesStaticpushedMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  environment: Scalars['String'];
}>;


export type SavefilesStaticpushedMutation = { __typename?: 'Mutation', savefilesStaticpushed: Array<{ __typename?: 'JsdcFileDef', client_ref: string, component_type: string, file_name: string, transfer_type: string, rec_len: number, data_rec_type_len: number, file_diff: string, proc_status_check: string, proc_status_pos?: number | null, proc_status_value?: string | null, file_proc_type: string, multi_basis_date: string, required_file_name?: string | null, db_code?: string | null, file_desc: string, product_group: string, version_date: any, version_no: number, version_user: string }> };

export type DpmSchedulerQueryVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmSchedulerQuery = { __typename?: 'Query', dpmScheduler: Array<{ __typename?: 'DpmScheduler', client_ref: string, component_type: string, active_ind_p2k?: string | null, batch_size: number, bus_day: string, database_code: string, database_type: string, due_date_time?: any | null, end_by_interval: number, end_by_time: any, event_ref: string, frequency_end_time: any, frequency_interval: number, frequency_start_time: any, frequency_unit: string, holiday_id: string, msg_type: number, sql_db_code: string, start_by_interval: number, start_by_time: any, start_by_unit: string, supercede: string, use_current_date: string, version_date: any, version_no: number, version_user: string }> };

export type CreatedpmSchedulerMutationVariables = Exact<{
  data: DpmSchedulerInput;
}>;


export type CreatedpmSchedulerMutation = { __typename?: 'Mutation', createdpmScheduler: { __typename?: 'DpmScheduler', event_ref: string } };

export type UpdatedpmSchedulerMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  msg_type: Scalars['Int'];
  event_ref: Scalars['String'];
  due_date_time: Scalars['Date'];
  database_code: Scalars['String'];
  data: DpmSchedulerInput;
}>;


export type UpdatedpmSchedulerMutation = { __typename?: 'Mutation', updatedpmScheduler: { __typename?: 'DpmScheduler', event_ref: string } };

export type DeletedpmSchedulerMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  msg_type: Scalars['Int'];
  event_ref: Scalars['String'];
  due_date_time: Scalars['Date'];
  database_code: Scalars['String'];
}>;


export type DeletedpmSchedulerMutation = { __typename?: 'Mutation', deletedpmScheduler: { __typename?: 'DpmScheduler', event_ref: string } };

export type ClonedpmPartyMutationVariables = Exact<{
  company_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_company_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type ClonedpmPartyMutation = { __typename?: 'Mutation', clonedpmParty: boolean };

export type ClonedatabasesMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type ClonedatabasesMutation = { __typename?: 'Mutation', clonedatabases: boolean };

export type ClonejsdcfiledefMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  product_group: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type ClonejsdcfiledefMutation = { __typename?: 'Mutation', clonejsdcfiledef: boolean };

export type ClonedpmSchedulerMutationVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
}>;


export type ClonedpmSchedulerMutation = { __typename?: 'Mutation', clonedpmScheduler: boolean };

export type BackUpDpmPartyDataMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type BackUpDpmPartyDataMutation = { __typename?: 'Mutation', backUpDpmPartyData: { __typename?: 'DpmPartyAudit', company_ref: string } };

export type DpmPartyAuditQueryVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type DpmPartyAuditQuery = { __typename?: 'Query', dpmPartyAudit: Array<{ __typename?: 'DpmPartyAudit', company_ref: string, party_ref: string, client_ref: string, component_type: string, party_data: string, party_ext_ref_data: string, party_flag_data: string, account_data: string, account_ext_ref_data: string, account_flag_data: string, version_no: number, version_date: any, version_user: string }> };

export type RestoreDpmPartyDataMutationVariables = Exact<{
  company_ref: Scalars['String'];
  party_ref: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  version_no: Scalars['Int'];
}>;


export type RestoreDpmPartyDataMutation = { __typename?: 'Mutation', restoreDpmPartyData: { __typename?: 'DpmPartyDef', company_ref: string } };

export type JasdecenvironmentsQueryVariables = Exact<{
  client_ref: Scalars['String'];
}>;


export type JasdecenvironmentsQuery = { __typename?: 'Query', jasdecenvironments: Array<{ __typename?: 'JasdecEnvironment', environment: string, client_ref: string, description?: string | null, sst_jasdecapi_url: string, active: string }> };

export type BojenvironmentsQueryVariables = Exact<{
  client_ref: Scalars['String'];
}>;


export type BojenvironmentsQuery = { __typename?: 'Query', bojenvironments: Array<{ __typename?: 'BojEnvironment', environment: string, client_ref: string, description?: string | null, sst_bojapi_url: string, active: string }> };

export type ConfigDefEntriesQueryVariables = Exact<{
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
}>;


export type ConfigDefEntriesQuery = { __typename?: 'Query', configDefEntries: Array<{ __typename?: 'ConfigDef', client_ref: string, component_type: string, config_ref: string, config_type: string, component: string, database_code: string, component_data: Array<string>, version_date: any, version_no: number, version_user: string }> };

export type UpdateConfigDefMutationVariables = Exact<{
  data: ConfigDefInput;
}>;


export type UpdateConfigDefMutation = { __typename?: 'Mutation', updateConfigDef: { __typename?: 'ConfigDef', client_ref: string } };

export type TeTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeTemplatesQuery = { __typename?: 'Query', teTemplates: Array<{ __typename?: 'TETemplate', component_type: string, template_type: string, template_data: string, version_date: any, version_no: number, version_user: string }> };

export type CreateTeTemplateMutationVariables = Exact<{
  data: TeTemplateInput;
}>;


export type CreateTeTemplateMutation = { __typename?: 'Mutation', createTETemplate: { __typename?: 'TETemplate', component_type: string, template_type: string, template_data: string, version_date: any, version_no: number, version_user: string } };

export type UpdateTeTemplateMutationVariables = Exact<{
  data: TeTemplateInput;
}>;


export type UpdateTeTemplateMutation = { __typename?: 'Mutation', updateTETemplate: { __typename?: 'TETemplate', component_type: string, template_type: string, template_data: string, version_date: any, version_no: number, version_user: string } };

export type DeleteTeTemplateMutationVariables = Exact<{
  component_type: Scalars['String'];
  template_type: Scalars['String'];
}>;


export type DeleteTeTemplateMutation = { __typename?: 'Mutation', deleteTETemplate: { __typename?: 'TETemplate', component_type: string, template_type: string, template_data: string, version_date: any, version_no: number, version_user: string } };

export const KanbanTaskFragmentDoc = gql`
    fragment KanbanTask on kb_task {
  party_ref
  parentId
  Id
  assignee
  due_date
  start_date
  description
  dependencies
  rankid
  task_id
  title
  assignee
  estimate
  status
  summary
  classname
  priority
  type
  color
  tags
  classname
}
    `;
export const KanbanTasksDocument = gql`
    query KanbanTasks {
  KanbanTask {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTasksGQL extends Apollo.Query<KanbanTasksQuery, KanbanTasksQueryVariables> {
    document = KanbanTasksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanPriorityDocument = gql`
    query KanbanPriority {
  KanbanPriority {
    priority
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanPriorityGQL extends Apollo.Query<KanbanPriorityQuery, KanbanPriorityQueryVariables> {
    document = KanbanPriorityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTypeDocument = gql`
    query KanbanType {
  KanbanType {
    type
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTypeGQL extends Apollo.Query<KanbanTypeQuery, KanbanTypeQueryVariables> {
    document = KanbanTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanStatusDocument = gql`
    query KanbanStatus {
  KanbanStatus {
    status
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanStatusGQL extends Apollo.Query<KanbanStatusQuery, KanbanStatusQueryVariables> {
    document = KanbanStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByTaskIdDocument = gql`
    query KanbanTaskByTaskId($task_id: String!) {
  KanbanByTaskId(task_id: $task_id) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByTaskIdGQL extends Apollo.Query<KanbanTaskByTaskIdQuery, KanbanTaskByTaskIdQueryVariables> {
    document = KanbanTaskByTaskIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByStatusDocument = gql`
    query KanbanTaskByStatus($status: String!) {
  KanbanTaskByStatus(status: $status) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByStatusGQL extends Apollo.Query<KanbanTaskByStatusQuery, KanbanTaskByStatusQueryVariables> {
    document = KanbanTaskByStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanByTaskIdDocument = gql`
    query KanbanByTaskId($task_id: String!) {
  KanbanByTaskId(task_id: $task_id) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanByTaskIdGQL extends Apollo.Query<KanbanByTaskIdQuery, KanbanByTaskIdQueryVariables> {
    document = KanbanByTaskIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByRefAndStatusDocument = gql`
    query KanbanTaskByRefAndStatus($partyRef: String!, $status: String!) {
  KanbanTaskByRefAndStatus(partyRef: $partyRef, status: $status) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByRefAndStatusGQL extends Apollo.Query<KanbanTaskByRefAndStatusQuery, KanbanTaskByRefAndStatusQueryVariables> {
    document = KanbanTaskByRefAndStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByRefDocument = gql`
    query KanbanTaskByRef($party_ref: String!) {
  KanbanTaskByRef(partyRef: $party_ref) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByRefGQL extends Apollo.Query<KanbanTaskByRefQuery, KanbanTaskByRefQueryVariables> {
    document = KanbanTaskByRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanByStatusDocument = gql`
    query KanbanByStatus($status: String!) {
  KanbanTaskByStatus(status: $status) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanByStatusGQL extends Apollo.Query<KanbanByStatusQuery, KanbanByStatusQueryVariables> {
    document = KanbanByStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateKanbanTaskDocument = gql`
    mutation createKanbanTask($taskInput: KanbanInputs!) {
  createTask(data: $taskInput) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateKanbanTaskGQL extends Apollo.Mutation<CreateKanbanTaskMutation, CreateKanbanTaskMutationVariables> {
    document = CreateKanbanTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTaskDocument = gql`
    mutation UpdateTask($task_id: String!, $taskInput: KanbanInputs!) {
  updateTask(task_id: $task_id, newData: $taskInput) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTaskGQL extends Apollo.Mutation<UpdateTaskMutation, UpdateTaskMutationVariables> {
    document = UpdateTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteTaskDocument = gql`
    mutation deleteTask($task_id: String!) {
  deleteTask(task_id: $task_id) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTaskGQL extends Apollo.Mutation<DeleteTaskMutation, DeleteTaskMutationVariables> {
    document = DeleteTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanFirstTaskDocument = gql`
    query KanbanFirstTask($party_ref: String!) {
  KanbanFirstTask(party_ref: $party_ref) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanFirstTaskGQL extends Apollo.Query<KanbanFirstTaskQuery, KanbanFirstTaskQueryVariables> {
    document = KanbanFirstTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTaskParentIdDocument = gql`
    mutation updateTaskParentId($task_id: String!, $parentId: Int!) {
  updateTaskParentId(task_id: $task_id, parentId: $parentId) {
    task_id
    parentId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTaskParentIdGQL extends Apollo.Mutation<UpdateTaskParentIdMutation, UpdateTaskParentIdMutationVariables> {
    document = UpdateTaskParentIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersDocument = gql`
    query users {
  users {
    createdAt
    client_ref
    updatedAt
    userid
    email
    firstname
    lastname
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpDocument = gql`
    mutation SignUp($data: UserInput!) {
  signup(data: $data) {
    createdAt
    client_ref
    updatedAt
    userid
    email
    firstname
    lastname
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetPasswordDocument = gql`
    mutation resetPassword($data: LoginInput!) {
  resetPassword(data: $data) {
    createdAt
    client_ref
    updatedAt
    userid
    email
    firstname
    lastname
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordGQL extends Apollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> {
    document = ResetPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUserDocument = gql`
    mutation deleteUser($userid: String!) {
  deleteUser(userid: $userid) {
    userid
    email
    firstname
    lastname
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
    document = DeleteUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyDocument = gql`
    query party($client_ref: String!, $party_ref: String!) {
  party(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    party_type
    party_short_name
    party_long_name
    party_extra_long_name
    active_ind
    has_swift_config
    has_netting_config
    version_no
    version_date
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyGQL extends Apollo.Query<PartyQuery, PartyQueryVariables> {
    document = PartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyByTypeDocument = gql`
    query partyByType($party_type: String!, $client_ref: String!) {
  partyByType(party_type: $party_type, client_ref: $client_ref) {
    party_ref
    client_ref
    party_type
    party_short_name
    party_long_name
    party_extra_long_name
    active_ind
    has_swift_config
    has_netting_config
    version_no
    version_date
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyByTypeGQL extends Apollo.Query<PartyByTypeQuery, PartyByTypeQueryVariables> {
    document = PartyByTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FirstPartyByTypeDocument = gql`
    query firstPartyByType($party_type: String!, $client_ref: String!) {
  firstPartyByType(party_type: $party_type, client_ref: $client_ref) {
    party_ref
    client_ref
    party_type
    party_short_name
    party_long_name
    party_extra_long_name
    active_ind
    has_swift_config
    has_netting_config
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FirstPartyByTypeGQL extends Apollo.Query<FirstPartyByTypeQuery, FirstPartyByTypeQueryVariables> {
    document = FirstPartyByTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyDocument = gql`
    mutation createParty($data: PartyInput!) {
  createParty(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyGQL extends Apollo.Mutation<CreatePartyMutation, CreatePartyMutationVariables> {
    document = CreatePartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyDocument = gql`
    mutation updateParty($data: PartyInput!) {
  updateParty(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyGQL extends Apollo.Mutation<UpdatePartyMutation, UpdatePartyMutationVariables> {
    document = UpdatePartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyTreeDocument = gql`
    mutation deletePartyTree($client_ref: String!, $party_ref: String!) {
  deletePartyTree(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyTreeGQL extends Apollo.Mutation<DeletePartyTreeMutation, DeletePartyTreeMutationVariables> {
    document = DeletePartyTreeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyExtRefDocument = gql`
    query partyExtRef($client_ref: String!, $party_ref: String!) {
  partyExtRef(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    party_ext_ref
    party_ext_ref_type
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyExtRefGQL extends Apollo.Query<PartyExtRefQuery, PartyExtRefQueryVariables> {
    document = PartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyExtRefDocument = gql`
    mutation createPartyExtRef($data: PartyExtRefInput!) {
  createPartyExtRef(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyExtRefGQL extends Apollo.Mutation<CreatePartyExtRefMutation, CreatePartyExtRefMutationVariables> {
    document = CreatePartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyExtRefDocument = gql`
    mutation updatePartyExtRef($data: PartyExtRefInput!) {
  updatePartyExtRef(data: $data) {
    party_ref
    party_ext_ref
    party_ext_ref_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyExtRefGQL extends Apollo.Mutation<UpdatePartyExtRefMutation, UpdatePartyExtRefMutationVariables> {
    document = UpdatePartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyExtRefDocument = gql`
    mutation deletePartyExtRef($party_ref: String!, $client_ref: String!, $party_ext_ref_type: String!) {
  deletePartyExtRef(
    party_ref: $party_ref
    client_ref: $client_ref
    party_ext_ref_type: $party_ext_ref_type
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyExtRefGQL extends Apollo.Mutation<DeletePartyExtRefMutation, DeletePartyExtRefMutationVariables> {
    document = DeletePartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyClassDocument = gql`
    query partyClass($client_ref: String!, $party_ref: String!) {
  partyClassification(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    class_code
    class_type
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyClassGQL extends Apollo.Query<PartyClassQuery, PartyClassQueryVariables> {
    document = PartyClassDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyClassificationDocument = gql`
    mutation createPartyClassification($data: PartyClassInput!) {
  createPartyClassification(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyClassificationGQL extends Apollo.Mutation<CreatePartyClassificationMutation, CreatePartyClassificationMutationVariables> {
    document = CreatePartyClassificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyClassificationDocument = gql`
    mutation updatePartyClassification($data: PartyClassInput!) {
  updatePartyClassification(data: $data) {
    party_ref
    class_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyClassificationGQL extends Apollo.Mutation<UpdatePartyClassificationMutation, UpdatePartyClassificationMutationVariables> {
    document = UpdatePartyClassificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyClassificationDocument = gql`
    mutation deletePartyClassification($party_ref: String!, $client_ref: String!, $class_type: String!) {
  deletePartyClassification(
    party_ref: $party_ref
    client_ref: $client_ref
    class_type: $class_type
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyClassificationGQL extends Apollo.Mutation<DeletePartyClassificationMutation, DeletePartyClassificationMutationVariables> {
    document = DeletePartyClassificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyFlagDocument = gql`
    query partyFlag($client_ref: String!, $party_ref: String!) {
  partyFlag(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    flag_type
    flag_code
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyFlagGQL extends Apollo.Query<PartyFlagQuery, PartyFlagQueryVariables> {
    document = PartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyFlagDocument = gql`
    mutation createPartyFlag($data: PartyFlagInput!) {
  createPartyFlag(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyFlagGQL extends Apollo.Mutation<CreatePartyFlagMutation, CreatePartyFlagMutationVariables> {
    document = CreatePartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyFlagDocument = gql`
    mutation updatePartyFlag($data: PartyFlagInput!) {
  updatePartyFlag(data: $data) {
    party_ref
    flag_type
    flag_code
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyFlagGQL extends Apollo.Mutation<UpdatePartyFlagMutation, UpdatePartyFlagMutationVariables> {
    document = UpdatePartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyFlagDocument = gql`
    mutation deletePartyFlag($party_ref: String!, $client_ref: String!, $flag_type: Int!, $flag_code: String!) {
  deletePartyFlag(
    party_ref: $party_ref
    client_ref: $client_ref
    flag_type: $flag_type
    flag_code: $flag_code
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyFlagGQL extends Apollo.Mutation<DeletePartyFlagMutation, DeletePartyFlagMutationVariables> {
    document = DeletePartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyNarrativeDocument = gql`
    query partyNarrative($client_ref: String!, $party_ref: String!) {
  partyNarrative(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    narr_type
    narrative
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyNarrativeGQL extends Apollo.Query<PartyNarrativeQuery, PartyNarrativeQueryVariables> {
    document = PartyNarrativeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyNarrativeDocument = gql`
    mutation createPartyNarrative($data: PartyNarrativeInput!) {
  createPartyNarrative(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyNarrativeGQL extends Apollo.Mutation<CreatePartyNarrativeMutation, CreatePartyNarrativeMutationVariables> {
    document = CreatePartyNarrativeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyNarrativeDocument = gql`
    mutation updatePartyNarrative($data: PartyNarrativeInput!) {
  updatePartyNarrative(data: $data) {
    party_ref
    narr_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyNarrativeGQL extends Apollo.Mutation<UpdatePartyNarrativeMutation, UpdatePartyNarrativeMutationVariables> {
    document = UpdatePartyNarrativeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyNarrativeDocument = gql`
    mutation deletePartyNarrative($party_ref: String!, $client_ref: String!, $narr_type: String!) {
  deletePartyNarrative(
    party_ref: $party_ref
    client_ref: $client_ref
    narr_type: $narr_type
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyNarrativeGQL extends Apollo.Mutation<DeletePartyNarrativeMutation, DeletePartyNarrativeMutationVariables> {
    document = DeletePartyNarrativeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyInstrDocument = gql`
    query partyInstr($client_ref: String!, $party_ref: String!) {
  partyInstr(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    instr_ref
    instr_ref_type
    instr_type
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyInstrGQL extends Apollo.Query<PartyInstrQuery, PartyInstrQueryVariables> {
    document = PartyInstrDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyInstrumentDocument = gql`
    mutation createPartyInstrument($data: PartyInstrInput!) {
  createPartyInstrument(data: $data) {
    party_ref
    instr_ref
    instr_ref_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyInstrumentGQL extends Apollo.Mutation<CreatePartyInstrumentMutation, CreatePartyInstrumentMutationVariables> {
    document = CreatePartyInstrumentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyInstrumentDocument = gql`
    mutation updatePartyInstrument($data: PartyInstrInput!) {
  updatePartyInstrument(data: $data) {
    party_ref
    instr_ref
    instr_ref_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyInstrumentGQL extends Apollo.Mutation<UpdatePartyInstrumentMutation, UpdatePartyInstrumentMutationVariables> {
    document = UpdatePartyInstrumentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyInstrumentDocument = gql`
    mutation deletePartyInstrument($party_ref: String!, $client_ref: String!, $instr_type: String!, $instr_ref_type: String!, $instr_ref: String!) {
  deletePartyInstrument(
    client_ref: $client_ref
    party_ref: $party_ref
    instr_type: $instr_type
    instr_ref_type: $instr_ref_type
    instr_ref: $instr_ref
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyInstrumentGQL extends Apollo.Mutation<DeletePartyInstrumentMutation, DeletePartyInstrumentMutationVariables> {
    document = DeletePartyInstrumentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyAssocDocument = gql`
    query partyAssoc($client_ref: String!, $party_ref: String!) {
  partyAssoc(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    assoc_type
    assoc_party_ref
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyAssocGQL extends Apollo.Query<PartyAssocQuery, PartyAssocQueryVariables> {
    document = PartyAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyAssocDocument = gql`
    mutation createPartyAssoc($data: PartyAssocInput!) {
  createPartyAssoc(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyAssocGQL extends Apollo.Mutation<CreatePartyAssocMutation, CreatePartyAssocMutationVariables> {
    document = CreatePartyAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyAssocDocument = gql`
    mutation updatePartyAssoc($data: PartyAssocInput!) {
  updatePartyAssoc(data: $data) {
    assoc_type
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyAssocGQL extends Apollo.Mutation<UpdatePartyAssocMutation, UpdatePartyAssocMutationVariables> {
    document = UpdatePartyAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyAssocDocument = gql`
    mutation deletePartyAssoc($party_ref: String!, $client_ref: String!, $assoc_type: String!) {
  deletePartyAssoc(
    party_ref: $party_ref
    client_ref: $client_ref
    assoc_type: $assoc_type
  ) {
    assoc_type
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyAssocGQL extends Apollo.Mutation<DeletePartyAssocMutation, DeletePartyAssocMutationVariables> {
    document = DeletePartyAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartySsiDocument = gql`
    query partySSI($client_ref: String!, $party_ref: String!) {
  partySSI(client_ref: $client_ref, party_ref: $party_ref) {
    account_name
    account_no
    active_ind
    comms_service
    dacc_ref
    depo_ref
    depot_type
    ccy
    depot_alias
    depot_descr
    party_ref
    client_ref
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartySsiGQL extends Apollo.Query<PartySsiQuery, PartySsiQueryVariables> {
    document = PartySsiDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartySsiDocument = gql`
    mutation createPartySSI($data: PartySSIInput!) {
  createPartySSI(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartySsiGQL extends Apollo.Mutation<CreatePartySsiMutation, CreatePartySsiMutationVariables> {
    document = CreatePartySsiDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartySsiDocument = gql`
    mutation updatePartySSI($data: PartySSIInput!) {
  updatePartySSI(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartySsiGQL extends Apollo.Mutation<UpdatePartySsiMutation, UpdatePartySsiMutationVariables> {
    document = UpdatePartySsiDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartySsiDocument = gql`
    mutation deletePartySSI($client_ref: String!, $deleteSsiDepotAlias: String!, $party_ref: String!) {
  deletePartySSI(
    client_ref: $client_ref
    depot_alias: $deleteSsiDepotAlias
    party_ref: $party_ref
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartySsiGQL extends Apollo.Mutation<DeletePartySsiMutation, DeletePartySsiMutationVariables> {
    document = DeletePartySsiDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyDateDocument = gql`
    query partyDate($client_ref: String!, $party_ref: String!) {
  partyDate(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    date_type
    date
    time
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyDateGQL extends Apollo.Query<PartyDateQuery, PartyDateQueryVariables> {
    document = PartyDateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyDateDocument = gql`
    mutation createPartyDate($data: PartyDateInput!) {
  createPartyDate(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyDateGQL extends Apollo.Mutation<CreatePartyDateMutation, CreatePartyDateMutationVariables> {
    document = CreatePartyDateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyDateDocument = gql`
    mutation updatePartyDate($data: PartyDateInput!) {
  updatePartyDate(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyDateGQL extends Apollo.Mutation<UpdatePartyDateMutation, UpdatePartyDateMutationVariables> {
    document = UpdatePartyDateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyDateDocument = gql`
    mutation deletePartyDate($party_ref: String!, $client_ref: String!, $date_type: String!) {
  deletePartyDate(
    party_ref: $party_ref
    client_ref: $client_ref
    date_type: $date_type
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyDateGQL extends Apollo.Mutation<DeletePartyDateMutation, DeletePartyDateMutationVariables> {
    document = DeletePartyDateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyAddressDocument = gql`
    query partyAddress($client_ref: String!, $party_ref: String!) {
  partyAddress(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    addr_type
    contact_name
    contact_title
    addr_line1
    addr_line2
    addr_line3
    addr_line4
    addr_line5
    addr_line6
    post_code
    int_dial_code
    phone_no
    fax_no
    email
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyAddressGQL extends Apollo.Query<PartyAddressQuery, PartyAddressQueryVariables> {
    document = PartyAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyAddressDocument = gql`
    mutation createPartyAddress($data: PartyAddressInput!) {
  createPartyAddress(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyAddressGQL extends Apollo.Mutation<CreatePartyAddressMutation, CreatePartyAddressMutationVariables> {
    document = CreatePartyAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyAddressDocument = gql`
    mutation updatePartyAddress($data: PartyAddressInput!) {
  updatePartyAddress(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyAddressGQL extends Apollo.Mutation<UpdatePartyAddressMutation, UpdatePartyAddressMutationVariables> {
    document = UpdatePartyAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyAddressDocument = gql`
    mutation deletePartyAddress($party_ref: String!, $client_ref: String!, $addr_type: String!) {
  deletePartyAddress(
    party_ref: $party_ref
    client_ref: $client_ref
    addr_type: $addr_type
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyAddressGQL extends Apollo.Mutation<DeletePartyAddressMutation, DeletePartyAddressMutationVariables> {
    document = DeletePartyAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyTemplateDocument = gql`
    query partyTemplate($client_ref: String!, $party_ref: String!) {
  partyTemplate(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    template_party_ref
    party_short_name
    party_long_name
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyTemplateGQL extends Apollo.Query<PartyTemplateQuery, PartyTemplateQueryVariables> {
    document = PartyTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartyTemplateDocument = gql`
    mutation createPartyTemplate($data: PartyTemplateInput!) {
  createPartyTemplate(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyTemplateGQL extends Apollo.Mutation<CreatePartyTemplateMutation, CreatePartyTemplateMutationVariables> {
    document = CreatePartyTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartyTemplateDocument = gql`
    mutation updatePartyTemplate($data: PartyTemplateInput!) {
  updatePartyTemplate(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartyTemplateGQL extends Apollo.Mutation<UpdatePartyTemplateMutation, UpdatePartyTemplateMutationVariables> {
    document = UpdatePartyTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartyTemplateDocument = gql`
    mutation deletePartyTemplate($client_ref: String!, $party_ref: String!) {
  deletePartyTemplate(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyTemplateGQL extends Apollo.Mutation<DeletePartyTemplateMutation, DeletePartyTemplateMutationVariables> {
    document = DeletePartyTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartySwiftDocument = gql`
    query partySwift($client_ref: String!, $party_ref: String!) {
  partySwift(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    company_name
    branch_code
    logical_term_id
    queue_mgr
    incoming_queue
    outgoing_queue
    channel
    host
    port_number
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartySwiftGQL extends Apollo.Query<PartySwiftQuery, PartySwiftQueryVariables> {
    document = PartySwiftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePartySwiftDocument = gql`
    mutation createPartySwift($data: PartySwiftInput!) {
  createPartySwift(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartySwiftGQL extends Apollo.Mutation<CreatePartySwiftMutation, CreatePartySwiftMutationVariables> {
    document = CreatePartySwiftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePartySwiftDocument = gql`
    mutation updatePartySwift($data: PartySwiftInput!) {
  updatePartySwift(data: $data) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePartySwiftGQL extends Apollo.Mutation<UpdatePartySwiftMutation, UpdatePartySwiftMutationVariables> {
    document = UpdatePartySwiftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePartySwiftDocument = gql`
    mutation deletePartySwift($client_ref: String!, $party_ref: String!) {
  deletePartySwift(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartySwiftGQL extends Apollo.Mutation<DeletePartySwiftMutation, DeletePartySwiftMutationVariables> {
    document = DeletePartySwiftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyClassAssocDocument = gql`
    query partyClassAssoc($client_ref: String!, $party_ref: String!) {
  partyClassAssoc(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    class_assoc_code
    code_type
    class_1
    code_1
    class_2
    code_2
    applied
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyClassAssocGQL extends Apollo.Query<PartyClassAssocQuery, PartyClassAssocQueryVariables> {
    document = PartyClassAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateClassAssocDocument = gql`
    mutation createClassAssoc($data: ClassAssocInput!) {
  createClassAssoc(data: $data) {
    party_ref
    class_assoc_code
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateClassAssocGQL extends Apollo.Mutation<CreateClassAssocMutation, CreateClassAssocMutationVariables> {
    document = CreateClassAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateClassAssocDocument = gql`
    mutation updateClassAssoc($data: ClassAssocInput!) {
  updateClassAssoc(data: $data) {
    party_ref
    class_assoc_code
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateClassAssocGQL extends Apollo.Mutation<UpdateClassAssocMutation, UpdateClassAssocMutationVariables> {
    document = UpdateClassAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteClassAssocDocument = gql`
    mutation deleteClassAssoc($client_ref: String!, $party_ref: String!, $class_assoc_code: String!, $code_type: String!, $class_1: Int!, $code_1: String!, $class_2: Int!) {
  deleteClassAssoc(
    client_ref: $client_ref
    party_ref: $party_ref
    class_assoc_code: $class_assoc_code
    code_type: $code_type
    class_1: $class_1
    code_1: $code_1
    class_2: $class_2
  ) {
    party_ref
    class_assoc_code
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteClassAssocGQL extends Apollo.Mutation<DeleteClassAssocMutation, DeleteClassAssocMutationVariables> {
    document = DeleteClassAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PartyNettingDocument = gql`
    query partyNetting($client_ref: String!, $party_ref: String!) {
  partyNetting(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    net_driver
    settle_code
    transaction_type
    trade_group
    late_rule
    net_schedule_code
    date_type
    buy_and_sell_flag
    net_party_ref
    net_book
    override_net_book
    secondary_party
    settle_terms
    operation_type
    net_primary
    primary_comp_service
    primary_secp_service
    net_secondary
    secondary_comp_service
    secondary_secp_service
    primary_instr
    primary_comp_alias
    primary_depot_type
    primary_party_ref
    primary_secp_alias
    settle_instr
    secondary_comp_alias
    secondary_depot_type
    secondary_party_ref
    secondary_secp_alias
    market_party
    start_date_type
    start_offset_ind
    start_offset_code
    end_date_type
    end_offset_ind
    end_offset_code
    net_cash_when_zero_stock
    split_buy_sell
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyNettingGQL extends Apollo.Query<PartyNettingQuery, PartyNettingQueryVariables> {
    document = PartyNettingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateNettingDocument = gql`
    mutation createNetting($data: NettingInput!) {
  createNetting(data: $data) {
    party_ref
    net_driver
    settle_code
    transaction_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNettingGQL extends Apollo.Mutation<CreateNettingMutation, CreateNettingMutationVariables> {
    document = CreateNettingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateNettingDocument = gql`
    mutation updateNetting($data: NettingInput!) {
  updateNetting(data: $data) {
    party_ref
    net_driver
    settle_code
    transaction_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateNettingGQL extends Apollo.Mutation<UpdateNettingMutation, UpdateNettingMutationVariables> {
    document = UpdateNettingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteNettingDocument = gql`
    mutation deleteNetting($client_ref: String!, $net_driver: String!, $party_ref: String!, $settle_code: String!, $transaction_type: String!) {
  deleteNetting(
    client_ref: $client_ref
    net_driver: $net_driver
    party_ref: $party_ref
    settle_code: $settle_code
    transaction_type: $transaction_type
  ) {
    party_ref
    net_driver
    settle_code
    transaction_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNettingGQL extends Apollo.Mutation<DeleteNettingMutation, DeleteNettingMutationVariables> {
    document = DeleteNettingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GlossSchedulerDocument = gql`
    query glossScheduler($client_ref: String!) {
  glossScheduler(client_ref: $client_ref) {
    client_ref
    active_ind_p2k
    batch_size
    bus_day
    database_code
    database_type
    dst_region_code
    due_date_time
    end_by_interval
    end_by_time
    event_ref
    frequency_end_time
    frequency_interval
    frequency_start_time
    frequency_unit
    holiday_id
    msg_type
    sql_db_code
    start_by_interval
    start_by_time
    start_by_unit
    supercede
    use_current_date
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GlossSchedulerGQL extends Apollo.Query<GlossSchedulerQuery, GlossSchedulerQueryVariables> {
    document = GlossSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateglossSchedulerDocument = gql`
    mutation createglossScheduler($data: GlossSchedulerInput!) {
  createglossScheduler(data: $data) {
    event_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateglossSchedulerGQL extends Apollo.Mutation<CreateglossSchedulerMutation, CreateglossSchedulerMutationVariables> {
    document = CreateglossSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateglossSchedulerDocument = gql`
    mutation updateglossScheduler($client_ref: String!, $msg_type: Int!, $event_ref: String!, $due_date_time: Date!, $database_code: String!, $data: GlossSchedulerInput!) {
  updateglossScheduler(
    client_ref: $client_ref
    msg_type: $msg_type
    event_ref: $event_ref
    due_date_time: $due_date_time
    database_code: $database_code
    data: $data
  ) {
    event_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateglossSchedulerGQL extends Apollo.Mutation<UpdateglossSchedulerMutation, UpdateglossSchedulerMutationVariables> {
    document = UpdateglossSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteglossSchedulerDocument = gql`
    mutation deleteglossScheduler($client_ref: String!, $msg_type: Int!, $event_ref: String!, $due_date_time: Date!, $database_code: String!) {
  deleteglossScheduler(
    client_ref: $client_ref
    msg_type: $msg_type
    event_ref: $event_ref
    due_date_time: $due_date_time
    database_code: $database_code
  ) {
    event_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteglossSchedulerGQL extends Apollo.Mutation<DeleteglossSchedulerMutation, DeleteglossSchedulerMutationVariables> {
    document = DeleteglossSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BackUpPartyDataDocument = gql`
    mutation backUpPartyData($client_ref: String!, $party_ref: String!) {
  backUpPartyData(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BackUpPartyDataGQL extends Apollo.Mutation<BackUpPartyDataMutation, BackUpPartyDataMutationVariables> {
    document = BackUpPartyDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RestorePartyDataDocument = gql`
    mutation restorePartyData($party_ref: String!, $client_ref: String!, $version_no: Int!) {
  restorePartyData(
    party_ref: $party_ref
    client_ref: $client_ref
    version_no: $version_no
  ) {
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RestorePartyDataGQL extends Apollo.Mutation<RestorePartyDataMutation, RestorePartyDataMutationVariables> {
    document = RestorePartyDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SavePartyStaticpushedToGlossDocument = gql`
    mutation savePartyStaticpushedToGloss($party_ref: String!, $client_ref: String!, $environment: String!) {
  savePartyStaticpushedToGloss(
    party_ref: $party_ref
    client_ref: $client_ref
    environment: $environment
  ) {
    party_ref
    party_type
    party_short_name
    party_long_name
    party_extra_long_name
    active_ind
    has_swift_config
    has_netting_config
    version_no
    version_date
    version_user
    party_addr {
      party_ref
      addr_type
      contact_name
      contact_title
      addr_line1
      addr_line2
      addr_line3
      addr_line4
      addr_line5
      addr_line6
      post_code
      int_dial_code
      phone_no
      fax_no
      email
    }
    party_assoc {
      party_ref
      assoc_type
      assoc_party_ref
    }
    party_classification {
      party_ref
      class_type
      class_code
    }
    party_date {
      party_ref
      date_type
      date
      time
    }
    party_ext_ref {
      party_ref
      party_ext_ref_type
      party_ext_ref
    }
    party_flag {
      party_ref
      flag_type
      flag_code
    }
    party_instr {
      party_ref
      instr_type
      instr_ref_type
      instr_ref
    }
    party_narrative {
      party_ref
      narr_type
      narrative
    }
    party_template {
      party_ref
      template_party_ref
      party_short_name
      party_long_name
      version_no
      version_date
      version_user
    }
    party_class_assoc {
      party_ref
      class_assoc_code
      code_type
      class_1
      code_1
      class_2
      code_2
      applied
      version_no
      version_date
      version_user
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SavePartyStaticpushedToGlossGQL extends Apollo.Mutation<SavePartyStaticpushedToGlossMutation, SavePartyStaticpushedToGlossMutationVariables> {
    document = SavePartyStaticpushedToGlossDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveClassAssocStaticpushedToGlossDocument = gql`
    mutation saveClassAssocStaticpushedToGloss($party_ref: String!, $client_ref: String!, $environment: String!) {
  saveClassAssocStaticpushedToGloss(
    party_ref: $party_ref
    client_ref: $client_ref
    environment: $environment
  ) {
    party_ref
    class_assoc_code
    code_type
    class_1
    code_1
    class_2
    code_2
    applied
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveClassAssocStaticpushedToGlossGQL extends Apollo.Mutation<SaveClassAssocStaticpushedToGlossMutation, SaveClassAssocStaticpushedToGlossMutationVariables> {
    document = SaveClassAssocStaticpushedToGlossDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveNettingStaticpushedToGlossDocument = gql`
    mutation saveNettingStaticpushedToGloss($party_ref: String!, $client_ref: String!, $environment: String!) {
  saveNettingStaticpushedToGloss(
    party_ref: $party_ref
    client_ref: $client_ref
    environment: $environment
  ) {
    party_ref
    net_driver
    settle_code
    transaction_type
    trade_group
    late_rule
    net_schedule_code
    date_type
    buy_and_sell_flag
    net_party_ref
    net_book
    override_net_book
    secondary_party
    settle_terms
    operation_type
    net_primary
    primary_comp_service
    primary_secp_service
    net_secondary
    secondary_comp_service
    secondary_secp_service
    primary_instr
    primary_comp_alias
    primary_depot_type
    primary_party_ref
    primary_secp_alias
    settle_instr
    secondary_comp_alias
    secondary_depot_type
    secondary_party_ref
    secondary_secp_alias
    market_party
    start_date_type
    start_offset_ind
    start_offset_code
    end_date_type
    end_offset_ind
    end_offset_code
    net_cash_when_zero_stock
    split_buy_sell
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveNettingStaticpushedToGlossGQL extends Apollo.Mutation<SaveNettingStaticpushedToGlossMutation, SaveNettingStaticpushedToGlossMutationVariables> {
    document = SaveNettingStaticpushedToGlossDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClonePartyDocument = gql`
    mutation cloneParty($party_ref: String!, $client_ref: String!, $new_party_ref: String!, $new_client_ref: String!) {
  cloneParty(
    party_ref: $party_ref
    client_ref: $client_ref
    new_party_ref: $new_party_ref
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClonePartyGQL extends Apollo.Mutation<ClonePartyMutation, ClonePartyMutationVariables> {
    document = ClonePartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloneClassAssocDocument = gql`
    mutation cloneClassAssoc($party_ref: String!, $client_ref: String!, $new_party_ref: String!, $new_client_ref: String!) {
  cloneClassAssoc(
    party_ref: $party_ref
    client_ref: $client_ref
    new_party_ref: $new_party_ref
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloneClassAssocGQL extends Apollo.Mutation<CloneClassAssocMutation, CloneClassAssocMutationVariables> {
    document = CloneClassAssocDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloneSwiftPartyDocument = gql`
    mutation cloneSwiftParty($party_ref: String!, $client_ref: String!, $new_party_ref: String!, $new_client_ref: String!) {
  cloneSwiftParty(
    party_ref: $party_ref
    client_ref: $client_ref
    new_party_ref: $new_party_ref
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloneSwiftPartyGQL extends Apollo.Mutation<CloneSwiftPartyMutation, CloneSwiftPartyMutationVariables> {
    document = CloneSwiftPartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloneNettingDataDocument = gql`
    mutation cloneNettingData($party_ref: String!, $client_ref: String!, $new_party_ref: String!, $new_client_ref: String!) {
  cloneNettingData(
    party_ref: $party_ref
    client_ref: $client_ref
    new_party_ref: $new_party_ref
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloneNettingDataGQL extends Apollo.Mutation<CloneNettingDataMutation, CloneNettingDataMutationVariables> {
    document = CloneNettingDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GlossPartyAuditDocument = gql`
    query glossPartyAudit($client_ref: String!, $party_ref: String!) {
  glossPartyAudit(client_ref: $client_ref, party_ref: $party_ref) {
    party_ref
    client_ref
    party_data
    party_ext_ref_data
    party_classification_data
    party_flag_data
    party_narrative_data
    party_assoc_data
    party_instr_data
    party_ssi_data
    party_date_data
    party_address_data
    party_template_data
    version_no
    version_date
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GlossPartyAuditGQL extends Apollo.Query<GlossPartyAuditQuery, GlossPartyAuditQueryVariables> {
    document = GlossPartyAuditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloneglossSchedulerDocument = gql`
    mutation cloneglossScheduler($client_ref: String!, $new_client_ref: String!) {
  cloneglossScheduler(client_ref: $client_ref, new_client_ref: $new_client_ref)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloneglossSchedulerGQL extends Apollo.Mutation<CloneglossSchedulerMutation, CloneglossSchedulerMutationVariables> {
    document = CloneglossSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GlossenvironmentsDocument = gql`
    query glossenvironments($client_ref: String!) {
  glossenvironments(client_ref: $client_ref) {
    environment
    client_ref
    description
    sst_glossapi_url
    active
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GlossenvironmentsGQL extends Apollo.Query<GlossenvironmentsQuery, GlossenvironmentsQueryVariables> {
    document = GlossenvironmentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClientsDocument = gql`
    query clients {
  clients {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClientsGQL extends Apollo.Query<ClientsQuery, ClientsQueryVariables> {
    document = ClientsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmPartyByClientDocument = gql`
    query dpmPartyByClient($client_ref: String!, $component_type: String!) {
  dpmPartyByClient(client_ref: $client_ref, component_type: $component_type) {
    company_ref
    party_ref
    client_ref
    component_type
    party_type
    inactive
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmPartyByClientGQL extends Apollo.Query<DpmPartyByClientQuery, DpmPartyByClientQueryVariables> {
    document = DpmPartyByClientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmPartyByTypeDocument = gql`
    query dpmPartyByType($client_ref: String!, $party_type: String!, $component_type: String!) {
  dpmPartyByType(
    client_ref: $client_ref
    party_type: $party_type
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    party_type
    inactive
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmPartyByTypeGQL extends Apollo.Query<DpmPartyByTypeQuery, DpmPartyByTypeQueryVariables> {
    document = DpmPartyByTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FirstdpmPartyByClientDocument = gql`
    query firstdpmPartyByClient($client_ref: String!, $component_type: String!) {
  firstdpmPartyByClient(client_ref: $client_ref, component_type: $component_type) {
    company_ref
    party_ref
    client_ref
    component_type
    party_type
    inactive
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FirstdpmPartyByClientGQL extends Apollo.Query<FirstdpmPartyByClientQuery, FirstdpmPartyByClientQueryVariables> {
    document = FirstdpmPartyByClientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmPartyDocument = gql`
    query dpmParty($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmParty(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    party_type
    inactive
    dpm_party_ext_ref {
      company_ref
      party_ref
      party_ext_ref_type
      party_ext_ref
      version_no
      version_user
    }
    dpm_party_flag {
      company_ref
      party_ref
      party_flag_type
      party_flag
      version_no
      version_user
    }
    dpm_account_def {
      company_ref
      party_ref
      account_no
      account_type
      inactive
      version_no
      version_user
    }
    dpm_account_ext_ref {
      company_ref
      party_ref
      account_no
      account_ext_ref_type
      account_ext_ref
      version_no
      version_user
    }
    dpm_account_flag {
      company_ref
      party_ref
      account_no
      account_flag_type
      account_flag
      version_no
      version_user
    }
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmPartyGQL extends Apollo.Query<DpmPartyQuery, DpmPartyQueryVariables> {
    document = DpmPartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmPartyDocument = gql`
    mutation createdpmParty($data: DpmPartyDefInput!) {
  createdpmParty(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmPartyGQL extends Apollo.Mutation<CreatedpmPartyMutation, CreatedpmPartyMutationVariables> {
    document = CreatedpmPartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmPartyDocument = gql`
    mutation updatedpmParty($data: DpmPartyDefInput!) {
  updatedpmParty(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmPartyGQL extends Apollo.Mutation<UpdatedpmPartyMutation, UpdatedpmPartyMutationVariables> {
    document = UpdatedpmPartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmPartyTreeDocument = gql`
    mutation deletedpmPartyTree($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  deletedpmPartyTree(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmPartyTreeGQL extends Apollo.Mutation<DeletedpmPartyTreeMutation, DeletedpmPartyTreeMutationVariables> {
    document = DeletedpmPartyTreeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmPartyExtRefDocument = gql`
    query dpmPartyExtRef($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmPartyExtRef(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    party_ext_ref_type
    party_ext_ref
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmPartyExtRefGQL extends Apollo.Query<DpmPartyExtRefQuery, DpmPartyExtRefQueryVariables> {
    document = DpmPartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmPartyExtRefDocument = gql`
    mutation createdpmPartyExtRef($data: DpmPartyExtRefInput!) {
  createdpmPartyExtRef(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmPartyExtRefGQL extends Apollo.Mutation<CreatedpmPartyExtRefMutation, CreatedpmPartyExtRefMutationVariables> {
    document = CreatedpmPartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmPartyExtRefDocument = gql`
    mutation updatedpmPartyExtRef($data: DpmPartyExtRefInput!) {
  updatedpmPartyExtRef(data: $data) {
    company_ref
    party_ref
    party_ext_ref
    party_ext_ref_type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmPartyExtRefGQL extends Apollo.Mutation<UpdatedpmPartyExtRefMutation, UpdatedpmPartyExtRefMutationVariables> {
    document = UpdatedpmPartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmPartyExtRefDocument = gql`
    mutation deletedpmPartyExtRef($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!, $party_ext_ref_type: String!) {
  deletedpmPartyExtRef(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
    party_ext_ref_type: $party_ext_ref_type
  ) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmPartyExtRefGQL extends Apollo.Mutation<DeletedpmPartyExtRefMutation, DeletedpmPartyExtRefMutationVariables> {
    document = DeletedpmPartyExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmPartyFlagDocument = gql`
    query dpmPartyFlag($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmPartyFlag(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    party_flag_type
    party_flag
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmPartyFlagGQL extends Apollo.Query<DpmPartyFlagQuery, DpmPartyFlagQueryVariables> {
    document = DpmPartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmPartyFlagDocument = gql`
    mutation createdpmPartyFlag($data: DpmPartyFlagInput!) {
  createdpmPartyFlag(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmPartyFlagGQL extends Apollo.Mutation<CreatedpmPartyFlagMutation, CreatedpmPartyFlagMutationVariables> {
    document = CreatedpmPartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmPartyFlagDocument = gql`
    mutation updatedpmPartyFlag($data: DpmPartyFlagInput!) {
  updatedpmPartyFlag(data: $data) {
    company_ref
    party_ref
    party_flag_type
    party_flag
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmPartyFlagGQL extends Apollo.Mutation<UpdatedpmPartyFlagMutation, UpdatedpmPartyFlagMutationVariables> {
    document = UpdatedpmPartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmPartyFlagDocument = gql`
    mutation deletedpmPartyFlag($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!, $party_flag_type: Int!, $party_flag: String!) {
  deletedpmPartyFlag(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
    party_flag_type: $party_flag_type
    party_flag: $party_flag
  ) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmPartyFlagGQL extends Apollo.Mutation<DeletedpmPartyFlagMutation, DeletedpmPartyFlagMutationVariables> {
    document = DeletedpmPartyFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmAccountDocument = gql`
    query dpmAccount($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmAccount(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    account_no
    account_type
    inactive
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmAccountGQL extends Apollo.Query<DpmAccountQuery, DpmAccountQueryVariables> {
    document = DpmAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmAccountDocument = gql`
    mutation createdpmAccount($data: DpmAccountInput!) {
  createdpmAccount(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmAccountGQL extends Apollo.Mutation<CreatedpmAccountMutation, CreatedpmAccountMutationVariables> {
    document = CreatedpmAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmAccountDocument = gql`
    mutation updatedpmAccount($data: DpmAccountInput!) {
  updatedpmAccount(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmAccountGQL extends Apollo.Mutation<UpdatedpmAccountMutation, UpdatedpmAccountMutationVariables> {
    document = UpdatedpmAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmAccountDocument = gql`
    mutation deletedpmAccount($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!, $account_no: String!) {
  deletedpmAccount(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
    account_no: $account_no
  ) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmAccountGQL extends Apollo.Mutation<DeletedpmAccountMutation, DeletedpmAccountMutationVariables> {
    document = DeletedpmAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmAccountExtRefDocument = gql`
    query dpmAccountExtRef($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmAccountExtRef(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    account_no
    account_ext_ref_type
    account_ext_ref
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmAccountExtRefGQL extends Apollo.Query<DpmAccountExtRefQuery, DpmAccountExtRefQueryVariables> {
    document = DpmAccountExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmAccountExtRefDocument = gql`
    mutation createdpmAccountExtRef($data: DpmAccountExtRefInput!) {
  createdpmAccountExtRef(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmAccountExtRefGQL extends Apollo.Mutation<CreatedpmAccountExtRefMutation, CreatedpmAccountExtRefMutationVariables> {
    document = CreatedpmAccountExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmAccountExtRefDocument = gql`
    mutation updatedpmAccountExtRef($data: DpmAccountExtRefInput!) {
  updatedpmAccountExtRef(data: $data) {
    company_ref
    party_ref
    account_ext_ref_type
    account_ext_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmAccountExtRefGQL extends Apollo.Mutation<UpdatedpmAccountExtRefMutation, UpdatedpmAccountExtRefMutationVariables> {
    document = UpdatedpmAccountExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmAccountExtRefDocument = gql`
    mutation deletedpmAccountExtRef($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!, $account_no: String!, $account_ext_ref_type: String!) {
  deletedpmAccountExtRef(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
    account_no: $account_no
    account_ext_ref_type: $account_ext_ref_type
  ) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmAccountExtRefGQL extends Apollo.Mutation<DeletedpmAccountExtRefMutation, DeletedpmAccountExtRefMutationVariables> {
    document = DeletedpmAccountExtRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmAccountFlagDocument = gql`
    query dpmAccountFlag($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmAccountFlag(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    account_no
    account_flag_type
    account_flag
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmAccountFlagGQL extends Apollo.Query<DpmAccountFlagQuery, DpmAccountFlagQueryVariables> {
    document = DpmAccountFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmAccountFlagDocument = gql`
    mutation createdpmAccountFlag($data: DpmAccountFlagInput!) {
  createdpmAccountFlag(data: $data) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmAccountFlagGQL extends Apollo.Mutation<CreatedpmAccountFlagMutation, CreatedpmAccountFlagMutationVariables> {
    document = CreatedpmAccountFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmAccountFlagDocument = gql`
    mutation updatedpmAccountFlag($data: DpmAccountFlagInput!) {
  updatedpmAccountFlag(data: $data) {
    company_ref
    party_ref
    account_flag_type
    account_flag
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmAccountFlagGQL extends Apollo.Mutation<UpdatedpmAccountFlagMutation, UpdatedpmAccountFlagMutationVariables> {
    document = UpdatedpmAccountFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmAccountFlagDocument = gql`
    mutation deletedpmAccountFlag($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!, $account_no: String!, $account_flag_type: Int!, $account_flag: String!) {
  deletedpmAccountFlag(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
    account_no: $account_no
    account_flag_type: $account_flag_type
    account_flag: $account_flag
  ) {
    company_ref
    party_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmAccountFlagGQL extends Apollo.Mutation<DeletedpmAccountFlagMutation, DeletedpmAccountFlagMutationVariables> {
    document = DeletedpmAccountFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmConfigDefDocument = gql`
    query dpmConfigDef($company_ref: String!, $component_type: String!, $client_ref: String!) {
  dpmConfigDef(
    company_ref: $company_ref
    component_type: $component_type
    client_ref: $client_ref
  ) {
    client_ref
    component_type
    company_ref
    party_ref
    config_type
    config_value
    description
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmConfigDefGQL extends Apollo.Query<DpmConfigDefQuery, DpmConfigDefQueryVariables> {
    document = DpmConfigDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmConfigDefDocument = gql`
    mutation createdpmConfigDef($data: DpmConfigDefInput!) {
  createdpmConfigDef(data: $data) {
    company_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmConfigDefGQL extends Apollo.Mutation<CreatedpmConfigDefMutation, CreatedpmConfigDefMutationVariables> {
    document = CreatedpmConfigDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmConfigDefDocument = gql`
    mutation updatedpmConfigDef($data: DpmConfigDefInput!) {
  updatedpmConfigDef(data: $data) {
    company_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmConfigDefGQL extends Apollo.Mutation<UpdatedpmConfigDefMutation, UpdatedpmConfigDefMutationVariables> {
    document = UpdatedpmConfigDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmConfigDefDocument = gql`
    mutation deletedpmConfigDef($client_ref: String!, $component_type: String!, $company_ref: String!, $config_type: String!) {
  deletedpmConfigDef(
    client_ref: $client_ref
    component_type: $component_type
    company_ref: $company_ref
    config_type: $config_type
  ) {
    company_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmConfigDefGQL extends Apollo.Mutation<DeletedpmConfigDefMutation, DeletedpmConfigDefMutationVariables> {
    document = DeletedpmConfigDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SavedpmconfigdefpushedDocument = gql`
    mutation savedpmconfigdefpushed($client_ref: String!, $component_type: String!, $company_ref: String!, $environment: String!) {
  savedpmconfigdefpushed(
    client_ref: $client_ref
    component_type: $component_type
    company_ref: $company_ref
    environment: $environment
  ) {
    company_ref
    config_type
    config_value
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SavedpmconfigdefpushedGQL extends Apollo.Mutation<SavedpmconfigdefpushedMutation, SavedpmconfigdefpushedMutationVariables> {
    document = SavedpmconfigdefpushedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DatabasesDocument = gql`
    query databases($client_ref: String!, $component_type: String!) {
  databases(client_ref: $client_ref, component_type: $component_type) {
    client_ref
    component_type
    database_type
    database_code
    descr
    sql_db_code
    holiday_id_p2k
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DatabasesGQL extends Apollo.Query<DatabasesQuery, DatabasesQueryVariables> {
    document = DatabasesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedatabaseDocument = gql`
    mutation createdatabase($data: DatabasesInput!) {
  createdatabase(data: $data) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedatabaseGQL extends Apollo.Mutation<CreatedatabaseMutation, CreatedatabaseMutationVariables> {
    document = CreatedatabaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedatabaseDocument = gql`
    mutation updatedatabase($data: DatabasesInput!) {
  updatedatabase(data: $data) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedatabaseGQL extends Apollo.Mutation<UpdatedatabaseMutation, UpdatedatabaseMutationVariables> {
    document = UpdatedatabaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedatabaseDocument = gql`
    mutation deletedatabase($client_ref: String!, $component_type: String!, $database_type: String!, $database_code: String!) {
  deletedatabase(
    client_ref: $client_ref
    component_type: $component_type
    database_type: $database_type
    database_code: $database_code
  ) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedatabaseGQL extends Apollo.Mutation<DeletedatabaseMutation, DeletedatabaseMutationVariables> {
    document = DeletedatabaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JsdcFileDefDocument = gql`
    query JsdcFileDef($client_ref: String!, $component_type: String!) {
  JsdcFileDef(client_ref: $client_ref, component_type: $component_type) {
    client_ref
    component_type
    data_rec_type_len
    db_code
    file_desc
    file_diff
    file_name
    file_proc_type
    multi_basis_date
    proc_status_check
    proc_status_pos
    proc_status_value
    rec_len
    required_file_name
    transfer_type
    product_group
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JsdcFileDefGQL extends Apollo.Query<JsdcFileDefQuery, JsdcFileDefQueryVariables> {
    document = JsdcFileDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateJsdcFileDefDocument = gql`
    mutation createJsdcFileDef($data: JsdcFileDefInput!) {
  createJsdcFileDef(data: $data) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateJsdcFileDefGQL extends Apollo.Mutation<CreateJsdcFileDefMutation, CreateJsdcFileDefMutationVariables> {
    document = CreateJsdcFileDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateJsdcFileDefDocument = gql`
    mutation updateJsdcFileDef($data: JsdcFileDefInput!) {
  updateJsdcFileDef(data: $data) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateJsdcFileDefGQL extends Apollo.Mutation<UpdateJsdcFileDefMutation, UpdateJsdcFileDefMutationVariables> {
    document = UpdateJsdcFileDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteJsdcFileDefDocument = gql`
    mutation deleteJsdcFileDef($client_ref: String!, $component_type: String!, $file_name: String!) {
  deleteJsdcFileDef(
    client_ref: $client_ref
    component_type: $component_type
    file_name: $file_name
  ) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteJsdcFileDefGQL extends Apollo.Mutation<DeleteJsdcFileDefMutation, DeleteJsdcFileDefMutationVariables> {
    document = DeleteJsdcFileDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SavefilesStaticpushedDocument = gql`
    mutation savefilesStaticpushed($client_ref: String!, $component_type: String!, $environment: String!) {
  savefilesStaticpushed(
    client_ref: $client_ref
    component_type: $component_type
    environment: $environment
  ) {
    client_ref
    component_type
    file_name
    transfer_type
    rec_len
    data_rec_type_len
    file_diff
    proc_status_check
    proc_status_pos
    proc_status_value
    file_proc_type
    multi_basis_date
    required_file_name
    db_code
    file_desc
    product_group
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SavefilesStaticpushedGQL extends Apollo.Mutation<SavefilesStaticpushedMutation, SavefilesStaticpushedMutationVariables> {
    document = SavefilesStaticpushedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmSchedulerDocument = gql`
    query dpmScheduler($client_ref: String!, $component_type: String!) {
  dpmScheduler(client_ref: $client_ref, component_type: $component_type) {
    client_ref
    component_type
    active_ind_p2k
    batch_size
    bus_day
    database_code
    database_type
    due_date_time
    end_by_interval
    end_by_time
    event_ref
    frequency_end_time
    frequency_interval
    frequency_start_time
    frequency_unit
    holiday_id
    msg_type
    sql_db_code
    start_by_interval
    start_by_time
    start_by_unit
    supercede
    use_current_date
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmSchedulerGQL extends Apollo.Query<DpmSchedulerQuery, DpmSchedulerQueryVariables> {
    document = DpmSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatedpmSchedulerDocument = gql`
    mutation createdpmScheduler($data: DpmSchedulerInput!) {
  createdpmScheduler(data: $data) {
    event_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatedpmSchedulerGQL extends Apollo.Mutation<CreatedpmSchedulerMutation, CreatedpmSchedulerMutationVariables> {
    document = CreatedpmSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatedpmSchedulerDocument = gql`
    mutation updatedpmScheduler($client_ref: String!, $component_type: String!, $msg_type: Int!, $event_ref: String!, $due_date_time: Date!, $database_code: String!, $data: DpmSchedulerInput!) {
  updatedpmScheduler(
    client_ref: $client_ref
    component_type: $component_type
    msg_type: $msg_type
    event_ref: $event_ref
    due_date_time: $due_date_time
    database_code: $database_code
    data: $data
  ) {
    event_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatedpmSchedulerGQL extends Apollo.Mutation<UpdatedpmSchedulerMutation, UpdatedpmSchedulerMutationVariables> {
    document = UpdatedpmSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletedpmSchedulerDocument = gql`
    mutation deletedpmScheduler($client_ref: String!, $component_type: String!, $msg_type: Int!, $event_ref: String!, $due_date_time: Date!, $database_code: String!) {
  deletedpmScheduler(
    client_ref: $client_ref
    component_type: $component_type
    msg_type: $msg_type
    event_ref: $event_ref
    due_date_time: $due_date_time
    database_code: $database_code
  ) {
    event_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletedpmSchedulerGQL extends Apollo.Mutation<DeletedpmSchedulerMutation, DeletedpmSchedulerMutationVariables> {
    document = DeletedpmSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClonedpmPartyDocument = gql`
    mutation clonedpmParty($company_ref: String!, $client_ref: String!, $component_type: String!, $new_company_ref: String!, $new_client_ref: String!) {
  clonedpmParty(
    company_ref: $company_ref
    client_ref: $client_ref
    component_type: $component_type
    new_company_ref: $new_company_ref
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClonedpmPartyGQL extends Apollo.Mutation<ClonedpmPartyMutation, ClonedpmPartyMutationVariables> {
    document = ClonedpmPartyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClonedatabasesDocument = gql`
    mutation clonedatabases($client_ref: String!, $component_type: String!, $new_client_ref: String!) {
  clonedatabases(
    client_ref: $client_ref
    component_type: $component_type
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClonedatabasesGQL extends Apollo.Mutation<ClonedatabasesMutation, ClonedatabasesMutationVariables> {
    document = ClonedatabasesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClonejsdcfiledefDocument = gql`
    mutation clonejsdcfiledef($client_ref: String!, $component_type: String!, $product_group: String!, $new_client_ref: String!) {
  clonejsdcfiledef(
    client_ref: $client_ref
    component_type: $component_type
    product_group: $product_group
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClonejsdcfiledefGQL extends Apollo.Mutation<ClonejsdcfiledefMutation, ClonejsdcfiledefMutationVariables> {
    document = ClonejsdcfiledefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClonedpmSchedulerDocument = gql`
    mutation clonedpmScheduler($client_ref: String!, $component_type: String!, $new_client_ref: String!) {
  clonedpmScheduler(
    client_ref: $client_ref
    component_type: $component_type
    new_client_ref: $new_client_ref
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClonedpmSchedulerGQL extends Apollo.Mutation<ClonedpmSchedulerMutation, ClonedpmSchedulerMutationVariables> {
    document = ClonedpmSchedulerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BackUpDpmPartyDataDocument = gql`
    mutation backUpDpmPartyData($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  backUpDpmPartyData(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BackUpDpmPartyDataGQL extends Apollo.Mutation<BackUpDpmPartyDataMutation, BackUpDpmPartyDataMutationVariables> {
    document = BackUpDpmPartyDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DpmPartyAuditDocument = gql`
    query dpmPartyAudit($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!) {
  dpmPartyAudit(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
  ) {
    company_ref
    party_ref
    client_ref
    component_type
    party_data
    party_ext_ref_data
    party_flag_data
    account_data
    account_ext_ref_data
    account_flag_data
    version_no
    version_date
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DpmPartyAuditGQL extends Apollo.Query<DpmPartyAuditQuery, DpmPartyAuditQueryVariables> {
    document = DpmPartyAuditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RestoreDpmPartyDataDocument = gql`
    mutation restoreDpmPartyData($company_ref: String!, $party_ref: String!, $client_ref: String!, $component_type: String!, $version_no: Int!) {
  restoreDpmPartyData(
    company_ref: $company_ref
    party_ref: $party_ref
    client_ref: $client_ref
    component_type: $component_type
    version_no: $version_no
  ) {
    company_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RestoreDpmPartyDataGQL extends Apollo.Mutation<RestoreDpmPartyDataMutation, RestoreDpmPartyDataMutationVariables> {
    document = RestoreDpmPartyDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JasdecenvironmentsDocument = gql`
    query jasdecenvironments($client_ref: String!) {
  jasdecenvironments(client_ref: $client_ref) {
    environment
    client_ref
    description
    sst_jasdecapi_url
    active
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JasdecenvironmentsGQL extends Apollo.Query<JasdecenvironmentsQuery, JasdecenvironmentsQueryVariables> {
    document = JasdecenvironmentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BojenvironmentsDocument = gql`
    query bojenvironments($client_ref: String!) {
  bojenvironments(client_ref: $client_ref) {
    environment
    client_ref
    description
    sst_bojapi_url
    active
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BojenvironmentsGQL extends Apollo.Query<BojenvironmentsQuery, BojenvironmentsQueryVariables> {
    document = BojenvironmentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigDefEntriesDocument = gql`
    query configDefEntries($client_ref: String!, $component_type: String!) {
  configDefEntries(client_ref: $client_ref, component_type: $component_type) {
    client_ref
    component_type
    config_ref
    config_type
    component
    database_code
    component_data
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigDefEntriesGQL extends Apollo.Query<ConfigDefEntriesQuery, ConfigDefEntriesQueryVariables> {
    document = ConfigDefEntriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateConfigDefDocument = gql`
    mutation updateConfigDef($data: ConfigDefInput!) {
  updateConfigDef(data: $data) {
    client_ref
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateConfigDefGQL extends Apollo.Mutation<UpdateConfigDefMutation, UpdateConfigDefMutationVariables> {
    document = UpdateConfigDefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeTemplatesDocument = gql`
    query teTemplates {
  teTemplates {
    component_type
    template_type
    template_data
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TeTemplatesGQL extends Apollo.Query<TeTemplatesQuery, TeTemplatesQueryVariables> {
    document = TeTemplatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateTeTemplateDocument = gql`
    mutation createTETemplate($data: TETemplateInput!) {
  createTETemplate(data: $data) {
    component_type
    template_type
    template_data
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTeTemplateGQL extends Apollo.Mutation<CreateTeTemplateMutation, CreateTeTemplateMutationVariables> {
    document = CreateTeTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTeTemplateDocument = gql`
    mutation updateTETemplate($data: TETemplateInput!) {
  updateTETemplate(data: $data) {
    component_type
    template_type
    template_data
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTeTemplateGQL extends Apollo.Mutation<UpdateTeTemplateMutation, UpdateTeTemplateMutationVariables> {
    document = UpdateTeTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteTeTemplateDocument = gql`
    mutation deleteTETemplate($component_type: String!, $template_type: String!) {
  deleteTETemplate(component_type: $component_type, template_type: $template_type) {
    component_type
    template_type
    template_data
    version_date
    version_no
    version_user
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTeTemplateGQL extends Apollo.Mutation<DeleteTeTemplateMutation, DeleteTeTemplateMutationVariables> {
    document = DeleteTeTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }