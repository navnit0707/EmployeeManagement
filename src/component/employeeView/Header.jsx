import React from "react";
import Styles from "./Header.module.css";
import companyLogo from "../../assets/companyLogo.png";
import loginLogoutAtom from "../../store/loginLogoutAtom";
import { useRecoilState } from "recoil";
export default function Header() {
  const [loginLogout, setloginLogout] = useRecoilState(loginLogoutAtom);

  // const loginLogout = useRecoilValue(userActionLoginLogout);
  const handleLoginLogout = () => {
    setloginLogout(!loginLogout);
    console.log(loginLogout);
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
          {loginLogout ? (
            <button onClick={handleLoginLogout}>Logout</button>
          ) : (
            <button onClick={handleLoginLogout}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
}
