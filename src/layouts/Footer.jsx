import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1b0b3f] text-white px-[5%] py-8">
      <div className="pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 justify-center">
            <i className="fa-solid fa-school fa-fw text-lg"></i>
            <span className="text-3xl">الأقصى</span>
          </div>
        </div>
        <div className="flex items-center flex-col gap-2 text-lg">
          <p className="font-bold text-xl mb-3">روابط سريعة</p>
          <Link to="">الصفحة الرئيسية</Link>
          <Link to="">المحاضرات</Link>
          <Link to="">المراجعات</Link>
          <Link to="">الامتحانات</Link>
          <Link to="">الملازم</Link>
        </div>
        <div className="flex items-center flex-col gap-2 text-lg">
          <p className="font-bold text-xl mb-3">وسائل التواصل الاجتماعي</p>
          <Link to="">Facebook</Link>
          <Link to="">Whatsapp</Link>
          <Link to="">Instagram</Link>
          <Link to="">Telegram</Link>
        </div>
        <div className="flex items-center flex-col gap-2 text-lg">
          <p className="font-bold text-xl mb-3">أين نحن ؟</p>
          <Link to="">أكتوبر</Link>
          <Link to="">زايد</Link>
          <Link to="">الجيزة</Link>
          <Link to="">المعادى</Link>
        </div>
      </div>
      <hr className="" />
      <p className="text-lg text-center pt-3">
        Copyright &copy; 2024 - Developed by{" "}
        <Link
          className="text-[#11baf0]"
          to="https://www.linkedin.com/in/ahmedhussein22/"
        >
          Ahmed Hussein
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
