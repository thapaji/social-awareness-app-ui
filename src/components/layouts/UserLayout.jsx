import React from "react";
import { Header } from "./Header";

export const UserLayout = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      <main>{children}</main>
    </>
  );
};
