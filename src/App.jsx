import { useEffect, useState } from "react";
import "./App.css";
import BodySection from "./components/BodySection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Logobar from "./components/Logobar.jsx";
import Navbar from "./components/Navbar.jsx";
import MessageComponent from "./components/MessageComponent.jsx";
import CookiesDialogBox from "./components/CookiesDialogBox.jsx";
import AssistantDialogBox from "./components/AssistantDialogBox.jsx";

function App() {
  const [show, setShow] = useState(false);
  const [showCookieComponent, setShowCookieComponent] = useState(false);
  const [showAssistantBody, setShowAssistantBody] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowCookieComponent(true);
    }, 3000);
  }, []);
  return (
    <main className="flex flex-col items-center bg-[#f2e8e6] min-h-screen">
      <Navbar />
      <MessageComponent show={show} setShow={setShow} />
      <HeroSection />
      <Logobar />
      <BodySection />
      <CookiesDialogBox
        showCookieComponent={showCookieComponent}
        setShowCookieComponent={setShowCookieComponent}
      />
      <AssistantDialogBox
        showAssistantBody={showAssistantBody}
        setShowAssistantBody={setShowAssistantBody}
      />
    </main>
  );
}

export default App;
