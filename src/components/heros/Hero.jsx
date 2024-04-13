import hero from "../../images/hero.svg";

const Hero = () => {
  return (
    <section className="h-[100vh] px-[5%] pt-14 flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center gap-12">
      <div className="lg:w-1/2 xl:w-1/3 flex flex-col gap-3">
        <h1 className="text-[#11baf0] font-bold text-4xl lg:text-5xl">
          منصة الأقصى
        </h1>
        <p className="text-2xl lg:text-3xl">
          منصة متكاملة بها كل ما يحتاجه الطالب ليتفوق
        </p>
      </div>
      <img src={hero} className="lg:w-[450px] xl:w-[550px]" />
    </section>
  );
};

export default Hero;
