import { useState, useEffect, useRef } from "react";
import { IoGameController } from "react-icons/io5"; // Game Icon (React Icons)

const FloatingGameInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null); // Reference to the popup card

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-10 right-10 hidden lg:block z-50">
      {/* Floating Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-green-600 hover:bg-green-700 bg-gradient-to-r from-green-500 to-yellow-800 text-white rounded-full shadow-lg transition-all ease-in-out duration-300 hover:scale-105"
      >
        <IoGameController size={30} />
      </button>

      {/* Mini Popup Window */}
      {isOpen && (
        <div
          ref={popupRef} // Attach ref to popup
          className="absolute bottom-16 right-0 p-4 w-80 shadow-lg rounded-lg bg-black/20 backdrop-blur-md border border-white/30 "
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-gray-600 hover:text-gray-400 z-50 bg-black rounded-full px-2 py-1"
          >
            ✖
          </button>

          {/* Image with Hover Effect */}
          <div className="relative group">
            <img
              src="/Assets/Homepage/gameCoverImg.jpg"
              alt="Game Cover"
              className="w-full h-40 object-cover rounded transition-all duration-300 group-hover:brightness-50"
            />

            {/* Play Button (Initially Hidden) */}
            <a
              href="https://vibhav124.itch.io/vibhavgame"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black bg-opacity-25  text-white z-40 absolute inset-0 flex items-center justify-center rounded transition-opacity duration-500 ease-in-out opacity-0  group-hover:opacity-100"
            >
              <button className="bg-black/80 px-3 py-1 rounded-full">Play</button>
              
            </a>
          </div>

          {/* Game Info */}
          <h3 className="text-lg font-bold mt-2 text-gray-300">Portal Hunt</h3>
          <p className="text-gray-300 text-sm mt-1">
            Experience the thrill of adventure in our latest game. Play now and enjoy endless fun!
          </p>
        </div>
      )}
    </div>
  );
};

export default FloatingGameInfo;
