/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const About = ({
  data: { title, txt, deskripsi, img, btn, btnText },
  ctaLink,
  color: { textColor, primary, btnTextColor, hoverColor },
}) => {
  return (
    <section className={`max-w-screen-xl mx-auto  ${textColor} mt-24`}>
      {title ? (
        <p className="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">
        {title}
      </p>
      ) : (
        ""
      )}
      <div className="flex flex-col md:flex-row px-4 py-8 mx-auto gap-8 lg:py-16">
        <div className="lg:mt-0 mb-10">
          <img src={img} alt="mockup" className="rounded-xl w-[28rem]" />
        </div>
        <div className="w-fit mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            {txt}
          </h1>
          {deskripsi ? (
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              {deskripsi}
            </p>
          ) : (
            ""
          )}

          <section className="flex justify-center md:justify-start">
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
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
