import { useState, useRef } from "react";
import { getExchangeRate } from "../services/countryService";

function CountryCompareDashboard({ countries }) {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [c1, setC1] = useState(null);
  const [c2, setC2] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resultRef = useRef(null);

  const filtered = (text) =>
    countries.filter((c) =>
      c.name.common.toLowerCase().startsWith(text.toLowerCase())
    );

  const getOffset = (tz) => {
    const match = tz?.match(/UTC([+-])(\d{2}):?(\d{2})?/);
    if (!match) return 0;
    const sign = match[1] === "+" ? 1 : -1;
    return sign * (parseInt(match[2]) + parseInt(match[3] || 0) / 60);
  };

  const getTime = (offset) => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + offset * 3600000).toLocaleTimeString();
  };

  const compare = async () => {
    if (!c1 || !c2) {
      setError("Select both countries");
      return;
    }

    // 🚫 SAME COUNTRY CHECK
    if (c1.name.common === c2.name.common) {
      setError("🚫 Please select two different countries");
      return;
    }

    setError("");
    setLoading(true);

    const cur1 = Object.keys(c1.currencies || {})[0];
    const cur2 = Object.keys(c2.currencies || {})[0];

    const rates = await getExchangeRate(cur1);

    const t1 = getOffset(c1.timezones?.[0]);
    const t2 = getOffset(c2.timezones?.[0]);

    setResult({
      c1: c1.name.common,
      c2: c2.name.common,
      cur1,
      cur2,
      rate: rates[cur2],
      time1: getTime(t1),
      time2: getTime(t2),
      diff: t2 - t1,
    });

    setLoading(false);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  const styles = {
    wrapper: {
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      padding: "35px",
      borderRadius: "22px",
      boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
      border: "1px solid rgba(148,163,184,0.2)",
      color: "#e2e8f0",
    },

    title: {
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "800",
      color: "#e2e8f0",
      marginBottom: "20px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },

    inputBox: {
      position: "relative",
    },

    input: {
      width: "100%",
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid rgba(148,163,184,0.25)",
      outline: "none",
      fontSize: "14px",
      background: "rgba(2,6,23,0.6)",
      color: "#fff",
    },

    dropdown: {
      position: "absolute",
      width: "100%",
      background: "rgba(15, 23, 42, 0.98)",
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
      maxHeight: "180px",
      overflowY: "auto",
      zIndex: 999,
      marginTop: "6px",
      border: "1px solid rgba(148,163,184,0.25)",
      color: "#e2e8f0",
    },

    compareBtn: {
      marginTop: "25px",
      padding: "13px 28px",
      borderRadius: "14px",
      border: "none",
      fontWeight: "800",
      color: "#fff",
      background: "linear-gradient(135deg,#2563eb,#7c3aed)",
      cursor: "pointer",
      boxShadow: "0 15px 40px rgba(37,99,235,0.35)",
      transition: "0.3s",
    },

    error: {
      textAlign: "center",
      color: "#ef4444",
      marginTop: "10px",
      fontWeight: "600",
    },

    resultWrap: {
      marginTop: "35px",
    },

    vsHeader: {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "900",
      color: "#e2e8f0",
      marginBottom: "20px",
    },

    cards: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    card: {
      flex: 1,
      minWidth: "240px",
      background: "rgba(15, 23, 42, 0.7)",
      borderRadius: "16px",
      padding: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
      border: "1px solid rgba(148,163,184,0.2)",
      color: "#e2e8f0",
    },

    cardTitle: {
      fontSize: "15px",
      fontWeight: "800",
      marginBottom: "10px",
      color: "#60a5fa",
    },

    text: {
      fontSize: "14px",
      color: "#cbd5f5",
      margin: "6px 0",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>
        🌍 Premium Country Comparison Dashboard
      </div>

      {/* INPUTS */}
      <div style={styles.grid}>
        {[{ c: c1, setC: setC1, s: search1, setS: setSearch1 },
          { c: c2, setC: setC2, s: search2, setS: setSearch2 }
        ].map((box, i) => (
          <div key={i} style={styles.inputBox}>
            <input
              style={styles.input}
              placeholder={`Select Country ${i + 1}`}
              value={box.c ? box.c.name.common : box.s}
              onChange={(e) => {
                box.setC(null);
                box.setS(e.target.value);
              }}
            />

            {box.s && !box.c && (
              <div style={styles.dropdown}>
                {filtered(box.s).slice(0, 6).map((c) => (
                  <div
                    key={c.cca3}
                    onClick={() => {
                      box.setC(c);
                      box.setS("");
                    }}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(148,163,184,0.15)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(37,99,235,0.25)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    🌍 {c.name.common}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div style={{ textAlign: "center" }}>
        <button onClick={compare} style={styles.compareBtn}>
          {loading ? "Comparing..." : "Compare Countries ⚔️"}
        </button>

        {error && <div style={styles.error}>{error}</div>}
      </div>

      {/* RESULT */}
      {result && (
        <div ref={resultRef} style={styles.resultWrap}>
          <div style={styles.vsHeader}>
            ⚔️ {result.c1} VS {result.c2}
          </div>

          <div style={styles.cards}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>💱 Currency</div>
              <p style={styles.text}>
                1 {result.cur1} ={" "}
                <b>{result.rate?.toFixed(4)}</b> {result.cur2}
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>🕒 Time Difference</div>
              <p style={styles.text}>{result.time1}</p>
              <p style={styles.text}>{result.time2}</p>
              <p style={styles.text}>
                ⏱ <b>{Math.abs(result.diff).toFixed(1)} hrs difference</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryCompareDashboard;