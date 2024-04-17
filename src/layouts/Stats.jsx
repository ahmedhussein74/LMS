import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      title: "المحاضرات",
      value: 2500,
    },
    {
      title: "الطلاب",
      value: 15000,
    },
    {
      title: "المراجعات",
      value: 3000,
    },
    {
      title: "الملازم",
      value: 1500,
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-[50vh] px-[5%] py-8 bg-[#1b0b3f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8"
    >
      {stats.map((e, index) => (
        <div
          key={index}
          className="text-[#11baf0] text-center bg-white rounded-lg py-8 md:py-10 border-b-[6px] border-[#11baf0]"
        >
          <div className="text-3xl lg:text-5xl">
            {inView ? (
              <CountUp start={0} end={e.value} delay={1} duration={7} />
            ) : (
              <h2 className="text-3xl lg:text-5xl">0</h2>
            )}
          </div>
          <p className="text-3xl mt-1">{e.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
