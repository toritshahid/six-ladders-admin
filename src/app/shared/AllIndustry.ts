export interface AllIndustry {
  data?: (DataEntity)[] | null;
  sStatus: string;
  sMessage: string;
  nID: number;
  statusCode: number;
  bRigths: boolean;
}
export interface DataEntity {
  nIndustryId: number;
  sTitle: string;
  bActive: number;
  bDelete: number;
  dtCreatedDate: string;
  dtEditedDate?: null;
  dtDeletedDate?: null;
  nCreatedBy: number;
  nEditedBy: number;
  nDeletedBy: number;
}
