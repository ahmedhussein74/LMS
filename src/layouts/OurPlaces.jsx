const OurPlaces = () => {
  return (
    <section className="px-[5%] min-h-[50vh] py-8 bg-gray-200 flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-3xl lg:text-4xl">أين نحن ؟</h1>
      <div className="w-full lg:w-1/2 p-2 rounded-lg shadow-lg bg-white text-xl lg:text-2xl flex items-center gap-2">
        <i className="fa-solid fa-location-dot"></i>
        <p> أكتوبر: السبت - الثلاثاء</p>
      </div>
      <div className="w-full lg:w-1/2 p-2 rounded-lg shadow-lg bg-white text-xl lg:text-2xl flex items-center gap-2">
        <i className="fa-solid fa-location-dot"></i>
        <p> زايد: السبت - الثلاثاء</p>{" "}
      </div>
      <div className="w-full lg:w-1/2 p-2 rounded-lg shadow-lg bg-white text-xl lg:text-2xl flex items-center gap-2">
        <i className="fa-solid fa-location-dot"></i>
        <p> الجيزة: الأحد - الأربعاء</p>{" "}
      </div>
      <div className="w-full lg:w-1/2 p-2 rounded-lg shadow-lg bg-white text-xl lg:text-2xl flex items-center gap-2">
        <i className="fa-solid fa-location-dot"></i>
        <p> المعادى: الإثنين - الخميس</p>{" "}
      </div>
    </section>
  );
};

export default OurPlaces;
