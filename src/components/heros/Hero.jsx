import bg from "../../images/bg.jpg";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Hero = () => {
  return (
    <section className="px-[5%] xl:px-[10%] h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[30px] lg:gap-0">
      <img
        src={bg}
        style={{
          borderRadius: "50% 50% 45% 55% / 60% 30% 70% 40% ",
        }}
        className="h-[300px] lg:h-[450px] shadow-lg"
      />
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-[30px] lg:text-[50px]">م/ احمد حسين</h1>
        <p className="font-bold text-center text-lg">
          منصة متخصصة في علوم الفيزياء للمرحلة الثانوية
        </p>
        <div className="flex gap-3 items-center">
          <Link to="https://www.facebook.com/">
            <FacebookIcon
              sx={{
                color: "#0866ff",
                fontSize: "40px",
              }}
            />
          </Link>
          <Link to="https://www.instagram.com/">
            <InstagramIcon
              sx={{
                color: "#5851db",
                fontSize: "40px",
              }}
            />
          </Link>
          <Link to="https://web.whatsapp.com/">
            <WhatsAppIcon
              sx={{
                color: "#2fb844",
                fontSize: "40px",
              }}
            />
          </Link>
        </div>
        <div className="flex justify-center gap-3">
          <Link
            to="/login"
            className="min-w-32 p-2 bg-blue-600 text-center text-white rounded-lg"
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/signup"
            className="min-w-32 p-2 bg-green-600 text-center text-white rounded-lg"
          >
            إنشاء حساب
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
