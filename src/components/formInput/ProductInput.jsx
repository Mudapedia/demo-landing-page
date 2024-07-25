import { useState } from "react";

const ProductInput = () => {
  const [jumlahProduk, SetJumlahPRoduk] = useState([1]);
  return (
    <>
      {/* Product section */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5">Konten Produk Section</h1>
        <div className="mb-5">
          <label
            htmlFor="jumlah-produk"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Jumlah Produk
          </label>
          {/* radio selection */}
          <div className="flex text-xs my-3">
            <input
              type="radio"
              className="mr-1"
              name="jumlah-produk"
              defaultChecked
              // value={[1]}
              onChange={() => SetJumlahPRoduk([1])}
            />
            <p className="">1</p>
            <input
              type="radio"
              className="mr-1 ml-5"
              name="jumlah-produk"
              onChange={() => SetJumlahPRoduk([1, 2])}
            />
            <p className="">2</p>
            <input
              type="radio"
              className="mr-1 ml-5"
              name="jumlah-produk"
              onChange={() => SetJumlahPRoduk([1, 2, 3])}
            />
            <p className="">3</p>
          </div>
        </div>

        {/* map product input */}
        {jumlahProduk.map((v, i) => (
          <div key={i}>
            <hr className="my-5" />
            <h1 className="font-bold text-lg mb-4 text-slate-800">
              Produk {i + 1}
            </h1>
            <div className="mb-5">
              <label
                htmlFor={`produk-img-${i + 1}`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                URL Image Produk {i + 1}
              </label>
              <input
                type="text"
                id={`produk-img-${i + 1}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`nama-produk-${i + 1}`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Nama Produk {i + 1}
              </label>
              <input
                type="text"
                id={`nama-produk-${i + 1}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`deskripsi-produk-${i + 1}`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Deskripsi Produk {i + 1}
              </label>
              <input
                type="text"
                id={`deskripsi-produk-${i + 1}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`harga-produk-${i + 1}`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Harga Produk {i + 1}
              </label>
              <input
                type="text"
                id={`harga-produk-${i + 1}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="my-10" />
    </>
  );
};

export default ProductInput;
