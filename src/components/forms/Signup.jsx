import { useEffect } from "react";
import { toggleSignup } from "../../toolkit/signupSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup.active);

  useEffect(() => {
    signup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [signup]);

  return signup ? (
    <div className="w-full h-[100vh] bg-slate-900 bg-opacity-70 absolute top-0 flex items-center justify-center">
      <form className="w-[90%] lg:w-1/2 xl:w-1/3 p-3 bg-[#fff] rounded-lg shadow-lg flex flex-col gap-6">
        <div className="flex justify-between items-center text-2xl">
          <p>إنشاء حساب</p>
          <i
            onClick={() => dispatch(toggleSignup())}
            className="fa-solid fa-xmark cursor-pointer"
          ></i>
        </div>
        <input
          type="text"
          placeholder="الإسم"
          className="h-12 px-2 outline-none border rounded"
        />
        <input
          type="text"
          placeholder="رقم الهاتف"
          className="h-12 px-2 outline-none border rounded"
        />
        <input
          type="text"
          placeholder="رقم ولى الأمر"
          className="h-12 px-2 outline-none border rounded"
        />
        <input
          type="text"
          placeholder="البريد الإلكترونى"
          className="h-12 px-2 outline-none border rounded"
        />
        <select className="h-12 px-2 outline-none border rounded">
          <option value={1}>الصف الأول</option>
          <option value={2}>الصف الثانى</option>
          <option value={3}>الصف الثالث</option>
        </select>
        <input
          type="password"
          placeholder="كلمة المرور"
          className="h-12 px-2 outline-none border rounded"
        />
        <input
          type="button"
          value="تأكيد"
          className="h-12 bg-green-600 rounded text-white"
        />
      </form>
    </div>
  ) : null;
};

export default Signup;
