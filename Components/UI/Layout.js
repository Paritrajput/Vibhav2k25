import React from "react";
import Footer from "./Footer";
import STT from "../STT";
import Navigation from "./Navigation";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
      <STT />
    </div>
  );
}
