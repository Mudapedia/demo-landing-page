const testData = {
  title: "Nama umkm",
  icon: null,
  navbarTitle: "Nama umkm",
  ctaLink: null,
  keyword: [],
  color: {
    // required
    primary: "bg-[#F87171]",
    secondary: "bg-[#FD7382]",
    backgroundColor: "bg-[#ffffff]",
    hoverColor: "hover:bg-[#ef4444]",
    textColor: "text-[#010010]",
    btnTextColor: "text-[#ffffff]",
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
    ],
  },
  location: null,
  footer: {
    noHp: null,
    alamat: null,
  },
};

export default testData;
