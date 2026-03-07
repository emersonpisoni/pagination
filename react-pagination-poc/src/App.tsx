import { useState } from "react";
import { ClientPaginationDemo } from "./components/client-pagination-demo";
import { ServerPaginationDemo } from "./components/server-pagination-demo";

function App() {
  const [mode, setMode] = useState("client");

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>React Pagination POC</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <button onClick={() => setMode("client")}>Client-Side</button>
        <button onClick={() => setMode("server")}>Server-Side</button>
      </div>

      {mode === "client" ? <ClientPaginationDemo /> : <ServerPaginationDemo />}
    </div>
  );
}

export default App;