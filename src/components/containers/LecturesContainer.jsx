const LecturesContainer = ({ currentItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {currentItems.map((e, index) => (
        <div key={index} className="rounded-lg shadow-lg overflow-hidden pb-3">
          <img src={e.img} className="w-full h-[200px]" />
          <div className="flex justify-between items-center p-2">
            {/* <p className="text-[#11baf0] text-2xl">{e.teacher}</p> */}
            <p className="px-2 font-bold text-2xl">{e.lecture}</p>
            <span className="text-gray-500 italic">{e.date}</span>
          </div>

          <div className="flex items-center justify-between">
            <button className="w-32 bg-[#11baf0] text-white rounded text-xl mx-auto block hover:bg-transparent border-2 border-[#11baf0] hover:text-[#11baf0]">
              شراء {index + 1}
            </button>
            <p className="w-fit px-3 italic rounded-full mx-auto my-3 text-lg text-gray-600 border">
              {e.price} جنيه
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LecturesContainer;
