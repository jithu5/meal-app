import React, { useContext ,useEffect} from "react";
import { AppContext } from "../store/context";

function Modal() {
  const { selectedMeal, setShowModal } = useContext(AppContext);

  if (!selectedMeal) {
    return null; // or some fallback UI
  }

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    };
  }, []);
  return (
    <>
      <div className="fixed w-full h-full inset-0 z-40 bg-black/70">
        <div className="fixed top-[50%] left-[50%] rounded-2xl translate-x-[-50%] translate-y-[-50%] w-[80%] md:w-[60%] h-[85vh] md:h-[75vh] bg-gray-300  text-black sm:py-3 sm:px-4 md:py-8 md:px-10 shadow-lg z-50">
          <div className="no-scrollbar w-full h-full flex flex-col items-center overflow-y-auto p-1 gap-5 pb-5">
            <img
              src={selectedMeal.strMealThumb}
              className="w-full h-40 md:h-72 cursor-pointer object-cover rounded-lg object-center "
              alt=""
            />
            <div className="w-full flex justify-center items-center gap-5 px-2">
              {selectedMeal.strTags &&
                selectedMeal.strTags
                  .split(",")
                  .map((tags,i) => (
                    <h1 key={i} className="px-1 py-0.5 md:px-3 md:py-1 text-xs md:text-md border-[2px] border-slate-100 rounded-md">
                      {tags}
                    </h1>
                  ))}
            </div>
            <h1 className="text-lg font-semibold md:text-2xl md:font-bold tracking-tight">
              {selectedMeal.strMeal}
            </h1>
            <div className="flex flex-col gap-3 items-center px-2">
              <h1>INSTRUCTIONS</h1>
              <div className="text-sm font-normal text-gray-800 md:text-md md:font-semibold leading-[1.2]">
                {selectedMeal.strInstructions.split("STEP ").map((steps,i) => (
                  <p key={i}>{steps}<br/><br/></p>
                ))}
              </div>
            </div>
            <a
              className="text-blue-500 underline text-sm md:text-md"
              href={selectedMeal.strSource}
            >
              Resorces
            </a>
            <button
              className="px-1 py-0.5 md:px-3 rounded text-md md:text-lg font-normal md:font-semibold bg-rose-500 hover:bg-rose-600 text-white"
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
