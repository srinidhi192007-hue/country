function About() {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "60px 20px",
      background:
        "radial-gradient(circle at top, #0f172a, #020617)",
      color: "#fff",
    },

    container: {
      maxWidth: "980px",
      margin: "0 auto",
      padding: "40px",
      borderRadius: "24px",
      background: "rgba(255,255,255,0.06)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
      textAlign: "center",
    },

    heading: {
      fontSize: "42px",
      fontWeight: "900",
      marginBottom: "10px",
      background:
        "linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    subtitle: {
      fontSize: "16px",
      color: "#94a3b8",
      marginBottom: "25px",
    },

    paragraph: {
      fontSize: "17px",
      lineHeight: "1.8",
      color: "#cbd5e1",
      marginBottom: "18px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginTop: "40px",
    },

    card: {
      padding: "22px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      cursor: "pointer",
      transition: "0.4s ease",
    },

    icon: {
      fontSize: "28px",
      marginBottom: "10px",
    },

    cardTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#93c5fd",
      marginBottom: "8px",
    },

    footerText: {
      marginTop: "35px",
      fontSize: "13px",
      color: "#64748b",
    },
  };

  const cards = [
    {
      icon: "🔍",
      title: "Smart Search",
      desc: "Search countries instantly by name, capital, or code.",
    },
    {
      icon: "🌍",
      title: "Global Data",
      desc: "Live world data powered by REST Countries API.",
    },
    {
      icon: "⚡",
      title: "Fast Experience",
      desc: "Smooth UI with transitions & modern design.",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Countries Explorer</h1>

        <p style={styles.subtitle}>
          A world atlas experience 🌍
        </p>

        <p style={styles.paragraph}>
          Step into a smooth, movie-like browsing experience where every
          country feels like a scene in a global documentary.
        </p>

        <p style={styles.paragraph}>
          Explore nations, compare data, and travel through the world — all
          from a single immersive interface.
        </p>

        {/* CARDS */}
        <div style={styles.grid}>
          {cards.map((item, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 25px 60px rgba(59,130,246,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.3)";
              }}
            >
              <div style={styles.icon}>{item.icon}</div>
              <div style={styles.cardTitle}>{item.title}</div>
              <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={styles.footerText}>
          Built with React • REST API 
        </p>
      </div>
    </div>
  );
}

export default About;