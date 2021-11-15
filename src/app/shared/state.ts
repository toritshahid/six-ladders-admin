export interface AddState {
  STitle: string;
  BActive: number;
  NCreatedBy: number;
}
export interface EditState {
  nStateId: number;
  STitle: string;
  BActive: number;
  NEditedBy: number;
}
export interface State {
  data: any;
  sStatus: string;
  sMessage: string;
  nID: number;
  statusCode: number;
  bRigths: boolean;
}
export interface AllState {
  nStateId: number;
  sTitle: string;
  bActive: number;
  bDelete: number;
  dtCreatedDate: string;
  dtEditedDate: string;
  dtDeletedDate?: null;
  nCreatedBy: number;
  nEditedBy: number;
  nDeletedBy?: null;
  mstCity?: (null)[] | null;
}


