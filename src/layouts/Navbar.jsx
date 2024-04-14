import { useDispatch } from "react-redux";
import toggleNavbar from "../hooks/toggleNavbar";
import { NavLink, Link } from "react-router-dom";
import { toggleLogin } from "../toolkit/loginSlice";
import { toggleSignup } from "../toolkit//signupSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const routes = [
    { url: "/", value: "الصفحة الرئيسية" },
    { url: "/lectures", value: "المحاضرات" },
    { url: "/revisions", value: "المراجعات" },
    { url: "/exams", value: "الامتحانات" },
    { url: "/books", value: "الملازم" },
  ];

  return (
    <nav className="fixed w-full bg-[#1b0b3f] text-white h-14 lg:px-[5%] flex flex-wrap justify-between lg:gap-6 overflow-hidden shadow-lg duration-500">
      <header className="w-full lg:w-fit h-14 px-[5%] lg:px-0 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <i className="fa-solid fa-school fa-fw text-lg"></i>
          <span className="text-3xl">الأقصى</span>
        </Link>
        <i
          onClick={() => toggleNavbar(routes.length)}
          className="fa-solid fa-ellipsis-vertical lg:hidden text-xl"
        ></i>
      </header>
      <aside className="w-full lg:w-fit lg:h-14 grow px-[5%] lg:px-0 flex flex-wrap lg:gap-8">
        {routes.map((e, index) => (
          <NavLink
            key={index}
            to={e.url}
            className="w-full lg:w-fit h-14 capitalize flex items-center"
          >
            {e.value}
          </NavLink>
        ))}
      </aside>
      <div className="h-14 px-[5%] lg:px-0 flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleLogin())}
          className="w-28 py-1 block text-center border-2 border-white rounded hover:bg-white hover:text-[#1b0b3f]"
        >
          تسجيل الدخول
        </button>
        <button
          onClick={() => dispatch(toggleSignup())}
          className="w-28 py-1 block text-center border-2 border-white rounded hover:bg-white hover:text-[#1b0b3f]"
        >
          إنشاء حساب
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
