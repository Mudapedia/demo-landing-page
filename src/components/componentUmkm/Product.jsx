/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import hexRgb from "hex-rgb";
import { useEffect, useState } from "react";

const Product = ({
  product: { data, title },
  color: { textColor, accentColor, primary },
}) => {
  const [hexObj, setHexObjs] = useState({});

  useEffect(
    function () {
      let hexPrimary = primary.slice(4, -1);
      hexPrimary = hexRgb(hexPrimary);

      setHexObjs(
        `rgba(${hexPrimary.red},${hexPrimary.green},${hexPrimary.blue},0.1)`
      );
    },
    [primary]
  );
  return (
    <section
      className={`${textColor} pt-10 pb-20 max-w-screen-lg mx-auto px-5`}
    >
      {title ? (
        <p className="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">
          {title}
        </p>
      ) : (
        ""
      )}
      <section className="gap-5 mt-10 lg:mt-32 w-fit grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {data.map((v, i) => (
          <div
            key={i}
            className={`max-w-sm border border-gray-200 lg:w-80 rounded-lg shadow relative ${
              v.price ? "pb-10" : ""
            } break-words w-full`}
            style={{ backgroundColor: hexObj }}
          >
            <a href="#" className="">
              <div
                className="w-80 h-80 rounded-lg"
                style={{
                  background: `url(${v.img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </a>
            <div className={`${v.deskripsi || v.price ? "p-5" : ""}`}>
              {v.name ? (
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {v.name}
                  </h5>
                </a>
              ) : (
                ""
              )}
              {v.deskripsi ? (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-w-[280px]">
                  {v.deskripsi}
                </p>
              ) : (
                ""
              )}
              {v.price ? (
                <p
                  className={`mb-3 text-xl ${accentColor} font-bold absolute bottom-0`}
                >
                  {v.price}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Product;
