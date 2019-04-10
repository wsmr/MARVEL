import { ResponseData } from './response-data';

export interface MarvelBaseResponse<T> {

  code: number;
  status: string;
  attributionHTML: string;
  data: ResponseData<T>;


}
