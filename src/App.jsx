import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Body from "./component/pdfSlipComponent/Body";
import Header from "./component/employeeView/Header";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Header />
      <Body />
    </RecoilRoot>
  );
}

export default App;
