import { Tree } from "antd";
import { ListLesson, Lesson } from "../data/listLesson.jsx";
import "../assets/css/style.css";
import { useRef, useState } from "react";
import Sound from "../assets/svg/Sound.jsx";

const Vocabulary = () => {
  const [lesson, setLesson] = useState();
  const audioRef = useRef(null);
  const [buttonColor, setButtonColor] = useState("text-blue-300");

  const onSelect = (selectedKeys, info) => {
    setLesson(Lesson[`lesson_${selectedKeys[0]}`]);
  };

  const handleButtonClick = (japan) => {
    if (audioRef.current) {
      audioRef.current.play();
      setButtonColor(japan);
    }
  };

  const handleAudioEnd = () => {
    setButtonColor("text-blue-300");
  };
  return (
    <div className="mx-10">
      <div className="grid grid-cols-3">
        <div className="overflow-y-scroll h-[calc(100vh-200px)]">
          <Tree showLine={true} onSelect={onSelect} treeData={ListLesson} />
        </div>
        <div className="col-span-2 overflow-y-scroll h-[calc(100vh-200px)]">
          {lesson &&
            lesson.map((item, index) => {
              return (
                <div
                  className="flex border gap-3 px-3 pl-3"
                  key={`${item.japan}-${index}`}
                >
                  <div className="w-6 h-6 text-center leading-[21px] rounded-full border border-neutral-800 mt-2">
                    {index + 1}
                  </div>
                  {/* <div className="flex justify-center items-center">
                    <button
                      className={`rounded-full border-[4px] ${
                        item.japan === buttonColor
                          ? "border-blue-700"
                          : "border-blue-300"
                      }  w-14 h-14 flex justify-center items-center active:bg-gray-300`}
                      onClick={() => handleButtonClick(item.japan)}
                    >
                      <Sound
                        className={`w-9 h-9 ${
                          item.japan === buttonColor
                            ? "text-blue-700"
                            : "text-blue-300"
                        }`}
                      />
                    </button>
                    <audio
                      ref={audioRef}
                      onEnded={handleAudioEnd}
                      type="audio/mp3"
                      src={`${process.env.PUBLIC_URL}/audio/a.mp3`}
                      className="mt-2"
                    ></audio>
                  </div> */}
                  <div className="w-full">
                    <p className="text-blue-700">{item.kanji}</p>
                    <p>{item.japan}</p>
                    <p className="text-blue-700 text-end">{item.vietnam}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
