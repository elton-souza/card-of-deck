import { Routes, Route } from "react-router-dom";
import { DeckCards } from "./pages/DeckCards";
import { Home } from "./pages/Home";
import { UserProvider } from "./context/userContext";

export function Router() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<DeckCards />} />
      </Routes>
    </UserProvider>
  );
}
