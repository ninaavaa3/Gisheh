import { getProfile } from "@/api/auth";
import { getToken } from "@/api/token";

const { createContext, useState, useContext, useEffect } = require("react");

const authContext = createContext([null, () => {}]);

export function AuthProvider({ children }) {
  const state = useState(null);

  useEffect(() => {
    const token = getToken();

    if (token) {
      getProfile().then((p) => {
        state[1](p);
      });
    }
  }, []);

  return <authContext.Provider value={state}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}
