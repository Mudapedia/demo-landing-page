const Style = () => {
  return (
    <>
      {/* Style */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5">Styling Landing Page</h1>
        <div className="mb-5">
          <div className="flex w-[200px] mb-3 justify-between">
            <label
              htmlFor="primary-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Button Primary Color
            </label>
            <input
              type="color"
              id="primary-color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
              required
            />
          </div>
          <div className="flex w-[200px] mb-3 justify-between">
            <label
              htmlFor="secondary-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Secondary Color
            </label>
            <input
              type="color"
              id="secondary-color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
              required
            />
          </div>
          <div className="flex w-[200px] mb-3 justify-between">
            <label
              htmlFor="background-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Background Color
            </label>
            <input
              type="color"
              id="background-color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
              required
            />
          </div>
          <div className="flex w-[200px] mb-3 justify-between">
            <label
              htmlFor="btn-hover-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Button Hover Color
            </label>
            <input
              type="color"
              id="btn-hover-color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
              required
            />
          </div>
          <div className="flex w-[200px] mb-3 justify-between">
            <label
              htmlFor="price-accent-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Price Accent Color
            </label>
            <input
              type="color"
              id="price-accent-color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
              required
            />
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </>
  );
};

export default Style;
