import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
