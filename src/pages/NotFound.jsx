const NotFound = () => {
  return (
    <section className="flex justify-center items-center h-[100vh] ">
      <section className="flex flex-col items-center gap-4">
        <section className="relative flex justify-center">
          <img src="/spongebob.gif" alt="notfound" />
          <h1 className="font-bold text-4xl text-white absolute bottom-10 text-shadow">
            Ga ada, Ga ada
          </h1>
        </section>
        <h1 className="text-center font-bold text-xl">
          Halaman tidak ditemukan
        </h1>
        <a href="/" className="py-1 px-4 bg-blue-500 text-white rounded-md ">
          Kembali
        </a>
      </section>
    </section>
  );
};

export default NotFound;
