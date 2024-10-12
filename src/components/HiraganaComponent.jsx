import { useState, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";
import Sound from "../assets/svg/Sound.jsx";

// use library redux
import { useSelector, useDispatch } from "react-redux";
import {
  setCheckData,
  setPreviewData,
} from "../store/action/AlphabetStore.jsx";

const HiraganaComponent = () => {
  // use library redux and create state
  const dispatch = useDispatch();
  const data = useSelector((state) => state.hiragana.data);
  const checkData = useSelector((state) => state.hiragana.checkData);
  const previewData = useSelector((state) => state.hiragana.previewData);

  const inputRef = useRef(null);
  const lenghtDataRef = useRef(data.Hiragana.length);
  const audioRef = useRef(null);
  const [value, setValue] = useState("");
  const [buttonColor, setButtonColor] = useState("text-blue-300");
  const [question, setQuestion] = useState({
    questionTrue: 0,
    questionFalse: 0,
    colorText: "text-black",
  });

  console.log("checkData", checkData);
  console.log("previewData", previewData);
  console.log("lenghtDataRef", lenghtDataRef);

  useEffect(() => {
    getRandomNumber(0, lenghtDataRef.current - 1);
  }, []);

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ramdom = Math.floor(Math.random() * (max - min + 1)) + min;
    const resaultHiragana = data.Hiragana[ramdom];
    const resaultKatakana = data.Katakana[ramdom];
    dispatch(
      setCheckData({ Hiragana: resaultHiragana, Katakana: resaultKatakana })
    );
    return { resaultHiragana, resaultKatakana };
  };

  const handleSubmit = () => {
    dispatch(
      setPreviewData({
        Hiragana: checkData.Hiragana,
        Katakana: checkData.Katakana,
      })
    );
    if (value.trim() === data.Hiragana.vietnamse) {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionTrue: prev.questionTrue + 1,
          colorText: "text-green-600",
        };
      });
      inputRef.current.focus();
      getRandomNumber(0, lenghtDataRef.current - 1);
    } else {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionFalse: prev.questionFalse + 1,
          colorText: "text-red-700",
        };
      });
      getRandomNumber(0, lenghtDataRef.current - 1);
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
          Bảng chữ cái Hiragana & Katakana
        </span>
        <button
          type="button"
          className="md:text-4xl md:px-3 md:py-2 md:h-16 border mt-3 bg-violet-600 hover:bg-violet-400 active:bg-violet-200 text-white font-bold"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-row justify-around my-6">
        <span className="md:text-4xl text-green-600 text-xl text-center">
          Kết quả đúng: {question.questionTrue}
        </span>
        <div className="w-[1px] border border-gray-400"></div>
        <span className="md:text-4xl text-red-700 text-xl text-center">
          Kết quả sai: {question.questionFalse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="grid grid-cols-3 my-6">
        <span className="md:text-7xl flex justify-center items-center text-center text-5xl text-blue-500 font-bold">
          {checkData.Katakana.japanse}
        </span>
        <span className="md:text-4xl flex justify-center items-center text-center text-3xl">
          Chữ cái:
        </span>
        <span className="md:text-7xl flex justify-center items-center text-center text-5xl text-blue-500 font-bold">
          {checkData.Hiragana.japanse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="text-center my-4">
        <span className="md:text-4xl md:font-bold text-xl">
          Nhập phát âm của chữ cái:
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mb-6">
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
              className="md:h-24 md:text-5xl md:w-48 mb-4 border-2 border-gray-400 rounded-none h-10 pl-2 text-center"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="md:text-4xl md:px-8 md:h-16 md:mt-2 border bg-green-500 hover:bg-green-200 active:bg-green-400 mt-3 px-7 py-2 text-white text-center font-bold"
            >
              kiểm tra
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div
        className={`grid grid-cols-2 gap-5 text-lg my-6 ${question.colorText}`}
      >
        <span className="md:text-5xl text-center">
          Từ: <span className="font-bold">{previewData.Katakana.japanse}</span>
          {" / "}
          <span className="font-bold">{previewData.Hiragana.japanse}</span>
        </span>
        <span className="md:text-5xl text-center">
          Phiên âm:{" "}
          <span className="font-bold">{previewData.Hiragana.vietnamse}</span>
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="md:text-4xl flex flex-row justify-around mb-5">
        <div className="flex flex-col gap-3">
          <span className="text-center">Cách viết:</span>
          <img
            src={
              previewData.Katakana.image
                ? `${process.env.PUBLIC_URL}/images/katakana/${previewData.Katakana.image}`
                : `${process.env.PUBLIC_URL}/images/katakana/a-k.png`
            }
            alt={`ảnh của chữ cái ${previewData.Katakana.japanse}`}
            width={450}
            className="border border-black mt-1"
          />
          <img
            src={
              previewData.Hiragana.image
                ? `${process.env.PUBLIC_URL}/images/hiragana/${previewData.Hiragana.image}`
                : `${process.env.PUBLIC_URL}/images/hiragana/a-h.png`
            }
            alt={`ảnh của chữ cái ${previewData.Hiragana.japanse}`}
            width={450}
            className="border border-black mt-1"
          />
        </div>
        <div className="flex flex-col">
          <span>Đọc là:</span>
          <div className="flex justify-center items-center h-full">
            <button
              className={`rounded-full border-[7px] ${
                buttonColor === "text-blue-700"
                  ? "border-blue-700"
                  : "border-blue-300"
              }  w-32 h-32 flex justify-center items-center active:bg-gray-300`}
              onClick={handleButtonClick}
            >
              <Sound className={`w-20 h-20 ${buttonColor}`} />
            </button>
            <audio
              ref={audioRef}
              onEnded={handleAudioEnd}
              type="audio/mp3"
              src={
                previewData.Hiragana.audio
                  ? `${process.env.PUBLIC_URL}/audio/${previewData.Hiragana.audio}`
                  : `${process.env.PUBLIC_URL}/audio/a.mp3`
              }
              className="mt-2"
            >
              <track
                kind="captions"
                srcLang="vi"
                src={`${process.env.PUBLIC_URL}/captions/${
                  previewData.Hiragana.audio
                    ? previewData.Hiragana.audio.replace(".mp3", ".vtt")
                    : "a.vtt"
                }`}
                label="English captions"
              />
            </audio>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiraganaComponent;
