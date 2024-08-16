import { useState, useRef } from "react";
import HiraganaComponent from "../components/HiraganaComponent";
import KatakanaComponent from "../components/KatakanaComponent";
import { Hiragana, Katakana, Kanji } from "../data";
import KanjiComponent from "../components/KanjiComponent";

const Alphabet = () => {
  const HiraganaRef = useRef(Hiragana);
  const KatakanaRef = useRef(Katakana);
  const KanjiRef = useRef(Kanji);

  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";
  return (
    <div className="md:mt-10 md:w-11/12 animate-opacity-open flex-col border border-gray-300 w-9/12 mx-auto">
      <div className="mt-3">
        <ul className="flex justify-around items-center cursor-pointer md:h-20 h-10">
          <li
            className={`md:text-3xl flex items-center justify-center w-full h-full hover:bg-gray-300 ${getActiveClass(
              1,
              "border-b-4 border-blue-500 text-red-500 font-bold"
            )}`}
            onClick={() => toggleTab(1)}
          >
            Hiragana
          </li>
          <li
            className={`md:text-3xl flex items-center justify-center w-full h-full hover:bg-gray-300 ${getActiveClass(
              2,
              "border-b-4 border-blue-500 text-red-500 font-bold"
            )}`}
            onClick={() => toggleTab(2)}
          >
            Katakana
          </li>
          <li
            className={`md:text-3xl flex items-center justify-center w-full h-full hover:bg-gray-300 ${getActiveClass(
              3,
              "border-b-4 border-blue-500 text-red-500 font-bold"
            )}`}
            onClick={() => toggleTab(3)}
          >
            Kanji
          </li>
        </ul>
        <div className="border-2 border-amber-300">
          <div
            className={` ${getActiveClass(1, "flex-col")} ${
              ToggleState === 1 ? "" : "hidden"
            } justify-center items-center`}
          >
            <HiraganaComponent data={HiraganaRef.current} />
          </div>
          <div
            className={` ${getActiveClass(2, "flex-col")} ${
              ToggleState === 2 ? "" : "hidden"
            } justify-center items-center`}
          >
            <KatakanaComponent data={KatakanaRef.current} />
          </div>
          <div
            className={` ${getActiveClass(3, "flex-col")} ${
              ToggleState === 3 ? "" : "hidden"
            } justify-center items-center`}
          >
            <KanjiComponent data={KanjiRef.current} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
