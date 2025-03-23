import { IoMdClose } from "react-icons/io";
const AssistantDialogBox = ({ showAssistantBody, setShowAssistantBody }) => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center z-30 ">
      {showAssistantBody ? (
        <>
          <button className="absolute top-0 -left-6 bg-gray-600 p-1 rounded-full shadow-md z-40 cursor-pointer">
            <IoMdClose
              className="text-white h-3 w-3"
              onClick={() => setShowAssistantBody(false)}
            />
          </button>

          <p className="text-gray-800 flex-1 text-sm bg-white py-2 px-4 rounded-2xl shadow-2xl drop-shadow-2xl">
            Hey there 👋 Want to know <br /> something cool?
          </p>
        </>
      ) : null}

      <div className="ml-2 bg-[#611f69] text-white p-2 rounded-lg shadow-md">
        <span
          className="text-xl cursor-pointer"
          onClick={() => setShowAssistantBody(!showAssistantBody)}
        >
          👋
        </span>
      </div>
    </div>
  );
};

export default AssistantDialogBox;
