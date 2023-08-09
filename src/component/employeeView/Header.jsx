import React from "react";
import Styles from "./Header.module.css";
import companyLogo from "../../assets/companyLogo.png";
import loginLogoutAtom from "../../store/loginLogoutAtom";
import { useRecoilValue, useRecoilState } from "recoil";
export default function Header() {
  const [text, setText] = useRecoilState(loginLogoutAtom);

  // const loginLogout = useRecoilValue(userActionLoginLogout);
  const handleLoginLogout = () => {
    setText(!text);
  };
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.logoContainer}>
        <img
          className={Styles.logoImage}
          src={companyLogo}
          alt="company logo"
        />
      </div>
      <div className={Styles.loginLogoutContainer}>
        <div>
          {text ? (
            <button onClick={() => handleLoginLogout}>Logout</button>
          ) : (
            <button>Logout</button>
          )}
          {console.log(loginLogoutAtom)}
        </div>
      </div>
    </div>
  );
}
