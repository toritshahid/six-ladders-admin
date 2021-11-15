export interface AddCity {
  nStateId: number;
  STitle: string;
  BActive: number;
  NCreatedBy: number;
}
export interface EditCity {
  nCityid: number;
  nStateId: number;
  STitle: string;
  BActive: number;
  NEditedBy: number;
}
export interface CityD {
  data: any;
  sStatus: string;
  sMessage: string;
  nID: number;
  statusCode: number;
  bRigths: boolean;
}
export interface CityID {
  nCityId: number;
  nStateId: number;
  sTitle: string;
  bActive: number;
  bDelete: number;
  dtCreatedDate: string;
  dtEditedDate?: null;
  dtDeletedDate?: null;
  nCreatedBy: number;
  nEditedBy?: null;
  nDeletedBy?: null;
  nState?: null;
}
export interface AllCity {
  data?: (DataEntity)[] | null;
  sStatus: string;
  sMessage: string;
  nID: number;
  statusCode: number;
  bRigths: boolean;
}
export interface DataEntity {
  nCityId: number;
  nStateId: number;
  sTitle: string;
  bActive: number;
  bDelete: number;
  dtCreatedDate: string;
  dtEditedDate?: string | null;
  dtDeletedDate?: null;
  nCreatedBy: number;
  nEditedBy?: number | null;
  nDeletedBy?: null;
}

