import React from "react";
import Styles from "./MainContent.module.css";
import userDetailsAtom from "../../store/userDetailsAtom";

import { useRecoilValue } from "recoil";
import loginLogoutAtom from "./../../store/loginLogoutAtom";
export default function MainContent() {
  const employeeDetails = useRecoilValue(userDetailsAtom);
  const loginLogout = useRecoilValue(loginLogoutAtom);

  return (
    <div>
      {loginLogout ? (
        <div className={Styles.employeeDetails}>
          <div className={Styles.employeeDetailsContainer}>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>name:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.name}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Joining date:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.JoiningDate}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Designation:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.Designation}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Location:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.Location}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Effective Work Days:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.EffectiveWorkDays}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>LOP:</div>
              <div className={Styles.dataFieldValue}>{employeeDetails.LOP}</div>
            </div>
          </div>
          <div className={Styles.employeeDetailsContainer}>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Employee No:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.EmployeeNo}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Bank Name:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.BankName}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>Bank Account No:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.BankAccountNo}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>PAN Number:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.PANNumber}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>PF No:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.PFNo}
              </div>
            </div>
            <div className={Styles.dataField}>
              <div className={Styles.dataFieldKey}>PF UAN:</div>
              <div className={Styles.dataFieldValue}>
                {employeeDetails.PFUAN}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <div className={Styles.footerContainer}>
        Net Pay for the month ( Total Earnings - Total Deductions): 7425 (Rupees
        seven thousand four hundred twenty five Only)
      </div> */}
    </div>
  );
}
