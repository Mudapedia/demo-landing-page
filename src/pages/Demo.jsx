/* eslint-disable react/prop-types */
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "../components/componentUmkm/Navbar";
import Header from "../components/componentUmkm/Header";
import Product from "../components/componentUmkm/Product";
import About from "../components/componentUmkm/About";
import Footer from "../components/componentUmkm/Footer";
import Location from "../components/componentUmkm/Location";
import testData from "../test";

const Demo = () => {
  const data = JSON.parse(localStorage.getItem("data")) || testData;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={data.icon || ""}
          />
          <meta httpEquiv="refresh" content="1"></meta>
          <title>{data.title}</title>
        </Helmet>
        <section
          style={{ backgroundColor: data.color.backgroundColor.slice(4, 11) }}
        >
          <Navbar
            navbarTitle={data.navbarTitle}
            ctaLink={data.ctaLink}
            title={data.title}
            color={data.color}
            icon={data.icon}
          />
          <Header
            deskripsi={data.hero.deskripsi}
            tagLine={data.hero.tagLine}
            btn={data.hero.btn}
            btnText={data.hero.btnText}
            ctaLink={data.ctaLink}
            img={data.hero.img}
            color={data.color}
          />
          <main>
            <Product product={data.product} color={data.color} />
            <About
              data={data.about}
              color={data.color}
              ctaLink={data.ctaLink}
            />
            <Location location={data.location} />
            <Footer
              data={data.footer}
              title={data.title}
              color={data.color}
              icon={data.icon}
              ctaLink={data.ctaLink}
            />
          </main>
        </section>
      </HelmetProvider>
    </>
  );
};

export default Demo;
