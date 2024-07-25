/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import hexRgb from "hex-rgb";
import { useEffect, useState } from "react";

const ProductPremium = ({
  product: { data, title },
  color: { textColor, accentColor, primary },
  barang,
  setBarang,
  setTotalBarang,
  totalHarga,
  setTotalHarga,
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

  const btnPesanSekarang = (data) => {
    setTotalBarang((prev) => prev + 1);
    setTotalHarga(totalHarga + data.price);
    for (let i = 0; i < barang.length; i++) {
      if (barang[i].name === data.name) {
        const dataBaru = [...barang];
        dataBaru[i].count++;

        setBarang(dataBaru);
        return;
      }
    }

    setBarang((prev) => [...prev, { ...data, count: 1 }]);
  };

  return (
    <section
      className={`${textColor} pt-10 pb-20 max-w-screen-lg mx-auto px-5`}
    >
      {title ? (
        <p className="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">
          {title}
        </p>
      ) : (
        ""
      )}
      {/* card */}
      <section className="gap-5 mt-10 lg:mt-32 w-fit grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {data.map((v, i) => (
          <div
            key={i}
            className={`max-w-sm border border-gray-200 lg:w-80 rounded-lg shadow relative ${
              v.price ? "pb-10" : ""
            } break-words w-full`}
            style={{ backgroundColor: hexObj }}
          >
            <div>
              <div
                className="w-full h-80 rounded-lg"
                style={{
                  background: `url(${v.img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className={`${v.deskripsi || v.price ? "p-5" : ""}`}>
              {v.name ? (
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {v.name}
                  </h5>
                </div>
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
            </div>
            <div className="flex justify-between absolute bottom-2 w-full px-5 items-center">
              {v.price ? (
                <p className={`text-xl ${accentColor} font-bold`}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(v.price)}
                </p>
              ) : (
                ""
              )}
              <button
                className=" text-white px-3 py-3 rounded-md text-xs"
                onClick={() =>
                  btnPesanSekarang({
                    name: v.name,
                    price: v.price,
                    img: v.img,
                  })
                }
                style={{
                  background: accentColor.slice(6, 13),
                }}
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProductPremium;
