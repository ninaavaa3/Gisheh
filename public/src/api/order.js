import { getToken } from "./token";
import { baseUrl } from './config'

export async function getOrder() {
  const token = getToken();
  const resp = await fetch(`${baseUrl}/api/order?token=${token}`);
  const json = await resp.json();
  return json;
}
