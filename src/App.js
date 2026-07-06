import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const location = useLocation();
  const hideHeaderOnLanding = location.pathname === "/";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f4f7fb",
      }}
    >
      {!hideHeaderOnLanding && <Header />}

      <main
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/country" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/country/:code"
            element={<CountryDetails />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;