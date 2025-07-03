import { Select } from "antd";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setType } from "../store/action/TypeOfDegree";

const Header = () => {
  // use library redux and create state
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSelectDegree = (e) => {
    dispatch(setType(e))
  }
  return (
    <nav className="flex justify-between items-center p-3">
      <ul className="flex gap-3">
        <li
          className={`md:text-3xl font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === "/japanse" ? "bg-gray-300 text-amber-500" : ""
          }`}
        >
          <Link to={"/japanse"} className="px-1 py-2 block">
            Trang chủ
          </Link>
        </li>
        <li
          className={`md:text-3xl font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === "/alphabet"
              ? "bg-gray-300 text-amber-500"
              : ""
          }`}
        >
          <Link to={"/alphabet"} className="px-1 py-2 block">
            Bảng chữ cái
          </Link>
        </li>
      </ul>
      <div>
        <span>Loại bằng: </span>
        <Select 
          style={{ width: 80 }}
          defaultValue={1}
          options={[
            { value: 1, label: 'N5' },
            { value: 2, label: 'N4' },
          ]}
          onChange={handleSelectDegree}
        />
      </div>
    </nav>
  );
};

export default Header;
