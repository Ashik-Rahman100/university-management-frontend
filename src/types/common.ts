export interface IMeta {
  page: number;
  limit: number;
  size: number;
  message?: string;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
