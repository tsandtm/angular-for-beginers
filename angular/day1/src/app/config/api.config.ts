// import { environment } from "./environments/environment.product";
import { environment } from "./environments/environment.test";

//buildEndpoint
export function b(path: string): string {
  return `${environment.apiURL}/${path}`;
}

export const API_ENDPOINTS = {
  products: b("products"),
  product: b("products"),
};
