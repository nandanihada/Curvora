import { useState, useEffect } from "react";
import kurti1 from "@/assets/kurti-1.jpg";
import kurti2 from "@/assets/kurti-2.jpg";
import kurti3 from "@/assets/kurti-3.jpg";
import kurti4 from "@/assets/kurti-4.jpg";

const GoldenGates = () => {
  const [gatesOpen, setGatesOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const images = [kurti1, kurti2, kurti3, kurti4];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && gatesOpen) {
        setGatesOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [gatesOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreenImage) {
        setFullscreenImage(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenImage]);

  const toggleGates = () => {
    setGatesOpen(!gatesOpen);
  };

  const openFullscreen = (img: string) => {
    setFullscreenImage(img);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="relative h-screen flex items-center justify-center perspective-2000">
        {/* Gates */}
        <div className="gates-wrapper fixed inset-0 flex items-center justify-center z-10">
          <div
            className={`gate gate-left absolute w-1/2 max-w-md h-4/5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 border-8 border-yellow-700 rounded-3xl shadow-2xl cursor-pointer transform transition-transform duration-1000 ${
              gatesOpen ? "rotate-y-[-120deg]" : "rotate-y-0"
            }`}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              left: "10%",
            }}
            onClick={toggleGates}
          >
            <div className="gate-decoration absolute inset-0 border-4 border-yellow-700/50 rounded-2xl pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-700/30 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-700/30 transform -translate-x-1/2"></div>
            </div>
            <div className="handle absolute top-1/2 right-8 w-10 h-30 bg-gradient-to-r from-amber-800 to-amber-700 rounded-2xl shadow-lg transform -translate-y-1/2"></div>
          </div>

          <div
            className={`gate gate-right absolute w-1/2 max-w-md h-4/5 bg-gradient-to-bl from-yellow-400 via-yellow-500 to-yellow-600 border-8 border-yellow-700 rounded-3xl shadow-2xl cursor-pointer transform transition-transform duration-1000 ${
              gatesOpen ? "rotate-y-[120deg]" : "rotate-y-0"
            }`}
            style={{
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
              right: "10%",
            }}
            onClick={toggleGates}
          >
            <div className="gate-decoration absolute inset-0 border-4 border-yellow-700/50 rounded-2xl pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-700/30 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-700/30 transform -translate-x-1/2"></div>
            </div>
            <div className="handle absolute top-1/2 left-8 w-10 h-30 bg-gradient-to-l from-amber-800 to-amber-700 rounded-2xl shadow-lg transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Drawer */}
        <div
          className={`drawer fixed top-1/2 left-1/2 w-4/5 max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-yellow-400 rounded-3xl p-10 shadow-2xl z-5 transition-all duration-1000 ${
            gatesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-50 pointer-events-none"
          }`}
          style={{
            transform: gatesOpen ? "translate(-50%, -50%) translateZ(0)" : "translate(-50%, -50%) translateZ(-500px) scale(0.5)",
          }}
        >
          <h2 className="drawer-title text-center text-yellow-400 text-4xl mb-8 text-shadow-lg">
            ✨ Gallery Collection ✨
          </h2>
          <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((img, index) => (
              <div
                key={index}
                className="gallery-item aspect-square bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-yellow-400 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/40 flex items-center justify-center text-yellow-400 text-xl"
                onClick={() => openFullscreen(img)}
              >
                <img src={img} alt={`Picture ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Instruction */}
        <div className="instruction fixed bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xl text-center z-20 animate-pulse">
          {gatesOpen ? "📜 Scroll down to close the gates" : "👆 Click the Golden Gates to Enter"}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenImage && (
        <div className="fullscreen-overlay fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fadeIn">
          <div className="fullscreen-content relative max-w-11/12 max-h-11/12">
            <button
              className="close-btn absolute -top-16 right-0 bg-yellow-400 text-gray-900 px-8 py-3 rounded-full cursor-pointer font-bold text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105"
              onClick={closeFullscreen}
            >
              Close & Put Back
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-screen object-contain border-4 border-yellow-400 rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="content-section mt-screen pt-24 pb-16 px-5 text-yellow-400 text-center text-2xl">
        <h2>Scroll down to close the gates...</h2>
        <p className="mt-5">Keep scrolling ↓</p>
      </div>
    </div>
  );
};

export default GoldenGates;
