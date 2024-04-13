import { useEffect } from "react";
import { toggleLogin } from "../../toolkit/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.active);

  useEffect(() => {
    login
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [login]);

  return login ? (
    <div className="w-full h-[100vh] bg-slate-900 bg-opacity-70 absolute top-0 flex items-center justify-center">
      <form className="w-[90%] lg:w-1/2 xl:w-1/3 p-3 bg-[#fff] rounded-lg shadow-lg flex flex-col gap-6">
        <div className="flex justify-between items-center text-2xl">
          <p>تسجيل الدخول</p>
          <i
            onClick={() => dispatch(toggleLogin())}
            className="fa-solid fa-xmark cursor-pointer"
          ></i>
        </div>
        <input
          type="text"
          placeholder="البريد الإلكترونى"
          className="h-12 px-2 outline-none border rounded"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="h-12 px-2 outline-none border rounded"
        />
        <input
          type="button"
          value="دخول"
          className="h-12 bg-blue-600 rounded text-white"
        />
      </form>
    </div>
  ) : null;
};

export default Login;
