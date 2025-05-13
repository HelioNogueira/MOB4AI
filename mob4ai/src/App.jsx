import { useState } from "react";
import Welcome from "./views/Welcome";
import Dashboard from "./views/Dashboard";

function App() {
  const [page, setPage] = useState("welcome");

  return page === "welcome" ? (
    <Welcome onStart={() => setPage("dashboard")} />
  ) : (
    <Dashboard />
  );
}

export default App;
