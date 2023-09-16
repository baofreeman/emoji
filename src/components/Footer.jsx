import { useEffect, useRef, useState } from "react";

function Footer() {
  const [state, setState] = useState(true);
  const loadRef = useRef();

  return (
    <>
      {state && (
        <div className="bg-green min-h-[100vh] w-full pt-[100px] relative bottom-[0rem] overflow-hidden z-0">
          <div className="max-w-full">
            <img
              className="none overflow-clip w-full"
              src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterMobile.dbc43a69.png&w=828&q=75"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
