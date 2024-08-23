import { useContext, useState } from "react";
import { AppContext } from "../store/context";

function Search() {
  const { setSearchTerm, fetchRandomMeal } = useContext(AppContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };
  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="w-full py-8 bg-[#010101] px-1 md:px-5 flex items-center justify-center flex-wrap text-white">
        <form
          action=""
          method="get"
          className="flex items-center gap-4 md:gap-10"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-lg border-[3px] border-gray-900 px-1 md:px-2 py-0.5 placeholder:text-gray-800 max-w-[300px] w-[18vw] active:outline-none focus:border-blue-500 focus:outline-none text-black"
            type="text"
            name="search"
            id=""
            value={text}
            onChange={handleChange}
            placeholder="Search your favourite meals..."
          />
          <button
            className="px-1 py-0.5 md:px-3 md:py-1 rounded text-xs md:text-lg font-medium md:font-semibold bg-rose-500 hover:bg-rose-600 text-white"
            type="submit"
          >
            SEARCH
          </button>
          <button
            className="px-1 py-0.5 md:px-3 md:py-1 rounded text-xs md:text-lg font-medium md:font-semibold bg-rose-500 hover:bg-rose-600 text-white"
            type="button"
            onClick={handleRandomMeal}
          >
            Surprise me!
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
