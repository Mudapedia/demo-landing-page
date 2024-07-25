/* eslint-disable react/prop-types */
const Footer = ({
  data: { noHp, alamat },
  title,
  color: { textColor, secondary },
  icon,
  ctaLink,
}) => {
  return (
    <footer className={`p-4 ${secondary} md:p-8 lg:p-10  ${textColor}`}>
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href={ctaLink ? ctaLink : "#"}
          target={ctaLink ? "_blank" : "_self"}
          rel="noreferrer"
          className="flex justify-center items-center text-2xl font-semibold gap-2  "
        >
          {icon ? (
            <img src={icon} alt={title} className="w-8 rounded-md" />
          ) : (
            ""
          )}
          {title}
        </a>
        <p className="my-6 ">
          {noHp ? `No Hp: ${noHp}` : " "} {alamat ? `Alamat: ${alamat}` : ""}
        </p>
        <span className="text-sm  sm:text-center">
          © 2024
          <a
            href="https://mudapedia.my.id"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            &nbsp; didukung oleh Mudapedia™
          </a>
          . All Rights Reserved.
        </span>
        <a href="https://mudapedia.my.id" target="_blank" rel="noreferrer">
          <img
            src="/logo-muda-pedia.png"
            alt="mudapedia"
            className="w-16 m-auto mt-5"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
