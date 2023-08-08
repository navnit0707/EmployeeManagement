import React from "react";
import Styles from "./MainContent.module.css";
export default function MainContent() {
  return (
    <div>
      <div className={Styles.employeeDetails}>
        <div className={Styles.employeeDetailsContainer}>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>name:</div>
            <div className={Styles.dataFieldValue}>navnit</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Joining date:</div>
            <div className={Styles.dataFieldValue}>20/2/23</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Designation:</div>
            <div className={Styles.dataFieldValue}>software developer</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Location:</div>
            <div className={Styles.dataFieldValue}>Chennai</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Effective Work Days:</div>
            <div className={Styles.dataFieldValue}>30</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>LOP:</div>
            <div className={Styles.dataFieldValue}>0</div>
          </div>
        </div>
        <div className={Styles.employeeDetailsContainer}>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Employee No:</div>
            <div className={Styles.dataFieldValue}>232</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Bank Name:</div>
            <div className={Styles.dataFieldValue}>State Bank of India</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>Bank Account No:</div>
            <div className={Styles.dataFieldValue}>032111111</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>PAN Number:</div>
            <div className={Styles.dataFieldValue}>0</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>PF No:</div>
            <div className={Styles.dataFieldValue}>0</div>
          </div>
          <div className={Styles.dataField}>
            <div className={Styles.dataFieldKey}>PF UAN:</div>
            <div className={Styles.dataFieldValue}>0</div>
          </div>
        </div>
      </div>
      {/* <div className={Styles.footerContainer}>
        Net Pay for the month ( Total Earnings - Total Deductions): 7425 (Rupees
        seven thousand four hundred twenty five Only)
      </div> */}
    </div>
  );
}
