import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/app-ui/Navbar";
import Footer from "./components/app-ui/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col min-h-screen">
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
