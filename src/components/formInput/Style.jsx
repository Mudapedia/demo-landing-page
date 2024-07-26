import { useEffect, useRef } from "react";

const Style = () => {
  const primary = useRef();
  const primaryInputText = useRef();

  const secondary = useRef();
  const secondaryInputText = useRef();

  const background = useRef();
  const backgroundInputText = useRef();

  const btnHover = useRef();
  const btnHoverInputText = useRef();

  const accent = useRef();
  const accentInputText = useRef();

  const btnText = useRef();
  const btnTextInputText = useRef();

  const textColor = useRef();
  const textColorInputText = useRef();

  useEffect(() => {
    if (primary.current && primaryInputText.current) {
      primaryInputText.current.defaultValue =
        primary.current.value.toUpperCase();
    }

    if (secondary.current && secondaryInputText.current) {
      secondaryInputText.current.defaultValue =
        secondary.current.value.toUpperCase();
    }

    if (background.current && backgroundInputText.current) {
      backgroundInputText.current.defaultValue =
        background.current.value.toUpperCase();
    }

    if (btnHover.current && btnHoverInputText.current) {
      btnHoverInputText.current.defaultValue =
        btnHover.current.value.toUpperCase();
    }

    if (accent.current && accentInputText.current) {
      accentInputText.current.defaultValue = accent.current.value.toUpperCase();
    }

    if (btnText.current && btnTextInputText.current) {
      btnTextInputText.current.defaultValue =
        btnText.current.value.toUpperCase();
    }

    if (textColor.current && textColorInputText.current) {
      textColorInputText.current.defaultValue =
        textColor.current.value.toUpperCase();
    }
  }, []);

  return (
    <>
      {/* Style */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-5">Styling Landing Page</h1>
        <div className="mb-5">
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="primary-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Button Primary Color
            </label>
            <div className="flex  items-center gap-2">
              <input
                ref={primary}
                type="color"
                id="primary-color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  primaryInputText.current.value =
                    primary.current.value.toUpperCase();
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.primary = `bg-[${primaryInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />

              <input
                ref={primaryInputText}
                type="text"
                className="border w-20 px-1"
                defaultValue={primary.current?.value}
                pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                onChange={() => {
                  primary.current.value = primaryInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.primary = `bg-[${primaryInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="secondary-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Secondary Color
            </label>
            <div className="flex items-center gap-2">
              <input
                ref={secondary}
                type="color"
                id="secondary-color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  secondaryInputText.current.value =
                    secondary.current.value.toUpperCase();

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.secondary = `bg-[${secondary.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
              <input
                ref={secondaryInputText}
                type="text"
                className="border w-20 px-1"
                onChange={() => {
                  console.log(secondaryInputText.current.value);
                  secondary.current.value = secondaryInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.secondary = `bg-[${secondaryInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="background-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Background Color
            </label>
            <div className=" flex items-center gap-2">
              <input
                ref={background}
                type="color"
                id="background-color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  backgroundInputText.current.value =
                    background.current.value.toUpperCase();

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.backgroundColor = `bg-[${background.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
              <input
                ref={backgroundInputText}
                type="text"
                className="border w-20 px-1"
                onChange={() => {
                  background.current.value = backgroundInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.backgroundColor = `bg-[${backgroundInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="btn-hover-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Button Hover Color
            </label>
            <div className="flex items-center gap-2">
              <input
                ref={btnHover}
                type="color"
                id="btn-hover-color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  btnHoverInputText.current.value =
                    btnHover.current.value.toUpperCase();

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.hoverColor = `hover:bg-[${btnHover.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
              <input
                ref={btnHoverInputText}
                type="text"
                className="border w-20 px-1"
                onChange={() => {
                  btnHover.current.value = btnHoverInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.hoverColor = `hover:bg-[${btnHoverInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="price-accent-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Price Accent Color
            </label>
            <div className="flex items-center gap-2">
              <input
                ref={accent}
                type="color"
                id="price-accent-color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  accentInputText.current.value =
                    accent.current.value.toUpperCase();

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.accentColor = `text-[${accent.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
              <input
                ref={accentInputText}
                type="text"
                className="border w-20 px-1"
                onChange={() => {
                  accent.current.value = accentInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.accentColor = `text-[${accentInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="button-text"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Button text
            </label>
            <div className="flex items-center gap-2">
              <input
                ref={btnText}
                type="color"
                id="button-text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  btnTextInputText.current.value =
                    btnText.current.value.toUpperCase();

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.btnTextColor = `text-[${btnText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
              <input
                ref={btnTextInputText}
                type="text"
                className="border w-20 px-1"
                onChange={() => {
                  btnText.current.value = btnTextInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.btnTextColor = `bg-[${btnTextInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
          <div className="flex w-[300px] mb-3 justify-between">
            <label
              htmlFor="price-accent-color"
              className="block mb-2 text-sm font-medium text-gray-900 mr-2"
            >
              Text color
            </label>
            <div className="flex items-center gap-2">
              <input
                ref={textColor}
                type="color"
                id="price-accent-color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-10"
                required
                onChange={() => {
                  textColorInputText.current.value =
                    textColor.current.value.toUpperCase();

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.textColor = `text-[${textColor.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
              <input
                ref={textColorInputText}
                type="text"
                className="border w-20 px-1"
                onChange={() => {
                  textColor.current.value = textColorInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.textColor = `bg-[${textColorInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </>
  );
};

export default Style;
