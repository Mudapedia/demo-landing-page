import DataUsaha from "../components/formInput/DataUsaha";
import Style from "../components/formInput/Style";
import HeroInput from "../components/formInput/HeroInput";
import ProductInput from "../components/formInput/ProductInput";
import AboutInput from "../components/formInput/AboutInput";
import testData from "../test";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(testData));
  }, []);

  const btnExport = (e) => {
    e.preventDefault();

    if (!localStorage.getItem("data")) {
      alert("Hacker jangan mencuri!!!");
      return;
    }

    const jsString = `const data = ${localStorage.getItem("data")}`;
    const blob = new Blob([jsString], {
      type: "application/javascript",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.js";
    link.click();
  };

  return (
    <section className="bg-white h-screen max-h-screen py-10 px-20">
      {showContact ? (
        <section className="z-20 fixed bottom-0 left-0 right-0 top-0 layar-hitam flex justify-center items-center">
          <section className="bg-white p-5 rounded-md relative">
            <i
              className="fa-solid fa-circle-xmark absolute top-0 right-1 text-xl hover:text-red-600 cursor-pointer"
              onClick={() => setShowContact(false)}
            ></i>
            <p className="font-bold">Penanggung jawab •⩊•</p>
            <section className="py-2 flex flex-col gap-4 mt-2">
              <a
                href="https://wa.me/6281236827185"
                target="_blank"
                className="flex items-center gap-28  p-2 rounded-lg bg-gray-400"
              >
                <section className="flex items-center gap-2">
                  <img
                    src="/public/iqbal.png"
                    alt="muiz"
                    className="w-10 rounded-full"
                  />
                  <p className="font-semibold">Mas Iqbal</p>
                </section>
                <i className="fa-solid fa-comment-dots"></i>
              </a>
              <a
                href="https://wa.me/6282247739704"
                target="_blank"
                className="flex items-center gap-28  p-2 rounded-lg bg-gray-400"
              >
                <section className="flex items-center gap-2">
                  <img
                    src="/public/muiz.jpg"
                    alt="muiz"
                    className="w-10 rounded-full"
                  />
                  <p className="font-semibold">Mas Muiz</p>
                </section>
                <i className="fa-solid fa-comment-dots"></i>
              </a>
            </section>
          </section>
        </section>
      ) : (
        ""
      )}

      <a
        href="/demo"
        target="_blank"
        rel="noreferrer"
        className="z-50 bg-blue-400 fixed bottom-10 right-10 text-gray-50 py-2 px-2 rounded-md font-bold text-sm"
      >
        Halaman <br /> Preview
      </a>

      <button
        className="z-10 bg-blue-400 fixed bottom-14 left-10 text-gray-50 py-2 px-2 rounded-md font-bold text-sm text-start"
        onClick={() => setShowContact(true)}
      >
        Hubungi
        <br /> Kami
      </button>
      <form className="max-w-lg mx-auto" onSubmit={btnExport}>
        <div>
          <DataUsaha />
          <Style />
          <HeroInput />
          <ProductInput />
          <AboutInput />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-20"
          >
            Export Data
          </button>
        </div>
      </form>
      <section className="max-w-lg mx-auto pb-5 text-gray-400 text-sm flex gap-1 mt-5">
        <p>Created By</p>{" "}
        <section className="flex gap-1">
          <a href="https://github.com/Muizzuddin-github" target="_blank">
            @Muiz
          </a>
          <a href="https://github.com/IIQball" target="_blank">
            @Iqbal
          </a>
        </section>
      </section>
    </section>
  );
};

export default Form;
