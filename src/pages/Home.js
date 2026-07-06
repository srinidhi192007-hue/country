import { useEffect, useState, useRef } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import CurrencyComparison from "../components/CurrencyComparison";
import { getAllCountries } from "../services/countryService";

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [continent, setContinent] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const countrySectionRef = useRef(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const data = await getAllCountries();
    data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCountries(data);
  };

  const filteredCountries = countries
    .filter((country) => {
      const text = search.toLowerCase().trim();

      // 🌍 region normalize
      const region =
        country.region === "North America" ||
        country.region === "South America"
          ? "Americas"
          : country.region;

      const matchRegion =
        continent === "All" || region === continent;

      // 🔥 STRICT SEARCH LOGIC
      let match = false;

      switch (searchType) {
        case "name":
          match =
            !text ||
            country.name.common.toLowerCase().includes(text);
          break;

        case "capital":
          match =
            !text ||
            country.capital?.[0]?.toLowerCase().includes(text);
          break;

        case "code":
          if (!text) {
            match = true;
          } else {
            const code = text.toUpperCase();

            match =
              country.cca3 === code ||
              country.cca2 === code ||
              country.ccn3?.toString() === text;
          }
          break;

        case "letter":
          match =
            !text ||
            country.name.common.toLowerCase().startsWith(text);
          break;

        default:
          match = true;
      }

      return match && matchRegion;
    })
    .sort((a, b) =>
      sortOrder === "high"
        ? b.population - a.population
        : sortOrder === "low"
        ? a.population - b.population
        : 0
    );

  return (
    <div className="cinema-bg">

      {/* HERO */}
      <div className="hero">
        <h1>🌍 Country Explorer</h1>
      </div>

      {/* TOOL */}
      <div className="glass-box">
        <CurrencyComparison
          countries={countries}
          onComplete={() => setShowScrollBtn(true)}
        />
      </div>

      {/* SEARCH */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchType={searchType}
        setSearchType={setSearchType}
      />

      {/* FILTERS */}
      <div className="filters">
        <select
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="All">All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort Population</option>
          <option value="high">High → Low</option>
          <option value="low">Low → High</option>
        </select>
      </div>

      {/* COUNT */}
      <div className="counter">
        🎬 Showing {filteredCountries.length} countries
      </div>

      {/* GRID */}
      <div ref={countrySectionRef} className="grid">
        {filteredCountries.map((country) => (
          <div className="fade-card" key={country.cca3}>
            <CountryCard country={country} />
          </div>
        ))}
      </div>

      {/* FLOAT BUTTON */}
      {showScrollBtn && (
        <button
          className="float-btn"
          onClick={() =>
            countrySectionRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          ⬇ Explore Scene
        </button>
      )}

      {/* STYLES */}
      <style>{`
        .cinema-bg {
          min-height: 100vh;
          background: radial-gradient(circle at top, #0f172a, #020617);
          color: white;
          padding: 25px;
        }

        .hero {
          text-align: center;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: 40px;
          font-weight: 900;
        }

        .glass-box {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          padding: 20px;
          border-radius: 18px;
          margin: 20px 0;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 20px 0;
        }

        select {
          padding: 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }

        select option {
          background: #0f172a;
          color: white;
        }

        .counter {
          text-align: center;
          color: #60a5fa;
          font-weight: bold;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .fade-card {
          animation: fadeUp 0.5s ease;
        }

        .float-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          padding: 12px 18px;
          border-radius: 50px;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          color: white;
          border: none;
          cursor: pointer;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Home;