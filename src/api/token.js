import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get("token");
}

export function setToken(v) {
  Cookies.set("token", v);
}
