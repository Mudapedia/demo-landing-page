import DataUsaha from "../components/formInput/DataUsaha";
import Style from "../components/formInput/Style";
import HeroInput from "../components/formInput/HeroInput";
import ProductInput from "../components/formInput/ProductInput";
import AboutInput from "../components/formInput/AboutInput";
import testData from "../test";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(testData));
  }, []);

  return (
    <section className="bg-white h-screen max-h-screen py-10 px-20">
      <form className="max-w-lg mx-auto">
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
    </section>
  );
};

export default Form;
