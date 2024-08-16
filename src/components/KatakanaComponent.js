import { useState, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/action/action";
import Sound from "../assets/svg/Sound.jsx";

const KatakanaComponent = ({ data = [] }) => {
  const inputRef = useRef(null);
  const audioRef = useRef(null);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [checkData, setCheckData] = useState({});
  const [previewData, setPreviewData] = useState({});
  const [value, setValue] = useState("");
  const [buttonColor, setButtonColor] = useState("text-blue-500");
  const [question, setQuestion] = useState({
    questionTrue: 0,
    questionFalse: 0,
    colorText: "text-black",
  });

  useEffect(() => {
    getRandomNumber(0, 106);
  }, []);

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ramdom = Math.floor(Math.random() * (max - min + 1)) + min;
    const resault = data[ramdom];
    setCheckData(resault);
    return resault;
  };

  const handleSubmit = () => {
    setPreviewData(checkData);
    if (value === checkData.vietnamse) {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionTrue: prev.questionTrue + 1,
          colorText: "text-green-600",
        };
      });
      inputRef.current.focus();
      getRandomNumber(0, 70);
    } else {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionFalse: prev.questionFalse + 1,
          colorText: "text-red-700",
        };
      });
      getRandomNumber(0, 70);
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
          Bảng chữ cái Katakana
        </span>
        <button
          type="button"
          className="md:text-4xl md:py-3 md:h-16 border mt-3 bg-violet-600 hover:bg-violet-400 active:bg-violet-200 text-white font-bold"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-row justify-around my-10">
        <span className="md:text-4xl text-green-600 text-xl text-center">
          Kết quả đúng: {question.questionTrue}
        </span>
        <div className="w-[1px] border border-gray-400"></div>
        <span className="md:text-4xl text-red-700 text-xl text-center">
          Kết quả sai: {question.questionFalse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="grid grid-cols-2 h-28">
        <span className="md:text-4xl flex justify-center items-center text-center text-3xl">
          Chữ cái:
        </span>
        <span className="md:text-7xl flex justify-center items-center text-center text-5xl text-blue-500 font-bold">
          {checkData.japanse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="text-center my-10">
        <span className="md:text-4xl md:font-bold text-xl">
          Nhập vào đây chữ cái của Katakana
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
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
              className="md:h-20 md:text-5xl md:w-36 mb-8 border-2 border-gray-400 rounded-none h-10 pl-2"
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
        className={`grid grid-cols-2 gap-5 text-lg my-10 ${question.colorText}`}
      >
        <span className="md:text-5xl text-center">
          Từ: <span className="font-bold">{previewData.japanse}</span>
        </span>
        <span className="md:text-5xl text-center">
          Phiên âm: <span className="font-bold">{previewData.vietnamse}</span>
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="md:text-4xl flex flex-row justify-around mb-5">
        <div className="flex flex-col gap-3">
          <span>Cách viết:</span>
          <img
            src={
              previewData.image
                ? `${process.env.PUBLIC_URL}/images/${previewData.image}`
                : `${process.env.PUBLIC_URL}/images/a-k.png`
            }
            alt={`ảnh của chữ cái ${previewData.japanse}`}
            width={400}
            className="border border-black mt-2"
          />
        </div>
        <div className="flex flex-col gap-20">
          <span>Đọc là:</span>
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
              previewData.audio
                ? `${process.env.PUBLIC_URL}/audio/${previewData.audio}`
                : `${process.env.PUBLIC_URL}/audio/a.mp3`
            }
            className="mt-2"
          ></audio>
        </div>
      </div>
    </>
  );
};

export default KatakanaComponent;
