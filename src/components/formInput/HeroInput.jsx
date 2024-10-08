const HeroInput = () => {
  return (
    <>
      {/* hero section */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5">Konten Hero Section</h1>
        <div className="mb-5">
          <label
            htmlFor="hero-img"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            URL Image
          </label>
          <input
            type="text"
            id="hero-img"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="off"
            onChange={(e) => {
              const d = JSON.parse(localStorage.getItem("data"));
              d.hero.img =
                e.target.value ||
                "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889516/demo-landing-page/presentasi2_qsjge1.png";
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="hero-tagline"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tagline
          </label>
          <input
            type="text"
            id="hero-tagline"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="off"
            onChange={(e) => {
              const d = JSON.parse(localStorage.getItem("data"));
              d.hero.tagLine =
                e.target.value || "Buatlah tagline untuk menarik pelanggan";
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="hero-deskripsi"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Deskripsi
          </label>
          <input
            type="text"
            id="hero-deskripsi"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="off"
            onChange={(e) => {
              const d = JSON.parse(localStorage.getItem("data"));
              d.hero.deskripsi =
                e.target.value ||
                "Dekripsi dari umkm, buatkan yang bagus dengan menggunakan bantuan AI anda bisa membuat deskripsi dari umkm lebih bagus.";
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
        </div>
      </div>
      <hr className="my-10" />
    </>
  );
};

export default HeroInput;
