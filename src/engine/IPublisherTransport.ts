import { IReqHeaders } from "./PublisherClient";

export interface FetchResponse {
  status: number;
  headers: object;
  httpBody?: any;
  text: () => Promise<string>;
}

export interface IPublisherTransport {
  publish(headers: IReqHeaders, content: string): Promise<FetchResponse> ;
}
