import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.cca3}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          style={{
            width: "100%",
            height: "170px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "15px" }}>
          <h3>{country.name?.common}</h3>

          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>

          <p>
            <strong>Region:</strong> {country.region}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {country.population?.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;