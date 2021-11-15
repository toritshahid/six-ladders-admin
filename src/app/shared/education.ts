export interface AddEducation {
  STitle: string;
  BActive: number;
  NCreatedBy: number;
}
export interface EditEducation {
  nEducationId: number;
  sTitle: string;
  bActive: number;
  nEditedBy: number;
}
export interface AllEducation {
  data?: (DataEntity)[] | null;
  sStatus: string;
  sMessage: string;
  nID: number;
  statusCode: number;
  bRigths: boolean;
}
export interface DataEntity {
  nEducationId: number;
  sTitle: string;
  bActive: number;
  bDelete: number;
  dtCreatedDate: string;
  dtEditedDate?: string | null;
  dtDeletedDate?: null;
  nCreatedBy: number;
  nEditedBy?: number | null;
  nDeletedBy?: number | null;
}
export interface Education {
  data: any;
  sStatus: string;
  sMessage: string;
  nID: number;
  statusCode: number;
  bRigths: boolean;
}
