import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center p-3">
      <ul className="flex gap-3">
        <li
          className={`md:text-5xl font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === "/japanse" ? "bg-gray-300 text-amber-500" : ""
          }`}
        >
          <Link to={"/japanse"} className="px-2 py-4 block">
            Trang chủ
          </Link>
        </li>
        <li
          className={`md:text-5xl font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500 ${
            location.pathname === "/alphabet"
              ? "bg-gray-300 text-amber-500"
              : ""
          }`}
        >
          <Link to={"/alphabet"} className="px-2 py-4 block">
            Bảng chữ cái
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
