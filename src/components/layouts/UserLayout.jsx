import React from "react";
import { Header } from "./Header";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      />

      <main
        style={{
          height: "80vh",
          overflowY: "auto",
        }}
      >
        {children}
      </main>
    </>
  );
};
