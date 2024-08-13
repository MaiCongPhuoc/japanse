import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/action/action";
import Button from "./Button";

const HiraganaComponent = ({ data = [] }) => {
  const inputRef = useRef(null);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [checkData, setCheckData] = useState({});
  const [previewData, setPreviewData] = useState({});
  const [value, setValue] = useState("");
  const [question, setQuestion] = useState({
    questionTrue: 0,
    questionFalse: 0,
    colorText: "text-black",
  });

  useEffect(() => {
    getRandomNumber(0, 70);
  }, []);

  const getRandomNumber = (min, max) => {
    setPreviewData(checkData);
    if (value === checkData.vietnamse) {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionTrue: (prev.questionTrue += 1),
          colorText: "text-green-600",
        };
      });
      inputRef.current.focus();
    } else {
      setValue("");
      setQuestion((prev) => {
        return {
          ...prev,
          questionFalse: (prev.questionFalse += 1),
          colorText: "text-red-700",
        };
      });
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const ramdom = Math.floor(Math.random() * (max - min + 1)) + min;
    const resault = data[ramdom];
    setCheckData(resault);
    return resault;
  };

  const handleValue = (value) => {
    setValue(value);
  };

  const handleReset = () => {
    setQuestion({
      questionTrue: 0,
      questionFalse: 0,
      colorText: "text-black",
    });
    setPreviewData({});
  };
  return (
    <>
      <div className="text-center">
        <span className="text-xl text-center mr-3">Bảng chứ cái Hiragana</span>
        <Button
          className="border mt-3 bg-violet-600 hover:bg-violet-400 active:bg-violet-200 text-white font-bold"
          click={() => handleReset()}
        >
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-5">
        <span className="text-green-600 text-xl text-center">
          Kết quả đúng: {question.questionTrue}
        </span>
        <span className="text-red-700 text-xl text-center">
          Kết quả sai: {question.questionFalse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="grid grid-cols-2 h-28">
        <span className="flex justify-center items-center text-center text-3xl">
          Chữ cái:
        </span>
        <span className="flex justify-center items-center text-center text-5xl text-blue-500 font-bold">
          {checkData.japanse}
        </span>
      </div>
      <div className="border border-gray-300 my-4"></div>
      <div className="text-center mb-4">
        <span className="text-xl">Nhập vào đây chữ cái của Hiragana</span>
      </div>
      <div className="flex flex-col justify-center items-center mb-5">
        <input
          className="border-2 border-gray-200 rounded-none h-10 pl-2"
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleValue(e.target.value)}
        />
        <Button
          className="border bg-green-500 hover:bg-green-200 active:bg-green-400 mt-3 px-7 py-2 text-white font-bold"
          click={() => getRandomNumber(0, 70)}
        >
          kiểm tra
        </Button>
      </div>
      <div
        className={`grid grid-cols-2 gap-5 text-lg text-red-500 ${question.colorText}`}
      >
        <span className="text-center">Từ: {previewData.japanse}</span>
        <span className="text-center">Đọc là: "{previewData.vietnamse}"</span>
      </div>
      <div>Hình ảnh: {previewData.image}</div>
    </>
  );
};

export default HiraganaComponent;
