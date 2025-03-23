import { IoMdClose } from "react-icons/io";
const CookiesDialogBox = ({ showCookieComponent, setShowCookieComponent }) => {
  return showCookieComponent ? (
    <div className="bg-white w-80 h-64 fixed bottom-2 right-2 z-10 shadow-2xl px-6 py-2 rounded-md">
      <IoMdClose
        className="ml-auto font-bold"
        onClick={() => setShowCookieComponent(false)}
      />
      <p className="font-medium text-sm">
        This website uses cookies to enhance user experience and to analyze
        performance and traffic on our website. We also share information about
        your use of our site with out social media, advertising and analytics
        partners.{" "}
        <a href="#" className="text-blue-500 underline">
          More Info
        </a>
      </p>
      <button className="bg-[#611f69] text-white py-2 px-4 rounded-md w-full font-medium mt-2 cursor-pointer">
        ACCEPT ALL COOKIES
      </button>
      <button className="text-[#611f69] border-2 border-[#611f69] py-2 px-4 rounded-md w-full mt-2 font-medium cursor-pointer">
        REJECT ALL COOKIES
      </button>
    </div>
  ) : null;
};

export default CookiesDialogBox;
