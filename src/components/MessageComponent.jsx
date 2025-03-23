import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const MessageComponent = ({ show, setShow }) => {
  return show ? (
    <div className="bg-[#3b629c] w-full max-w-7xl text-white flex justify-between items-center py-6 px-8 rounded-4xl">
      <h3>
        Slack is your digital HQ. Meet the new features keeping teams connected
        in a work-from-anywhere world.{" "}
        <span className="underline underline-offset-4">Let's go </span>
        <FaArrowRight className="inline" />
      </h3>
      <IoMdClose onClick={() => setShow(!show)} />
    </div>
  ) : null;
};

export default MessageComponent;
