import React from "react";
import Footer from "./Footer";
import STT from "../STT";
import Navigation from "./Navigation";
export default function Layout({ children }) {
  return (
    <div className="bg-black bg-opacity-80">
      <Navigation />
      {children}
      <Footer />
      <STT />
    </div>
  );
}
