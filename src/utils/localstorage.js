import { ADMIN_TOKEN, CLIENT_TOKEN } from "./token";

const CLIENT_STEP = "sdjknsdjknskd";
const ADMIN_DATA = "sdjhsdbsjhbdshbadsh";

const logout = () => {
  localStorage.removeItem(ADMIN_TOKEN);
  localStorage.removeItem(CLIENT_TOKEN);
  localStorage.removeItem(CLIENT_STEP);
  localStorage.removeItem(ADMIN_DATA);
};
export { CLIENT_STEP, ADMIN_DATA, logout };
