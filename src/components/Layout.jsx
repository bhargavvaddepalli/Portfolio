import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* Header (Always Visible) */}
      <Header />

      {/* Main Content */}
      <main className="mt-16">{children}</main>
    </div>
  );
};

export default Layout;
