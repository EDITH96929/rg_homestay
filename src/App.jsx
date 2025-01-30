import "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "../src/styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Other sections like Rooms, Reviews, etc. */}
    </>
  );
}

export default App;
