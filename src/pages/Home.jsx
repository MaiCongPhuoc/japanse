const Home = () => {
  return (
    <>
      <h1 className="md:text-5xl text-center text-3xl font-bold text-red-600">
        Ôn thi tiếng nhật N4
      </h1>
      <div className="mt-10">
        <p className="md:text-3xl text-xl text-center mt-2">
          Bảng chữ cái Hiragana
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/hiragana/hiragana.png`}
          alt="ảnh bảng chữ cái hiragana"
          className="border border-black mt-2"
        />
      </div>
      <div className="mt-10">
        <p className="md:text-3xl text-xl text-center mt-2">
          Bảng chữ cái Katakana
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/katakana/katakana.png`}
          alt="ảnh bảng chữ cái hiragana"
          className="border border-black mt-2"
        />
      </div>
      <div className="mt-10">
        <p className="md:text-3xl text-xl text-center mt-2">
          Bảng chữ cái Kanji
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/kanji/kanji.png`}
          alt="ảnh bảng chữ cái hiragana"
          className="border border-black mt-2"
        />
      </div>
    </>
  );
};

export default Home;
