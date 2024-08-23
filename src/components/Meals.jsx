import React, { useContext } from "react";
import { AppContext } from "../store/context";
import { SlLike } from "react-icons/sl";

function Meals() {
  const { meals, selectMeal, loading, addToFavourites } =
    useContext(AppContext);
  return (
    <>
      <div className="w-full py-10">
        <h1 className="text-xl md:text-3xl font-bold text-center">MEALS</h1>
        {/* conditional rendering */}
        {loading ? (
          <h1 className="text-2xl md:text-4xl font-bold text-center mt-20">
            Loading...
          </h1>
        ) : meals.length === 0 ? (
          <h1 className="text-2xl md:text-4xl font-bold text-center mt-20">
            No items found...
          </h1>
        ) : (
          <section className="w-full py-10 px-2 md:px-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-10">
            {meals.map((item, index) => (
              <div
                key={item.idMeal}
                className="max-[360px]:w-[135px] w-[160px]  sm:w-[200px] lg:w-[300px] h-[250px] sm:h-[270px] min-h-fit rounded-lg text-black bg-gray-200 px-3 py-3 flex flex-col group items-center gap-6 sm:gap-3 shadow-gray-300 shadow-sm"
              >
                <img
                  className="w-full object-cover h-32 transform transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-xl cursor-pointer"
                  src={item.strMealThumb}
                  alt=""
                />
                <h1 className="text-sm lg:text-lg font-semibold md:font-bold">
                  {item.strMeal.slice(0, 20)}...
                </h1>
                <div className="hidden sm:flex items-center justify-between w-full">
                  <h3 className="text-sm font-semibold">
                    Area :{item.strArea}
                  </h3>
                  <h3 className="text-sm font-semibold">
                    Category :{item.strCategory}
                  </h3>
                </div>
                <div className="flex items-center justify-between w-full">
                  <SlLike
                    className="cursor-pointer"
                    onClick={() => addToFavourites(item.idMeal)}
                  />
                  <button
                    className="px-1 py-0.5 md:px-3 md:py-1 rounded text-xs md:text-md font-normal md:font-semibold bg-rose-500 hover:bg-rose-600 text-white"
                    onClick={() => selectMeal(item.idMeal)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
        {/* end of conditional rendering  */}
      </div>
    </>
  );
}

export default Meals;