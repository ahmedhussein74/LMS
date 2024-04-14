import { useState } from "react";
import bg from "../../images/bg.jpg";
import ReactPaginate from "react-paginate";
import LecturesContainer from "../containers/LecturesContainer";

const items = [
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
];

const Lectures = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 9;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 9);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="px-[5%] py-8">
      <h1 className="text-center font-bold text-3xl lg:text-5xl pb-4 lg:pb-6">
        المحاضرات
      </h1>
      <LecturesContainer currentItems={currentItems} />
      <ReactPaginate
        className="w-fit mt-4 flex gap-3 mx-auto"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </section>
  );
};

export default Lectures;
