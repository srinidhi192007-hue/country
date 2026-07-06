import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const styles = {
    header: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 40px",
      background:
        "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(2,6,23,0.85))",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
    },

    logoBlock: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      transition: "0.3s",
    },

    logo: {
      fontSize: "26px",
      fontWeight: "900",
      margin: 0,
      letterSpacing: "0.8px",
      background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subtitle: {
      fontSize: "12px",
      color: "#94a3b8",
      marginTop: "3px",
      letterSpacing: "0.3px",
    },

    nav: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },

    link: (active) => ({
      position: "relative",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "600",
      padding: "10px 16px",
      borderRadius: "14px",
      color: active ? "#ffffff" : "#cbd5f5",
      background: active
        ? "rgba(99,102,241,0.25)"
        : "rgba(255,255,255,0.06)",
      border: active
        ? "1px solid rgba(99,102,241,0.5)"
        : "1px solid transparent",
      boxShadow: active
        ? "0 0 20px rgba(99,102,241,0.35)"
        : "none",
      transition: "all 0.25s ease",
      transform: "translateY(0)",
    }),
  };

  const navItems = [
    { to: "/", label: "🏠 Home" },
    { to: "/country", label: "🌍 Country" },
    { to: "/about", label: "ℹ️ About" },
  ];

  return (
    <header style={styles.header}>
      {/* LOGO */}
      <div
        style={styles.logoBlock}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.03)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <h2 style={styles.logo}>🌍 Countries Explorer</h2>
        <p style={styles.subtitle}>
          A cinematic world experience
        </p>
      </div>

      {/* NAV */}
      <nav style={styles.nav}>
        {navItems.map((item) => {
          const active = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              style={styles.link(active)}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.transform =
                    "translateY(0) scale(1)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)";
                }
              }}
            >
              {item.label}

              {/* active glow line */}
              {active && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    left: "20%",
                    width: "60%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg,#60a5fa,#a78bfa)",
                    borderRadius: "10px",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;