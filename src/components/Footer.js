import { Link } from "react-router-dom";

function Footer() {
  const styles = {
    footer: {
      background:
        "radial-gradient(circle at top, #1e3a8a, #0b1220 60%)",
      color: "#fff",
      marginTop: "80px",
      paddingTop: "70px",
      position: "relative",
      overflow: "hidden",
    },

    glow: {
      position: "absolute",
      top: "-100px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "500px",
      height: "500px",
      background: "rgba(59,130,246,0.25)",
      filter: "blur(120px)",
      borderRadius: "50%",
      zIndex: 0,
    },

    container: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 30px 50px",
    },

    card: {
      flex: 1,
      minWidth: "240px",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px",
      padding: "22px",
      transition: "0.3s ease",
    },

    brandTitle: {
      fontSize: "26px",
      fontWeight: "900",
      marginBottom: "10px",
    },

    text: {
      color: "#cbd5f5",
      lineHeight: "1.7",
      fontSize: "14px",
    },

    heading: {
      marginBottom: "14px",
      fontSize: "16px",
      fontWeight: "800",
      color: "#e0e7ff",
    },

    link: {
      display: "block",
      color: "#cbd5f5",
      textDecoration: "none",
      marginBottom: "10px",
      fontSize: "14px",
      padding: "6px 0",
      transition: "0.3s",
    },

    badge: {
      display: "inline-block",
      marginTop: "10px",
      padding: "6px 12px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.1)",
      fontSize: "12px",
      color: "#93c5fd",
    },

    bottom: {
      textAlign: "center",
      padding: "18px",
      fontSize: "13px",
      color: "#94a3b8",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.glow}></div>

      <div style={styles.container}>
        {/* BRAND */}
        <div
          style={styles.card}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h2 style={styles.brandTitle}>🌍 Countries Explorer</h2>

          <p style={styles.text}>
            A cinematic world atlas experience — explore countries like scenes
            in a movie 🎬
          </p>

          <span style={styles.badge}>Powered by REST Countries API</span>
        </div>

        {/* LINKS */}
        <div
          style={styles.card}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3 style={styles.heading}>🎞 Navigation</h3>

          {[
            { to: "/", label: "🏠 Home" },
            { to: "/about", label: "ℹ️ About" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={styles.link}
              onMouseEnter={(e) => {
                e.target.style.color = "#ffffff";
                e.target.style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#cbd5f5";
                e.target.style.transform = "translateX(0)";
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* INFO */}
        <div
          style={styles.card}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3 style={styles.heading}>🌐 Data Universe</h3>

          <p style={styles.text}>
            Real-time global intelligence: flags, currencies, languages,
            borders, and time zones.
          </p>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Countries Explorer • Final Scene 🎬
      </div>
    </footer>
  );
}

export default Footer;