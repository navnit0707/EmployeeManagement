import React from "react";
import Styles from "./CompanyHeader.module.css";
import companyLogo from "../assets/companyLogo.png";
export default function CompanyHeader({ month, year }) {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.companyLogoContainer}>
        <img
          className={Styles.companyLogoImg}
          src={companyLogo}
          alt="companyLogo"
        />
      </div>
      <div className={Styles.companyDetails}>
        <div className={Styles.companyAddress}>
          <p>Company Name Private limited</p>
          <footnote>
            Reg add: Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </footnote>
        </div>
        <div>
          <p>
            Payslip for the month of {month} {year}
          </p>
        </div>
      </div>
    </div>
  );
}
