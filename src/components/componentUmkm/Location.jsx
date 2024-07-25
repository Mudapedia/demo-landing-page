/* eslint-disable react/prop-types */
const Location = ({ location }) => {
  return location ? (
    <section className="max-w-screen-lg px-5 mx-auto mb-20">
      <p className="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">
        Lokasi Kami
      </p>
      <iframe
        src={location || ""}
        className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] rounded-md"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  ) : (
    ""
  );
};

export default Location;
