import { useEffect, useRef, useState } from "react";

function Header() {
  const [scroll, setScroll] = useState();
  const [preScroll, setpreScroll] = useState();
  const navbarRef = useRef();

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
        className="w-full m-auto fixed pt-10 top-0 right-0 left-0 z-10 bg-blue"
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
                About <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                Tokenomisc <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                Roadmap <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="py-2 px-6 mx-2 text-center my-auto">
              <a className="text-lg font-wonderland text-white" href="#">
                Product <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
