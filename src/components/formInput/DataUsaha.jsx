import { useRef, useState } from "react";

const DataUsaha = () => {
  const [statusHP, setStatusHP] = useState(0);

  const inputHP = useRef();

  return (
    <>
      {/* nama usaha */}
      <div className="mb-5">
        <label
          htmlFor="nama-usaha"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nama Usaha UMKM
        </label>
        <input
          type="text"
          id="nama-usaha"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          onChange={(e) => {
            const d = JSON.parse(localStorage.getItem("data"));
            d.title = e.target.value;
            d.navbarTitle = e.target.value || "Nama umkm";
            localStorage.setItem("data", JSON.stringify(d));
          }}
        />
      </div>
      {/* nomor HP */}
      <div className="mb-5">
        <label
          htmlFor="no-hp"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nomor HP
        </label>
        <div className="flex text-xs my-3">
          <input
            type="radio"
            className="mr-1"
            name="kategori-hp"
            defaultChecked
            value={false}
            onChange={() => {
              setStatusHP("");

              const d = JSON.parse(localStorage.getItem("data"));
              d.ctaLink = null;
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
          <p className="">Tidak Ada</p>
          <input
            type="radio"
            className="mr-1 ml-5"
            name="kategori-hp"
            value={true}
            onChange={() => {
              setStatusHP(1);
              inputHP.current.value = "";

              const d = JSON.parse(localStorage.getItem("data"));
              d.ctaLink = null;
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
          <p className="">Aktif WhatsApp</p>
          <input
            type="radio"
            className="mr-1 ml-5"
            name="kategori-hp"
            value={true}
            onChange={() => {
              setStatusHP(2);
              inputHP.current.value = "";

              const d = JSON.parse(localStorage.getItem("data"));
              d.ctaLink = null;
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
          <p className="">Tidak Aktif WhatsApp</p>
        </div>
        <input
          ref={inputHP}
          type="tel"
          id="no-hp"
          pattern="[0-9\s]{13,19}"
          maxLength={15}
          placeholder="628xx xxxx xxxx"
          className={`${
            statusHP ? "" : "hidden"
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5`}
          required
          onChange={(e) => {
            let link = "https://wa.me/";
            if (statusHP === 2) {
              link = "tel:";
            }

            const d = JSON.parse(localStorage.getItem("data"));
            d.ctaLink = e.target.value ? link + e.target.value : null;
            localStorage.setItem("data", JSON.stringify(d));
          }}
        />
      </div>
      {/* nama usaha */}
      <div className="mb-5">
        <label
          htmlFor="alamat-usaha"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Alamat Lengkap UMKM
        </label>
        <input
          type="text"
          id="alamat-usaha"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          onChange={(e) => {
            const d = JSON.parse(localStorage.getItem("data"));
            d.footer.alamat = e.target.value || null;
            localStorage.setItem("data", JSON.stringify(d));
          }}
        />
      </div>
      {/* nama usaha */}
      <div className="mb-5">
        <label
          htmlFor="lokasi-map"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          URL Lokasi Map
        </label>
        <input
          type="text"
          id="lokasi-map"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          onChange={(e) => {
            const d = JSON.parse(localStorage.getItem("data"));
            d.location = e.target.value || null;
            localStorage.setItem("data", JSON.stringify(d));
          }}
        />
      </div>
      {/* keyword pencarian */}
      <div className="mb-5">
        <label
          htmlFor="keyword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Keyword Pencarian
        </label>
        <textarea
          type="text"
          id="keyword"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          required
          onChange={(e) => {
            const d = JSON.parse(localStorage.getItem("data"));
            d.keyword = e.target.value ? e.target.value.trim().split("\n") : [];
            localStorage.setItem("data", JSON.stringify(d));
          }}
        />
      </div>
      <hr className="my-10" />
    </>
  );
};

export default DataUsaha;
