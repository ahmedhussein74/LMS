import { Accordion, AccordionTab } from "primereact/accordion";

const OurPlaces = () => {
  const places = [
    {
      city: "أكتوبر",
      centers: ["الحى الأول", "الحى الأول", "الحى الأول"],
    },
    {
      city: "الجيزة",
      centers: ["الحى الأول", "الحى الأول", "الحى الأول"],
    },
    {
      city: "المعادى",
      centers: ["الحى الأول", "الحى الأول", "الحى الأول"],
    },
    {
      city: "زايد",
      centers: ["الحى الأول", "الحى الأول", "الحى الأول"],
    },
  ];

  return (
    <section className="px-[5%] min-h-[50vh] py-8 flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-3xl lg:text-4xl">أين نحن ؟</h1>
      <Accordion className="w-full lg:w-1/2 rounded-lg overflow-hidden border">
        {places.map((e, index) => (
          <AccordionTab
            key={index}
            header={e.city}
            className="min-h-fit p-2 py-3 shadow-lg bg-white"
          >
            <ul>
              {e.centers.map((center, i) => (
                <li key={i}>{center}</li>
              ))}
            </ul>
          </AccordionTab>
        ))}
      </Accordion>
    </section>
  );
};

export default OurPlaces;
