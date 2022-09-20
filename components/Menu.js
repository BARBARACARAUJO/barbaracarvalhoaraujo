import Link from "next/link";
import { useState, useRef } from "react";
import Hamburger from "./Hamburger";
import HeaderTitle from "./HeaderTitle";

export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuEntries = [
    {
      name: "ABOUT",
      path: "/",
    },
    {
      name: "WORK",
      path: "/work",
    },
  ];

  return (
    <div className="flex justify-between mx-2 md:mx-0 ">
      <nav>
        <section className="flex items-center">
          <div>
            <Hamburger
              isOpen={isNavOpen}
              className="my-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            />
          </div>
          <div className="px-4">
            {isNavOpen ? (
              <div>
                <ul>
                  {menuEntries.map((entry) => (
                    <li key={entry.path} className="border-black hover:text-gray-500 uppercase text-3xl font-bold">
                      <Link href={entry.path}>
                        <a>{entry.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <HeaderTitle />
            )}
          </div>
        </section>
      </nav>
    </div>
  );
}
