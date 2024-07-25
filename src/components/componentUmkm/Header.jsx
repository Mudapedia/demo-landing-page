/* eslint-disable react/prop-types */
const Header = ({
  tagLine,
  deskripsi,
  ctaLink,
  btn,
  btnText,
  img,
  color: { textColor, primary, btnTextColor, hoverColor },
}) => {
  return (
    <header className={`${textColor} pt-20`}>
      <div className="flex flex-col  md:flex-row max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-16">
        <div className="lg:mt-0 md:order-2">
          <img
            src={img}
            alt="mockup"
            className="rounded-xl w-full   lg:w-[500px] mx-auto"
          />
        </div>
        <div className="mr-auto place-self-center lg:order-1 text-center sm:text-start">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl">
            {tagLine}
          </h1>

          {deskripsi ? (
            <p className="max-w-2xl mb-6 font-thin text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {deskripsi}
            </p>
          ) : (
            ""
          )}
          {btn ? (
            <a
              href={ctaLink ? ctaLink : "#"}
              rel="noreferrer"
              target={ctaLink ? "_blank" : "_self"}
              className={`${btnTextColor} ${primary} ${hoverColor}  font-medium rounded-lg text-sm px-4 py-2 text-center`}
            >
              {btnText}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
