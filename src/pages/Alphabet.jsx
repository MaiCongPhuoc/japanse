import { useState } from "react";
import HiraganaComponent from "../components/HiraganaComponent";
// import KatakanaComponent from "../components/KatakanaComponent";
import KanjiComponent from "../components/KanjiComponent";

const Alphabet = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="md:mt-10 md:w-11/12 animate-opacity-open flex-col border border-gray-300 w-9/12 mx-auto">
      <div className="mt-3">
        <ul className="flex justify-around items-center cursor-pointer md:h-20 h-10">
          <li className="w-full h-full">
            <button
              className={`md:text-3xl flex items-center justify-center w-full h-full hover:bg-gray-300 ${
                toggleState === 1
                  ? "border-b-4 border-blue-500 text-red-500 font-bold"
                  : ""
              }`}
              onClick={() => toggleTab(1)}
            >
              Hiragana & Katakana
            </button>
          </li>
          {/* <li
            className={`md:text-3xl flex items-center justify-center w-full h-full hover:bg-gray-300 ${
                toggleState === 2
                  ? "border-b-4 border-blue-500 text-red-500 font-bold"
                  : ""
              }`}
            onClick={() => toggleTab(2)}
          >
            Katakana
          </li> */}
          <li className="w-full h-full">
            <button
              className={`md:text-3xl flex items-center justify-center w-full h-full hover:bg-gray-300 ${
                toggleState === 3
                  ? "border-b-4 border-blue-500 text-red-500 font-bold"
                  : ""
              }`}
              onClick={() => toggleTab(3)}
            >
              Kanji
            </button>
          </li>
        </ul>
        <div className="border-2 border-amber-300">
          <div
            className={`${
              toggleState === 1 ? "flex-col" : "hidden"
            } justify-center items-center`}
          >
            <HiraganaComponent />
          </div>
          {/* <div
            className={`${
              toggleState === 2 ? "" : "hidden"
            } justify-center items-center`}
          >
            <KatakanaComponent data={KatakanaRef.current} />
          </div> */}
          <div
            className={`${
              toggleState === 3 ? "" : "hidden"
            } justify-center items-center`}
          >
            <KanjiComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
