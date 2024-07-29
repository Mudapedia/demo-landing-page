import { useState } from "react";

const ProductInput = () => {
  const [showSecondProduct, setShowSecondProduct] = useState(false);
  const [showThirdProduct, setShowThirdProduct] = useState(false);

  return (
    <>
      {/* Product section */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5">Konten Produk Section</h1>
        <div className="mb-5">
          <p className="block mb-2 text-sm font-medium text-gray-900">
            Jumlah Produk
          </p>
          {/* radio selection */}
          <div className="flex text-xs my-3">
            <input
              type="radio"
              className="mr-1"
              name="jumlah-produk"
              defaultChecked
              // value={[1]}
              onChange={() => {
                setShowSecondProduct(false);
                setShowThirdProduct(false);

                const d = JSON.parse(localStorage.getItem("data"));

                if (d.product.data.length === 2) {
                  d.product.data.pop();
                } else if (d.product.data.length === 3) {
                  d.product.data.pop();
                  d.product.data.pop();
                }

                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
            <p className="">1</p>
            <input
              type="radio"
              className="mr-1 ml-5"
              name="jumlah-produk"
              onChange={() => {
                setShowSecondProduct(true);
                setShowThirdProduct(false);

                const d = JSON.parse(localStorage.getItem("data"));

                if (d.product.data.length === 1) {
                  d.product.data.push({
                    name: "Nama Produk",
                    deskripsi:
                      "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
                    price: "Rp harga",
                    img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
                  });
                } else if (d.product.data.length === 3) {
                  d.product.data.pop();
                }

                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
            <p className="">2</p>
            <input
              type="radio"
              className="mr-1 ml-5"
              name="jumlah-produk"
              onChange={() => {
                setShowSecondProduct(true);
                setShowThirdProduct(true);

                const d = JSON.parse(localStorage.getItem("data"));

                if (d.product.data.length === 2) {
                  d.product.data.push({
                    name: "Nama Produk",
                    deskripsi:
                      "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
                    price: "Rp harga",
                    img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
                  });
                } else if (d.product.data.length === 1) {
                  d.product.data.push(
                    {
                      name: "Nama Produk",
                      deskripsi:
                        "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
                      price: "Rp harga",
                      img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
                    },
                    {
                      name: "Nama Produk",
                      deskripsi:
                        "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
                      price: "Rp harga",
                      img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
                    }
                  );
                }

                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
            <p className="">3</p>
          </div>
        </div>

        {/* map product input */}
        <div>
          <hr className="my-5" />
          <h1 className="font-bold text-lg mb-4 text-slate-800">Produk 1</h1>
          <div className="mb-5">
            <label
              htmlFor={`produk-img-1`}
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              URL Image Produk 1
            </label>
            <input
              type="text"
              id={`produk-img-1`}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              autoComplete="off"
              onChange={(e) => {
                const d = JSON.parse(localStorage.getItem("data"));
                d.product.data[0].img = e.target.value
                  ? e.target.value
                  : "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png";
                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor={`nama-produk-1`}
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Nama Produk 1
            </label>
            <input
              type="text"
              id={`nama-produk-1`}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              autoComplete="off"
              onChange={(e) => {
                const d = JSON.parse(localStorage.getItem("data"));
                d.product.data[0].name = e.target.value
                  ? e.target.value
                  : "Nama Produk";
                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor={`deskripsi-produk-1`}
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Deskripsi Produk 1
            </label>
            <input
              type="text"
              id={`deskripsi-produk-1`}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              autoComplete="off"
              onChange={(e) => {
                const d = JSON.parse(localStorage.getItem("data"));
                d.product.data[0].deskripsi = e.target.value
                  ? e.target.value
                  : "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.";
                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor={`harga-produk-1`}
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Harga Produk 1
            </label>
            <input
              type="text"
              id={`harga-produk-1`}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              autoComplete="off"
              onChange={(e) => {
                const d = JSON.parse(localStorage.getItem("data"));
                d.product.data[0].price = e.target.value
                  ? e.target.value
                  : "Rp harga";
                localStorage.setItem("data", JSON.stringify(d));
              }}
            />
          </div>
        </div>

        {showSecondProduct ? (
          <div>
            <hr className="my-5" />
            <h1 className="font-bold text-lg mb-4 text-slate-800">Produk 2</h1>
            <div className="mb-5">
              <label
                htmlFor={`produk-img-2`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                URL Image Produk 2
              </label>
              <input
                type="text"
                id={`produk-img-2`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[1].img = e.target.value
                    ? e.target.value
                    : "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`nama-produk-2`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Nama Produk 2
              </label>
              <input
                type="text"
                id={`nama-produk-2`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[1].name = e.target.value
                    ? e.target.value
                    : "Nama Produk";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`deskripsi-produk-2`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Deskripsi Produk 2
              </label>
              <input
                type="text"
                id={`deskripsi-produk-2`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[1].deskripsi = e.target.value
                    ? e.target.value
                    : "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`harga-produk-2`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Harga Produk 2
              </label>
              <input
                type="text"
                id={`harga-produk-2`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[1].price = e.target.value
                    ? e.target.value
                    : "Rp harga";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {showThirdProduct ? (
          <div>
            <hr className="my-5" />
            <h1 className="font-bold text-lg mb-4 text-slate-800">Produk 3</h1>
            <div className="mb-5">
              <label
                htmlFor={`produk-img-3`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                URL Image Produk 3
              </label>
              <input
                type="text"
                id={`produk-img-3`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[2].img = e.target.value
                    ? e.target.value
                    : "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`nama-produk-3`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Nama Produk 3
              </label>
              <input
                type="text"
                id={`nama-produk-3`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[2].name = e.target.value
                    ? e.target.value
                    : "Nama Produk";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`deskripsi-produk-3`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Deskripsi Produk 3
              </label>
              <input
                type="text"
                id={`deskripsi-produk-3`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[2].deskripsi = e.target.value
                    ? e.target.value
                    : "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor={`harga-produk-3`}
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Harga Produk 3
              </label>
              <input
                type="text"
                id={`harga-produk-3`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                autoComplete="off"
                onChange={(e) => {
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.product.data[2].price = e.target.value
                    ? e.target.value
                    : "Rp harga";
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr className="my-10" />
    </>
  );
};

export default ProductInput;
