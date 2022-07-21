import { Routes, Route } from "react-router-dom";
import { DeckCards } from "./pages/DeckCards";
import { Login } from "./pages/Login";
import { UserProvider } from "./context/userContext";

export function Router() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cards" element={<DeckCards />} />
      </Routes>
    </UserProvider>
  );
}
