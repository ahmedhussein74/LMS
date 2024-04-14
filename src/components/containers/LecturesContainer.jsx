const LecturesContainer = ({ currentItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {currentItems.map((e, index) => (
        <div key={index} className="rounded-lg shadow-lg overflow-hidden pb-3">
          <img src={e.img} className="w-full h-[200px]" />
          <div className="flex justify-between items-center p-2">
            <p className="text-[#11baf0] text-2xl">{e.teacher}</p>
            <span className="text-gray-500 italic">{e.date}</span>
          </div>
          <p className="px-2 font-bold text-2xl">{e.lecture}</p>
          <p className="bg-[#eee] w-fit px-3 italic rounded-xl mx-auto my-3 text-xl">
            {e.price} جنيه
          </p>
          <button className="w-32 bg-green-600 text-white rounded text-2xl mx-auto block">
            شراء {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LecturesContainer;
