import { IoMdSearch } from "react-icons/io";
import logo from "../assets/slack-salesforce-logo-nav-black.png";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="max-w-6xl w-full flex justify-between items-center h-20">
      <div className="flex">
        <img src={logo} alt="Slack Salesforce Logo" className="h-9 mr-6 mt-2" />
        <div className="flex items-center font-medium space-x-8">
          <p className="flex items-center">
            Product <FaChevronDown className="ml-1 h-3 w-3" />
          </p>
          <p>Enterprise</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>
      </div>
      <div className="flex font-medium space-x-8 items-center">
        <IoMdSearch className="h-6 w-6" />
        <p>Sign in</p>
        <button className="text-[#611f69] border-2 border-[#611f69] py-2 px-4 rounded-md cursor-pointer">
          TALK TO SALES
        </button>
        <button className="bg-[#611f69] text-white py-2 px-4 rounded-md cursor-pointer">
          TRY FOR FREE
        </button>
      </div>
    </header>
  );
};

export default Navbar;
