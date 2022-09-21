import ButtonLink from "./ButtonLink";

export default function AboutContent(props) {
  const services = [
    "Social Media Strategy",
    "Content Creation",
    "Creative Direction",
    "Art Direction",
    "Set Design",
    "Video",
    "Photography",
    "Copywriting",
  ];

  const links = [
    {
      link: "/link",
      name: "CURRICULUM VITAE",
    },
    {
      link: "/link",
      name: "LINKEDIN",
    },
    {
      link: "/link",
      name: "E-MAIL",
    },
  ];

  return (
    <div className="my-8 md:flex container mx-2 md:mx-auto">
      <div className="w-80">fotos</div>
      <div>
        <h3 className="text-5xl font-bold mb-4">HI! 🙂</h3>
        <p className="text-4xl">
        I’m Barbara and I’m a social media manager and digital
content creator, currently based in Portugal.
        </p>
        <div>
          <div className="container mx-auto my-8 md:flex justify-around items-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">SERVICES</h3>
              <ul className>
                {services.map((entry) => (
                  <li key={entry} className="border-black text-3xl">
                    - {entry}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {links.map((obj) => (
                <ButtonLink key={obj.name} href={obj.link} text={obj.name} />
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
