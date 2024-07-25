const AboutInput = () => {
  return (
    <>
      {/* about section */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5">Konten About Section</h1>
        <div className="mb-5">
          <label
            htmlFor="about-img"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            URL Image
          </label>
          <input
            type="text"
            id="about-img"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="off"
            onChange={(e) => {
              const d = JSON.parse(localStorage.getItem("data"));
              d.about.img = e.target.value;
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="about-tagline"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tagline
          </label>
          <input
            type="text"
            id="about-tagline"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="off"
            onChange={(e) => {
              const d = JSON.parse(localStorage.getItem("data"));
              d.about.txt = e.target.value;
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="about-deskripsi"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Deskripsi
          </label>
          <input
            type="text"
            id="about-deskripsi"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="off"
            onChange={(e) => {
              const d = JSON.parse(localStorage.getItem("data"));
              d.about.deskripsi = e.target.value;
              localStorage.setItem("data", JSON.stringify(d));
            }}
          />
        </div>
      </div>
      <hr className="my-10" />
    </>
  );
};

export default AboutInput;
