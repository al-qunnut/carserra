import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Market from "./components/Market";
import Footer from "./components/Footer";

function App() {
  const [showNav, setShowNav] = useState(false);
  function handleNav() {
    setShowNav((nav) => !nav);
  }
  return (
    <>
      <Header handleNav={handleNav} showNav={showNav} />
      <Hero />
      <Market />
      <Footer />
    </>
  );
}

export default App;
