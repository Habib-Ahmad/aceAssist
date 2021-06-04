import { useEffect, useState } from "react";
import { ADMIN_TOKEN, CLIENT_TOKEN } from "../utils/token";

export default function useAuth() {
  const [adminAuth, setAuth] = useState(false);
  const [clientAuth, setClientAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(ADMIN_TOKEN);
    const clientToken = localStorage.getItem(CLIENT_TOKEN);
    if (clientToken) setClientAuth(true);
    if (token) setAuth(true);
  }, []);

  return { adminAuth, clientAuth };
}
