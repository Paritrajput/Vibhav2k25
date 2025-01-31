import "../styles/globals.css";
import "../styles/Listing.css";
import "../styles/Modal.css";
import "../styles/Overlay.css";
import Loading from "../Components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    setTimeout(function setLader() {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? <Loading /> : <Component {...pageProps} />;
}
