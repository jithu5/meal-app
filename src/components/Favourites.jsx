import React, { useContext } from "react";
import { AppContext } from "../store/context";
import { RiH1 } from "react-icons/ri";

function Favourites() {
  const { favourites, RemoveFromFavourites, selectMeal } =
    useContext(AppContext);
  return (
    <>
      <div className="px-1 py-2 md:px-10 md:py-3 bg-slate-100 flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar">
        {favourites.length > 0 ? (
          favourites.map((favourite) => (
            <div
              key={favourite.idMeal}
              className="flex flex-col gap-2 items-center bg-transparent"
            >
              <img
                onClick={() => selectMeal(favourite.idMeal,true)}
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                src={favourite.strMealThumb}
                alt=""
              />
              <button
                onClick={() => RemoveFromFavourites(favourite.idMeal)}
                className="rounded text-white text-[10px] font-thin bg-red-800 px-0.5 py-0.5"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h1 className="text-center text-black text-2xl font-semibold">
            No favourites here...
          </h1>
        )}
      </div>
    </>
  );
}

export default Favourites;
