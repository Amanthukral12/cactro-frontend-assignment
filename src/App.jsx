import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <main className="flex flex-col items-center bg-[#f2e8e6] min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}

export default App;
