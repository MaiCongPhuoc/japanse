import { useState, useEffect, useRef, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Sound from "../assets/svg/Sound.jsx";

// use library redux
import { useSelector, useDispatch } from "react-redux";
import { setCheckData, setPreviewData } from "../store/action/KanjiStore.jsx";

const KanjiComponent = () => {
  // use library redux and create state
  const dispatch = useDispatch();
  const data = useSelector((state) => state.kanji.data.Kanji);
  const checkData = useSelector((state) => state.kanji.checkData);
  const previewData = useSelector((state) => state.kanji.previewData);
  const type = useSelector((state) => state.typeOfDegree);
  const dataType = useMemo(() => {
    return data.filter((dat) => dat.type.includes(type.typeOfDegree));
  }, [data, type.typeOfDegree]);

  const inputRef = useRef(null);
  const dataRef = useRef(dataType.length);
  const audioRef = useRef(null);
  const [value, setValue] = useState("");
  const [buttonColor, setButtonColor] = useState("text-blue-300");
  const [question, setQuestion] = useState({
    questionTrue: 0,
    questionFalse: 0,
    colorText: "text-black",
  });

  useEffect(() => {
    getRandomNumber(0, dataRef.current - 1);
  }, []);

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ramdom = Math.floor(Math.random() * (max - min + 1)) + min;
    const resault = dataType[ramdom];
    dispatch(setCheckData(resault));
    return resault;
  };

  const handleSubmit = () => {
    dispatch(setPreviewData(checkData));
    const vietnamses = checkData.vietnamse.split(", ");
    if (vietnamses.includes(value.trim())) {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionTrue: prev.questionTrue + 1,
          colorText: "text-green-600",
        };
      });
      inputRef.current.focus();
      getRandomNumber(0, dataRef.current - 1);
    } else {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionFalse: prev.questionFalse + 1,
          colorText: "text-red-700",
        };
      });
      getRandomNumber(0, dataRef.current - 1);
    }
  };

  const handleValue = (value) => {
    setValue(value.toLowerCase());
  };

  const handleReset = () => {
    setQuestion({
      questionTrue: 0,
      questionFalse: 0,
      colorText: "text-black",
    });
    setPreviewData({});
  };

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setButtonColor("text-blue-700");
    }
  };

  const handleAudioEnd = () => {
    setButtonColor("text-blue-300");
  };
  return (
    <>
      <div className="text-center">
        <span className="md:text-4xl text-xl text-center mr-3">
          Bảng chữ cái Kanji
        </span>
        <button
          type="button"
          className="md:text-4xl md:py-3 md:h-16 border mt-3 bg-violet-600 hover:bg-violet-400 active:bg-violet-200 text-white font-bold"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-row justify-around my-5">
        <span className="md:text-4xl text-green-600 text-xl text-center">
          Kết quả đúng: {question.questionTrue}
        </span>
        <div className="w-[1px] border border-gray-400"></div>
        <span className="md:text-4xl text-red-700 text-xl text-center">
          Kết quả sai: {question.questionFalse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="grid grid-cols-2 h-20">
        <span className="md:text-4xl flex justify-center items-center text-center text-3xl">
          Chữ cái:
        </span>
        <span className="md:text-7xl flex justify-center items-center text-center text-5xl text-blue-500 font-bold">
          {checkData.japanse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="text-center my-6">
        <span className="md:text-4xl md:font-bold text-xl">
          Nhập vào đây chữ cái của Kanji
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mb-5">
        <Form
          layout="inline"
          onFinish={() => handleSubmit()}
          className="flex flex-col justify-center items-center"
        >
          <Form.Item>
            <Input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => handleValue(e.target.value)}
              className="md:h-20 md:text-5xl md:w-36 mb-3 border-2 border-gray-400 rounded-none h-10 pl-2"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="md:text-4xl md:px-5 md:h-14 md:mt-4 border bg-green-500 hover:bg-green-200 active:bg-green-400 mt-3 px-7 py-2 text-white font-bold"
            >
              kiểm tra
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div
        className={`flex flex-wrap justify-around my-10 ${question.colorText}`}
      >
        <span className="md:text-5xl text-center">
          <span className="md:text-4xl">Từ: </span>
          <span className="font-bold">{previewData.japanse}</span>
        </span>
        <span className="md:text-5xl text-center">
          <span className="md:text-4xl">Phiên âm: </span>
          <span className="font-bold">{previewData.transcription}</span>
        </span>
        <span className="md:text-5xl text-center">
          <span className="md:text-4xl">Nghĩa: </span>
          <span className="font-bold">{previewData.vietnamse}</span>
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="md:text-4xl flex flex-row justify-around">
        <div className="flex flex-col gap-3">
          <span>Cách viết:</span>
          <img
            src={
              previewData.image
                ? `${process.env.PUBLIC_URL}/images/kanji/${previewData.image}`
                : `${process.env.PUBLIC_URL}/images/kanji/hoi.png`
            }
            alt={`ảnh của chữ cái ${previewData.japanse}`}
            width={400}
            className="border border-black mt-2"
          />
        </div>
        <div className="flex flex-col gap-32">
          <span>Đọc là:</span>
          <button
            className={`rounded-full border-[7px] ${
              buttonColor === "text-blue-700"
                ? "border-blue-700"
                : "border-blue-300"
            } ${
              previewData.audio ? "" : "border-gray-300 bg-gray-200"
            } w-40 h-40 flex justify-center items-center active:bg-gray-300`}
            onClick={handleButtonClick}
            disabled={!previewData.audio}
          >
            <Sound className={`w-20 h-20 ${buttonColor}`} />
          </button>
          <audio
            ref={audioRef}
            onEnded={handleAudioEnd}
            type="audio/mp3"
            src={
              previewData.audio
                ? `${process.env.PUBLIC_URL}/audio/kanji/${previewData.audio}`
                : `${process.env.PUBLIC_URL}/audio/kanji/hoi.mp3`
            }
            className="mt-2"
          >
            <track
              kind="captions"
              srcLang="en"
              src={`${process.env.PUBLIC_URL}/captions/${
                previewData.audio
                  ? previewData.audio.replace(".mp3", ".vtt")
                  : "hoi.vtt"
              }`}
              label="English captions"
            />
          </audio>
        </div>
      </div>
      <div className="border border-gray-300 my-1"></div>
      <div className="md:text-4xl flex flex-col justify-around mb-5">
        <div className="flex flex-col text-center gap-3">
          <span className="font-bold">Ý nghĩa:</span>
          <img
            src={
              previewData.image
                ? `${process.env.PUBLIC_URL}/images/kanji/${previewData.meaning}`
                : `${process.env.PUBLIC_URL}/images/kanji/hoi-m.png`
            }
            alt={`ảnh của chữ cái ${previewData.japanse}`}
            className="border border-black mt-2 w-full"
          />
        </div>
        <div className="flex flex-col text-center gap-3 mt-2">
          <span className="font-bold">Giải nghĩa:</span>
          <span className="mt-2">{previewData.explanation}</span>
        </div>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="md:text-4xl flex flex-col justify-around mb-5">
        <div className="flex flex-col text-center gap-3">
          <span className="font-bold">Ví dụ:</span>
          <table className="border-collapse mt-4">
            <thead>
              <tr>
                <th className="border border-gray-500 py-4">japan</th>
                <th className="border border-gray-500 py-4">từ hán việt</th>
                <th className="border border-gray-500 py-4">Việt nam</th>
              </tr>
            </thead>
            <tbody>
              {previewData.example?.map((item) => {
                return (
                  <tr key={item.jp}>
                    <td className="border border-gray-500 py-2 text-5xl">
                      {item.jp}
                    </td>
                    <td className="border border-gray-500 py-2">
                      {item.SinoVietnamese}
                    </td>
                    <td className="border border-gray-500 py-2">{item.vn}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KanjiComponent;
