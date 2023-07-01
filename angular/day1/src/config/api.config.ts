import { environment } from "../environments/environment.test";
// import { environment } from "./environment.product";

//buildEndpoint
export function b(path: string): string {
  return `${environment.apiURL}/${path}`;
}

export const API_ENDPOINTS = {
  products: b("products"),
  product: b("products"),
};
