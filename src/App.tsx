import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/app-ui/Navbar";
import Footer from "./components/app-ui/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className=" min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-primary/20 dark:from-background dark:via-background/95 dark:to-primary/95">
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_50%_10%,var(--tw-gradient-from),transparent)] from-primary/15" />
            <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_80%_50%,var(--tw-gradient-from),transparent)] from-accent/10" />
            <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_20%_50%,var(--tw-gradient-from),transparent)] from-secondary/20" />
            <div className="absolute inset-0 dark:bg-[radial-gradient(45%_35%_at_50%_10%,var(--tw-gradient-from),transparent)] dark:from-primary/30" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--tw-gradient-from)_0%,transparent_50%)] from-primary/5" />
          </div>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* Add more routes here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
