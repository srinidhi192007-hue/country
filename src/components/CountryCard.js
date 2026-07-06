import { Link } from "react-router-dom";
import { useState } from "react";

function CountryCard({ country }) {
  const [hover, setHover] = useState(false);

  const styles = {
    card: {
      background: "linear-gradient(135deg, #ffffff, #f1f5f9)",
      borderRadius: "22px",
      overflow: "hidden",
      position: "relative",
      boxShadow: hover
        ? "0 30px 60px rgba(0,0,0,0.25)"
        : "0 10px 25px rgba(0,0,0,0.08)",
      transform: hover
        ? "translateY(-14px) scale(1.03)"
        : "translateY(0) scale(1)",
      transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
      cursor: "pointer",
      border: hover ? "1px solid rgba(59,130,246,0.5)" : "1px solid transparent",
    },

    link: {
      textDecoration: "none",
      color: "inherit",
    },

    imageWrap: {
      position: "relative",
      height: "200px",
      overflow: "hidden",
    },

    flag: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.12)" : "scale(1)",
      transition: "0.6s ease",
      filter: hover ? "brightness(1.1) contrast(1.05)" : "none",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1), transparent)",
    },

    shine: {
      position: "absolute",
      top: 0,
      left: hover ? "120%" : "-120%",
      width: "60%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
      transform: "skewX(-20deg)",
      transition: "left 0.7s ease",
    },

    content: {
      padding: "16px",
      position: "relative",
    },

    title: {
      fontSize: "20px",
      fontWeight: "900",
      marginBottom: "10px",
      color: "#0f172a",
      letterSpacing: "0.2px",
    },

    row: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "10px",
    },

    badge: {
      fontSize: "12px",
      padding: "5px 11px",
      borderRadius: "999px",
      background: hover
        ? "linear-gradient(135deg,#dbeafe,#eff6ff)"
        : "#eef2ff",
      color: "#1d4ed8",
      fontWeight: "700",
      transition: "0.3s",
      boxShadow: hover
        ? "0 4px 12px rgba(59,130,246,0.15)"
        : "none",
    },

    text: {
      fontSize: "13px",
      margin: "5px 0",
      color: "#475569",
    },

    button: {
      width: "100%",
      marginTop: "14px",
      padding: "12px",
      borderRadius: "14px",
      border: "none",
      background: hover
        ? "linear-gradient(135deg,#1e3a8a,#2563eb,#3b82f6)"
        : "#2563eb",
      color: "white",
      fontWeight: "800",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: hover
        ? "0 15px 30px rgba(37,99,235,0.35)"
        : "none",
    },
  };

  return (
    <Link to={`/country/${country.cca3}`} style={styles.link}>
      <div
        style={styles.card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* IMAGE SECTION */}
        <div style={styles.imageWrap}>
          <img
            src={country.flags?.png}
            alt={country.name?.common}
            style={styles.flag}
          />

          <div style={styles.overlay}></div>

          {/* ✨ cinematic light sweep */}
          <div style={styles.shine}></div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          <div style={styles.title}>
            {country.name?.common}
          </div>

          <div style={styles.row}>
            <span style={styles.badge}>🌍 {country.region}</span>
            <span style={styles.badge}>🏷 {country.cca3}</span>
          </div>

          <p style={styles.text}>
            <b>Capital:</b> {country.capital?.[0] || "N/A"}
          </p>

          <p style={styles.text}>
            <b>Population:</b>{" "}
            {country.population?.toLocaleString()}
          </p>

          <button style={styles.button}>
            🎬 Explore Country
          </button>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;