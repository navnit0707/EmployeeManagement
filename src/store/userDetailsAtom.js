import { atom } from "recoil";

const userDetailsAtom = atom({
  key: "userDetailsAtom",
  default: {
    name: "navnit",
    JoiningDate: "20/2/23",
    Designation: "software developer",
    Location: "Chennai",
    EffectiveWorkDays: "30",
    LOP: "0",
    EmployeeNo: "232",
    BankName: "State Bank of India",
    BankAccountNo: "032111111",
    PANNumber: "0",
    PFNo: "0",
    PFUAN: "0",
  },
});

export default userDetailsAtom;
