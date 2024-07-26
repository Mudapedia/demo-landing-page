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

  const asignColor = () => {
    const color = JSON.parse(localStorage.getItem("data")).color;

    if (primary.current && primaryInputText.current) {
      primary.current.value = color.primary.slice(4, -1);
      primaryInputText.current.defaultValue = color.primary.slice(4, -1);
    }

    if (secondary.current && secondaryInputText.current) {
      secondary.current.value = color.secondary.slice(4, -1);
      secondaryInputText.current.defaultValue = color.secondary.slice(4, -1);
    }

    if (background.current && backgroundInputText.current) {
      background.current.value = color.backgroundColor.slice(4, -1);
      backgroundInputText.current.defaultValue = color.backgroundColor
        .slice(4, -1)
        .toUpperCase();
    }

    if (btnHover.current && btnHoverInputText.current) {
      btnHover.current.value = color.hoverColor.slice(10, -1);
      btnHoverInputText.current.defaultValue = color.hoverColor
        .slice(10, -1)
        .toUpperCase();
    }

    if (accent.current && accentInputText.current) {
      accent.current.value = color.accentColor.slice(6, -1);
      accentInputText.current.defaultValue = color.accentColor.slice(6, -1);
    }

    if (btnText.current && btnTextInputText.current) {
      btnText.current.value = color.btnTextColor.slice(6, -1);
      btnTextInputText.current.defaultValue = color.btnTextColor
        .slice(6, -1)
        .toUpperCase();
    }

    if (textColor.current && textColorInputText.current) {
      textColor.current.value = color.textColor.slice(6, -1);
      textColorInputText.current.defaultValue = color.textColor.slice(6, -1);
    }
  };

  useEffect(() => {
    asignColor();
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
                maxLength={7}
                required
                onChange={() => {
                  primary.current.value = primaryInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.primary = `bg-[${primaryInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }

                  primary.current.value = dataPaste;
                  primaryInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.primary = `bg-[${dataPaste}]`;
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
                maxLength={7}
                onChange={() => {
                  console.log(secondaryInputText.current.value);
                  secondary.current.value = secondaryInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.secondary = `bg-[${secondaryInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }
                  secondary.current.value = dataPaste;
                  secondaryInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.secondary = `bg-[${dataPaste}]`;
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
                maxLength={7}
                onChange={() => {
                  background.current.value = backgroundInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.backgroundColor = `bg-[${backgroundInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }
                  background.current.value = dataPaste;
                  backgroundInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.backgroundColor = `bg-[${dataPaste}]`;
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
                maxLength={7}
                onChange={() => {
                  btnHover.current.value = btnHoverInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.hoverColor = `hover:bg-[${btnHoverInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }
                  btnHover.current.value = dataPaste;
                  btnHoverInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.hoverColor = `hover:bg-[${dataPaste}]`;
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
                maxLength={7}
                onChange={() => {
                  accent.current.value = accentInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.accentColor = `text-[${accentInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }
                  accent.current.value = dataPaste;
                  accentInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.accentColor = `text-[${dataPaste}]`;
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
                maxLength={7}
                onChange={() => {
                  btnText.current.value = btnTextInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.btnTextColor = `text-[${btnTextInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }
                  btnText.current.value = dataPaste;
                  btnTextInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.btnTextColor = `text-[${dataPaste}]`;
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
                maxLength={7}
                onChange={() => {
                  textColor.current.value = textColorInputText.current.value;
                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.textColor = `text-[${textColorInputText.current.value}]`;
                  localStorage.setItem("data", JSON.stringify(d));
                }}
                onPaste={(e) => {
                  let dataPaste = e.clipboardData.getData("text/plain");
                  if (dataPaste[0] != "#") {
                    dataPaste = `#${dataPaste}`;
                  }
                  textColor.current.value = dataPaste;
                  textColorInputText.current.value = dataPaste;

                  const d = JSON.parse(localStorage.getItem("data"));
                  d.color.textColor = `text-[${dataPaste}]`;
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
