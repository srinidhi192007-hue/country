function SearchBar({ search, setSearch, searchType, setSearchType }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        padding: "18px",
        margin: "20px 0",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
        borderRadius: "18px",
        flexWrap: "wrap",
      }}
    >
      {/* SEARCH TYPE */}
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "#0f172a",
          color: "#fff",
          border: "1px solid #334155",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <option value="name">Name</option>
        <option value="capital">Capital</option>
        <option value="code">Code</option>
        <option value="letter">Letter</option>
      </select>

      {/* SEARCH INPUT */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search by ${searchType}...`}
        style={{
          width: "350px",
          maxWidth: "90%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #334155",
          background: "#0b1220",
          color: "#fff",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;