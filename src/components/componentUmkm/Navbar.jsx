/* eslint-disable react/prop-types */

const Navbar = ({
  navbarTitle,
  ctaLink,
  icon,
  title,
  color: { primary, hoverColor, textColor, backgroundColor, btnTextColor },
}) => {
  return (
    <nav
      className=" fixed w-full z-20 top-0 start-0 border-b border-gray-200"
      style={{
        backgroundColor: backgroundColor.slice(4, -1),
        color: textColor.slice(6, -1),
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href={ctaLink ? ctaLink : "#"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
          target={ctaLink ? "_blank" : "_self"}
          rel="noreferrer"
        >
          {icon ? (
            <img src={icon} className="h-8 w-8 rounded-full" alt={title} />
          ) : (
            ""
          )}

          <span className="self-center lg:text-2xl font-bold whitespace-nowrap">
            {navbarTitle}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {ctaLink ? (
            <a
              href={ctaLink}
              rel="noreferrer"
              target={ctaLink ? "_blank" : "_self"}
              type="button"
              className="font-medium rounded-lg text-sm px-4 py-2 text-center"
              style={{
                backgroundColor: primary.slice(4, -1),
                color: btnTextColor.slice(6, -1),
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = hoverColor.slice(10, -1);
              }}
              onMouseOut={(e) => [
                (e.target.style.backgroundColor = primary.slice(4, -1)),
              ]}
            >
              Kontak Kami
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
