/* eslint-disable react/prop-types */
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "../components/componentUmkm/Navbar";
import Header from "../components/componentUmkm/Header";
import Product from "../components/componentUmkm/Product";
import About from "../components/componentUmkm/About";
import Footer from "../components/componentUmkm/Footer";
import Location from "../components/componentUmkm/Location";
import { DataDemoContext } from "../customHooks/DataProvider";
import { useContext } from "react";

const Demo = () => {
  const [data] = useContext(DataDemoContext);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={data.icon || ""}
          />
          <title>{data.title}</title>
        </Helmet>
        <section className={data.color.backgroundColor}>
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
