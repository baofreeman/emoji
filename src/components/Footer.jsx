import { useEffect, useRef, useState } from "react";

function Footer() {
  const [state, setState] = useState(true);
  const loadRef = useRef();

  useEffect(() => {
    const loadClientHeight = loadRef.current.clientHeight;
    const loadOffsetTop = loadRef.current.offsetTop;
    const fnLoad = () => {
      if (
        window.scrollY + window.innerHeight ===
        loadClientHeight + loadOffsetTop
      ) {
        setState(true);
      } else if (loadClientHeight <= window.innerHeight && loadClientHeight) {
        setState(true);
      } else setState(false);
    };
    window.addEventListener("scroll", fnLoad);
    return () => window.removeEventListener("scroll", fnLoad);
  }, []);

  const items = [
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji10.919b98d7.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji8.63cf53df.png&w=3840&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji12.914ce588.png&w=3840&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji13.dc7b4ac3.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji9.deaacaef.png&w=3840&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji16.eb0fc246.png&w=3840&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji5.c48e11d2.png&w=3840&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },

    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
    {
      img: "https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFooterEmoji6.8f8dd751.png&w=2048&q=75",
    },
  ];
  return (
    <>
      {state && (
        <div
          ref={loadRef}
          className="bg-green min-h-[100vh] w-full overflow-hidden"
        >
          <div className="relative max-w-full z-10">
            {items.map((item, i) => {
              let randomLeft = Math.floor(Math.random() * 2000) - 350;
              let randomTop = Math.floor(Math.random() * 500) - 100;
              let randomBottom = Math.floor(Math.random() * 500) - 100;
              let widthHeight = Math.floor(Math.random() * 800) + 300;
              return (
                <div
                  key={i}
                  style={{
                    left: randomLeft,
                    top: randomTop,
                    bottom: randomBottom,
                    width: widthHeight,
                    height: widthHeight,
                  }}
                  className="absolute"
                >
                  <img src={item.img} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
