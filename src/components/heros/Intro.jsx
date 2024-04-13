import bg from "../../images/bg.jpg";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import telegram from "../../images/telegram.png";

const Intro = () => {
  return (
    <section className="min-h-[100vh] px-[5%] py-8 bg-[#eee] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-12">
      <img
        src={bg}
        style={{
          borderRadius: "50% 50% 45% 55% / 60% 30% 70% 40% ",
        }}
        className="h-72 lg:h-96 xl:h-[500px] shadow-lg shadow-[#11baf0]"
      />
      <div className="w-full lg:w-1/2 xl:w-[40%] text-xl">
        <p>
          مرحبًا، أنا أحمد حسين، مدرّس الفيزياء الذي يعشق علم الطبيعة والقوانين
          التي تحكمها. أرحب بكم في عالم الفيزياء، عالمٍ مليءٌ بالغموض والإثارة،
          حيث يندمج العقل بالتجريب والتفكير العميق. يسرني أن أكون مرشدكم في هذه
          الرحلة المثيرة لاستكشاف أسرار الكون وفهم كيفية عمل الأشياء من حولنا.
          أعتقد بشدة أن الفهم العميق للفيزياء ليس مجرد مسألة حفظ القوانين
          والمعادلات، بل هو تجربة فكرية تحفز الفضول وتثير الاستكشاف.
        </p>
        <div className="flex gap-4 mt-2">
          <Link>
            <img src={facebook} className="h-10" />
          </Link>
          <Link>
            <img src={instagram} className="h-10" />
          </Link>
          <Link>
            <img src={whatsapp} className="h-10" />
          </Link>
          <Link>
            <img src={telegram} className="h-10" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
