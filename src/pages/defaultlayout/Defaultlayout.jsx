import React from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/Sidebar";

const DefaultLayout = ({children}) => {
  return (
    <>
      <div>
        <Header />
        <div className=" flex">
          <Sidebar />
          <div className=" mt-[56px]">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DefaultLayout;
