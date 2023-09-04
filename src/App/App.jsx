import { AppProvider } from "./AppProvider";
import { AppRouter } from "./AppRouter";
import { Header } from "../components/header/Header";
import "./App.css";

export function App() {
  return (
    <AppProvider>
      <Header />
      <AppRouter />
    </AppProvider>
  );
}
