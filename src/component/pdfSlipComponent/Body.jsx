import React from "react";
import Styles from "./Body.module.css";
import CompanyHeader from "./CompanyHeader";
import MainContent from "./MainContent";

export default function Body() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.companyHeader}>
        <CompanyHeader month={"april"} year={"2022"} />
      </div>
      <div className={Styles.mainContentContainer}>
        <MainContent />
      </div>
      <p className={Styles.footNoteText}>
        This is a system generated payslip and does not require signature.
      </p>
      <button>Generate PDF</button>
    </div>
  );
}
