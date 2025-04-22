import { baseUrl } from "./config";
import { getToken } from "./token";

export async function login() {
  const resp = await fetch(baseUrl + "/api/token");
  const json = await resp.json();
  return json;
}

export async function getProfile() {
  const token = getToken();
  const resp = await fetch(`${baseUrl}/api/profile?token=${token}`);
  const json = await resp.json();
  return json;
}
