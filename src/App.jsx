import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import Logobar from "./components/Logobar.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <main className="flex flex-col items-center bg-[#f2e8e6] min-h-screen">
      <Navbar />
      <HeroSection />
      <Logobar />
    </main>
  );
}

export default App;
