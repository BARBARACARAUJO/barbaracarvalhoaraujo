import Image from "next/image";
import ButtonLink from "./ButtonLink";
import profilePic from "../public/foto_perfil.jpg";
import smiley from "../public/smile.png";

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
      link: "/CV.pdf",
      name: "CURRICULUM VITAE",
    },
    {
      link: "https://www.linkedin.com/in/acbarbara/",
      name: "LINKEDIN",
    },
    {
      link: "mailto:carvalho.abarbara@gmail.com",
      name: "E-MAIL",
    },
  ];

  return (
    <div className="my-8 md:flex container mx-2 md:mx-auto">
      <div className="w-80 relative">
        <div className="relative width-100p">
          <Image src={profilePic} alt="face photo of barbara" />
        </div>
      </div>
      <div className="mx-4">
        <h3 className="text-5xl font-bold mb-4 flex ">
          <div>HI!</div> <Image objectPosition="bottom" rel="noreferrer" className="inline" objectFit="contain" layout="intrinsic" src={smiley} />
        </h3>
        <p className="text-3xl">
          I’m Barbara and I’m a social media manager and digital content
          creator, currently based in Portugal.
        </p>
        <div>
          <div className="container mx-auto my-8 md:flex justify-around items-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">SERVICES</h3>
              <ul>
                {services.map((entry) => (
                  <li key={entry} className="border-black text-3xl">
                    - {entry}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5">
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
