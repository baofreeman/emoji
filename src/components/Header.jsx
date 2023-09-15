import { useEffect, useRef, useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState("menu");
  const [scroll, setScroll] = useState();
  const [preScroll, setpreScroll] = useState();
  const navbarRef = useRef();
  const navbarMobileRef = useRef();

  const handleMenu = () => {
    setNavbar("close");
    navbarMobileRef.current.classList.remove("sm:hidden");
  };

  const handleClose = () => {
    setNavbar("menu");
    navbarMobileRef.current.classList.add("sm:hidden");
  };

  useEffect(() => {
    setpreScroll(scroll);
    document.addEventListener("scroll", fnScroll);
    return () => document.removeEventListener("scroll", fnScroll);
  }, [scroll]);

  function fnScroll() {
    setScroll(document.documentElement.scrollTop);
    if (scroll > preScroll) {
      navbarRef.current.classList.remove("animate-scroll-up-navbar", "fixed");
      navbarRef.current.classList.add("animate-scroll-down-navbar", "block");
    } else {
      navbarRef.current.classList.add("animate-scroll-up-navbar", "fixed");
      navbarRef.current.classList.remove("animate-scroll-down-navbar");
    }
  }

  return (
    <div className="w-full m-auto bg-blue relative">
      <nav
        ref={navbarRef}
        className="w-full m-auto fixed py-4 sm:py-[10px] top-0 right-0 left-0 z-10 bg-blue"
      >
        <div className="flex justify-center px-4">
          <div className="w-full flex justify-start items-center">
            <div className="max-w-[200px] sm:max-w-[120px]">
              <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.79720909.png&w=750&q=75" />
            </div>
          </div>
          <ul className="flex w-full justify-end sm:hidden">
            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                About
              </a>
            </li>

            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                Tokenomisc
              </a>
            </li>

            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                Roadmap
              </a>
            </li>

            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                Product
              </a>
            </li>
          </ul>

          <div className="hidden sm:flex w-full items-center justify-end">
            <div className="px-[8px] py-[8px] text-md text-white">
              {navbar === "menu" ? (
                <div onClick={handleMenu} className="relative">
                  <i className="fa-solid fa-bars"></i>
                </div>
              ) : (
                <div onClick={handleClose} className="relative">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              )}

              {navbar && (
                <div
                  ref={navbarMobileRef}
                  className="absolute w-full h-screen bottom-0 left-0 top-[60px] right-0 bg-blue"
                >
                  <ul className="flex items-center justify-center flex-col m-auto gap-3">
                    <li className="py-2 px-6 mx-2 text-center my-auto">
                      <a
                        className="text-lg font-wonderland text-white"
                        href="#"
                      >
                        About
                      </a>
                    </li>

                    <li className="py-2 px-6 mx-2 text-center my-auto">
                      <a
                        className="text-lg font-wonderland text-white"
                        href="#"
                      >
                        Tokenomisc
                      </a>
                    </li>

                    <li className="py-2 px-6 mx-2 text-center my-auto">
                      <a
                        className="text-lg font-wonderland text-white"
                        href="#"
                      >
                        Roadmap
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
