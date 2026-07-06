import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryByCode } from "../services/countryService";

function CountryDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const loadCountry = async () => {
      try {
        const data = await getCountryByCode(code);
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCountry();
  }, [code]);

  if (!country) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "80px", color: "#cbd5e1" }}>
        🎬 Loading data...
      </h2>
    );
  }

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "40px 20px",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "#fff",
    },

    backBtn: {
      position: "sticky",
      top: "20px",
      padding: "10px 16px",
      background: "rgba(37,99,235,0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#fff",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "700",
      boxShadow: "0 15px 40px rgba(37,99,235,0.25)",
    },

    container: {
      maxWidth: "1100px",
      margin: "30px auto",
      padding: "35px",
      borderRadius: "24px",
      background: "rgba(255,255,255,0.06)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    },

    title: {
      textAlign: "center",
      fontSize: "38px",
      fontWeight: "900",
      marginBottom: "30px",
      background: "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "40px",
    },

    heroImg: {
      width: "100%",
      borderRadius: "18px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
      transition: "0.5s ease",
    },

    glassBox: {
      padding: "16px",
      marginBottom: "12px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(12px)",
    },

    label: {
      fontSize: "12px",
      color: "#94a3b8",
      marginBottom: "4px",
    },

    value: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#e2e8f0",
    },

    tag: {
      display: "inline-block",
      padding: "6px 10px",
      margin: "4px",
      borderRadius: "999px",
      background: "rgba(59,130,246,0.25)",
      color: "#93c5fd",
      fontSize: "12px",
      fontWeight: "600",
    },

    mapBtn: {
      display: "inline-block",
      marginTop: "18px",
      padding: "12px 18px",
      background: "linear-gradient(135deg,#22c55e,#16a34a)",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "12px",
      fontWeight: "800",
      boxShadow: "0 10px 25px rgba(34,197,94,0.25)",
    },
  };

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div style={styles.container}>
        <h1 style={styles.title}>{country.name?.common}</h1>

        <div style={styles.grid}>
          <div>
            <img
              src={country.flags?.png}
              alt={country.name?.common}
              style={styles.heroImg}
            />

            {country.coatOfArms?.png && (
              <div style={{ textAlign: "center", marginTop: "25px" }}>
                <h3 style={{ color: "#cbd5e1" }}>Coat of Arms</h3>
                <img
                  src={country.coatOfArms.png}
                  alt="coat"
                  style={{
                    width: "130px",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))",
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <div style={styles.glassBox}>
              <div style={styles.label}>Official Name</div>
              <div style={styles.value}>{country.name?.official}</div>
            </div>

            <div style={styles.glassBox}>
              <div style={styles.label}>Capital</div>
              <div style={styles.value}>{country.capital?.[0] || "N/A"}</div>
            </div>

            <div style={styles.glassBox}>
              <div style={styles.label}>Region</div>
              <div style={styles.value}>{country.region}</div>
            </div>

            <div style={styles.glassBox}>
              <div style={styles.label}>Population</div>
              <div style={styles.value}>
                {country.population?.toLocaleString()}
              </div>
            </div>

            <div style={styles.glassBox}>
              <div style={styles.label}>Languages</div>
              <div>
                {country.languages
                  ? Object.values(country.languages).map((l) => (
                      <span key={l} style={styles.tag}>
                        {l}
                      </span>
                    ))
                  : "N/A"}
              </div>
            </div>

            <div style={styles.glassBox}>
              <div style={styles.label}>Currencies</div>
              <div>
                {country.currencies
                  ? Object.values(country.currencies).map((c) => (
                      <span key={c.name} style={styles.tag}>
                        {c.name}
                      </span>
                    ))
                  : "N/A"}
              </div>
            </div>

            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mapBtn}
            >
              🗺️ Open World Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;