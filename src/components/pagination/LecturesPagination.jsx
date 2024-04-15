import { useState } from "react";
import bg from "../../images/bg.jpg";
import { DataView } from "primereact/dataview";

const LecturesPagination = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);

  const lectures = [
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "first",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "الفصل الأول",
      price: 150,
    },
    {
      img: bg,
      teacher: "احمد حسين",
      date: "12/4/2024",
      lecture: "Last",
      price: 150,
    },
  ];

  const itemTemplate = (e, index) => {
    const lectureIndex = index + first;
    return (
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
          شراء {lectureIndex}
        </button>
      </div>
    );
  };

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const listTemplate = () => {
    const slicedLectures = lectures.slice(first, first + rows);

    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-[5%]">
        {slicedLectures.map((e, index) => itemTemplate(e, index))}
      </section>
    );
  };

  return (
    <>
      <DataView
        paginator
        rows={rows}
        first={first}
        onPage={onPage}
        value={lectures}
        listTemplate={listTemplate}
        paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink"
      />
    </>
  );
};

export default LecturesPagination;
