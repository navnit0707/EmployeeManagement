import { atom } from "recoil";

const loginLogoutAtom = atom({
  key: "loginLogoutAtom",
  default: false,
});

export default loginLogoutAtom;
