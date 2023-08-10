import { useState } from "react";

const NavigationBar = () => {
  const [hamburger, setHamburger] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [navbar, setNavbar] = useState("absolute");

  const hamburgerClicked = () => {
    hamburger == "" ? setHamburger("hamburger-active") : setHamburger("");
    hidden == "hidden" ? setHidden("") : setHidden("hidden");
  };

  window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    window.pageYOffset > fixedNav
      ? header.classList.add("navbar-fixed")
      : header.classList.remove("navbar-fixed");
  };
  return (
    <header
      className={`${navbar} absolute top-0 left-0 w-full flex px-4 bg-slate-200 py-1 items-center z-10`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href=""
              className="font-playfair text-4xl font-bold text-emerald-400 block py-6"
            >
              Anjas<span className=" text-sky-600">Film</span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              className={`block absolute right-4 ${hamburger} lg:hidden`}
              onClick={hamburgerClicked}
            >
              <span className="origin-top-left hamburger-line transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="origin-bottom-left transition duration-300 hamburger-line"></span>
            </button>
            <nav
              className={`${hidden} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href=""
                    className="text-base lg:text-lg font-bold text-sky-900 py-2 mx-8 group-hover:text-sky-500 flex"
                  >
                    Trending
                  </a>
                </li>
                <li className="group">
                  <a
                    href=""
                    className="text-base lg:text-lg font-bold text-sky-900 py-2 mx-8 group-hover:text-sky-500 flex"
                  >
                    Box Office
                  </a>
                </li>
                <li className="group">
                  <a
                    href=""
                    className="text-base lg:text-lg font-bold text-sky-900 py-2 mx-8 group-hover:text-sky-500 flex"
                  >
                    Indonesia
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
