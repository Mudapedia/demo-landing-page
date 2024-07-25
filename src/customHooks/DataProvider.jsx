/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataDemoContext = createContext();

const DataProvider = ({ children }) => {
  const [dataDemo, setDataDemo] = useState({
    title: "Nama umkm",
    icon: null,
    navbarTitle: "Nama umkm",
    ctaLink: "nohp",
    keyword: [],
    color: {
      // required
      primary: "bg-[#F87171]",
      secondary: "bg-[#FD7382]",
      backgroundColor: "bg-white",
      hoverColor: "hover:bg-[#ef4444]",
      textColor: "text-[#010010]",
      btnTextColor: "text-white",
      accentColor: "text-[#F87171]",
    },

    hero: {
      tagLine: "Buatlah tagline untuk menarik pelanggan",
      deskripsi:
        "Dekripsi dari umkm, buatkan yang bagus dengan menggunakan bantuan AI anda bisa membuat deskripsi dari umkm lebih bagus.",
      btn: true, // optional
      btnText: "Text button untuk hero",
      img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889516/demo-landing-page/presentasi2_qsjge1.png",
    },
    about: {
      title: "Tentang",
      txt: "Buatlah tagline lagi",

      deskripsi:
        "Buatlah deskripsi lagi tentang umkm, misalkan sudah berjualan dari tahun berapa, atau cara pembuatan produknya", // optional
      img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889516/demo-landing-page/presentasi2_qsjge1.png",
      btn: true, // optional
      btnText: "btn untuk tentang",
    },
    product: {
      title: "Produk Kami",
      // required
      data: [
        {
          name: "Nama Produk",
          deskripsi:
            "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
          price: "Rp harga",
          img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
        },
        {
          name: "Nama Produk",
          deskripsi:
            "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
          price: "Rp harga",
          img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
        },
        {
          name: "Nama Produk",
          deskripsi:
            "Buatlah deskripsi produknya sebagai informasi untuk pelanggan.",
          price: "Rp harga",
          img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1721889757/demo-landing-page/presentasi_1_nagusu.png",
        },
      ],
    },
    location:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7897.7971805397265!2d114.37598231346807!3d-8.21295283091228!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTInNDYuNiJTIDExNMKwMjInMzMuNSJF!5e0!3m2!1sid!2sid!4v1717053739204!5m2!1sid!2sid",
    footer: {
      noHp: null,
      alamat: "Alamat",
    },
  });

  return (
    <DataDemoContext.Provider value={[dataDemo, setDataDemo]}>
      {children}
    </DataDemoContext.Provider>
  );
};

export default DataProvider;
