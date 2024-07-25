/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataDemoContext = createContext();

const DataProvider = ({ children }) => {
  const [dataDemo, setDataDemo] = useState({
    title: "Aneka Es",
    icon: null,
    navbarTitle: "Aneka Es",
    ctaLink: null,
    keyword: [
      "Aneka Es",
      "Es capcin",
      "Es kopyor",
      "Es kuwutmelon",
      "Es buah",
      "Es campur",
      "Minuman segar",
      "Minuman es khas",
    ],
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
      tagLine: "Segarkan Harimu dengan Aneka Es Sensasi yang Memanjakan!",
      deskripsi:
        "Kami hadir untuk menghadirkan berbagai pilihan minuman es yang siap menyegarkan hari-hari Anda. Dari Es Capcin yang menggugah selera dengan perpaduan kopi dan cincau yang sempurna, hingga Es Kopyor yang menghadirkan sensasi kenikmatan daging kelapa yang lembut dan manis, setiap varian es kami dirancang untuk memuaskan dahaga Anda dengan cita rasa yang istimewa.",
      btn: true, // optional
      btnText: "Pesan sekarang",
      img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1717052008/umkm/aneka-es/photo1716684193_znrrtq.jpg",
    },
    about: {
      title: "Tentang",
      txt: "Lebih dari Sekedar Toko Oleh-Oleh",

      deskripsi:
        "Setiap varian Aneka Es kami dibuat dengan bahan-bahan berkualitas tinggi, menjamin rasa yang enak dan menyehatkan. Dengan Aneka Es kami, hari Anda akan terasa lebih segar dan penuh energi. Temukan kesegaran alami dari Aneka Es, dan jadikan setiap momen lebih istimewa!", // optional
      img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1717052008/umkm/aneka-es/photo1716684193_znrrtq.jpg",
      btn: true, // optional
      btnText: "Pesan sekarang",
    },
    product: {
      title: "Produk Kami",
      // required
      data: [
        {
          name: "Es Capcin",
          deskripsi:
            "merupakan perpaduan rasa manis, gurih, dan segar yang tak terlupakan. Es ini terdiri dari es serut, potongan buah nangka, alpukat, tape singkong, dan cincau hitam.",
          price: "Rp5.000",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhsvmwNUFBSa32oxdIxXmqfxbOczbMrXVXSUKjt6jysxo4y4eeGfOFKRvAkqVU5mwqwk&usqp=CAU",
        },
        {
          name: "Es Kopyor",
          deskripsi:
            "Daging kelapa muda yang kenyal dan berair, dipadukan dengan es serut, santan kental manis, dan gula merah cair, menghasilkan rasa manis, gurih, dan segar yang unik.",
          price: "Rp5.000",
          img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1717053046/umkm/aneka-es/IMG-20220814-WA0003_qodrfg.jpg",
        },
        {
          name: "Es Kuwut Melon",
          deskripsi:
            "hidangan penutup khas Bali yang memadukan kesegaran melon dan kelapa muda dengan aroma khas jeruk nipis.",
          price: "Rp5.000",
          img: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/03/20/8JsQ6yO/resep-es-kuwut-melon-minuman-segar-cocok-untuk-buka-puasa40.jpg",
        },
      ],
    },
    location:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7897.7971805397265!2d114.37598231346807!3d-8.21295283091228!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTInNDYuNiJTIDExNMKwMjInMzMuNSJF!5e0!3m2!1sid!2sid!4v1717053739204!5m2!1sid!2sid",
    footer: {
      noHp: null,
      alamat: "Blambangan",
    },
  });

  return (
    <DataDemoContext.Provider value={[dataDemo, setDataDemo]}>
      {children}
    </DataDemoContext.Provider>
  );
};

export default DataProvider;
