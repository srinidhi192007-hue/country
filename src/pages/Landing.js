import { Link } from "react-router-dom";

function Landing() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      background: "#050816",
      overflow: "hidden",
      position: "relative",
    },

    floatingOrb1: {
      position: "absolute",
      width: "300px",
      height: "300px",
      background: "radial-gradient(circle, #3b82f6, transparent)",
      top: "-80px",
      left: "-80px",
      filter: "blur(60px)",
      animation: "float 6s ease-in-out infinite",
    },

    floatingOrb2: {
      position: "absolute",
      width: "250px",
      height: "250px",
      background: "radial-gradient(circle, #60a5fa, transparent)",
      bottom: "-60px",
      right: "-60px",
      filter: "blur(70px)",
      animation: "float 8s ease-in-out infinite",
    },

    card: {
      textAlign: "center",
      padding: "55px 45px",
      borderRadius: "28px",
      background: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
      maxWidth: "480px",
      width: "100%",
      border: "1px solid rgba(255,255,255,0.1)",
      animation: "zoomIn 1s ease",
    },

    badge: {
      display: "inline-block",
      marginBottom: "20px",
      padding: "6px 14px",
      borderRadius: "999px",
      background: "rgba(59, 130, 246, 0.15)",
      color: "#93c5fd",
      fontSize: "12px",
      fontWeight: "600",
    },

    title: {
      marginBottom: "18px",
      fontSize: "2.6rem",
      fontWeight: "900",
      color: "#ffffff",
      lineHeight: "1.2",
      textShadow: "0 0 20px rgba(59,130,246,0.4)",
    },

    subtitle: {
      marginBottom: "30px",
      color: "#cbd5e1",
      lineHeight: 1.7,
      fontSize: "15.5px",
    },

    button: {
      display: "inline-block",
      padding: "14px 34px",
      borderRadius: "999px",
      background: "linear-gradient(135deg, #2563eb, #60a5fa)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: "800",
      fontSize: "15px",
      boxShadow: "0 15px 40px rgba(37, 99, 235, 0.35)",
      transition: "all 0.3s ease",
      animation: "pulse 2s infinite",
    },
  };

  return (
    <div style={styles.page}>
      {/* floating lights */}
      <div style={styles.floatingOrb1}></div>
      <div style={styles.floatingOrb2}></div>

      {/* MAIN CARD */}
      <div style={styles.card}>
        <div style={styles.badge}>🌍 GLOBAL DATA EXPERIENCE</div>

        <h1 style={styles.title}>
          Explore the World<br />
        </h1>

        <p style={styles.subtitle}>
          Countries, currencies, time zones
        </p>

        <Link
          to="/country"
          style={styles.button}
        >
          ▶ Start Exploring
        </Link>
      </div>

      {/* ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default Landing;