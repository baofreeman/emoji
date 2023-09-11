function Step() {
  return (
    <div className="relative w-full pt-[100px] pb-[150px] m-auto bg-white">
      <div className="px-[200px]">
        <h1 className="text-5xl px-[20px] m-auto text-center font-wonderland text-green drop-shadow-3xl">
          How to list your token to EmojiSwap
        </h1>
      </div>

      <div className="absolute w-[150px] right-[190px] top-[85px]">
        <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTokenImg.8391ac88.png&w=640&q=75" />
      </div>
      <div className="absolute w-[500px] max-w-full top-[10%] left-[-14%]">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTokenImg2.4a2e0fb2.png&w=1200&q=75"
        />
      </div>

      {/* tag */}
      <div className="max-w-full w-full h-[500px] px-[80px] mt-[150px] flex justify-center gap-5 relative">
        <div className="w-[380px] h-[380px]">
          <div className="block w-full h-full bg-cover bg-center bg-hero-1 rounded-lg">
            <div className="flex flex-col justify-around h-full p-[20px]">
              <h1 className="text-md">Step</h1>
              <h1 className="text-xl">Submid the form and wait approve</h1>
            </div>
          </div>
        </div>

        <div className="absolute w-[200px] bottom-[-18%] left-[3%]">
          <div className="w-full">
            <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTokenImg4.c7288dbf.png&w=1920&q=75" />
          </div>
        </div>

        <div className="w-[380px] h-[380px]">
          <div className="block w-full h-full bg-cover bg-center bg-hero-2 rounded-lg">
            <div className="flex flex-col justify-around h-full p-[20px]">
              <h1 className="text-md">Step</h1>
              <h1 className="text-xl">Submid the form and wait approve</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[60px] mb-[20px] text-center text-md px-[200px]">
        Emoji Swap will launch on Web3 Decentralized, it allows users to use to
        exchange any token. The utility brought will be optimal for the project
        when it is allowed to customize the percentage of burn by token on each
        transaction made on Emoji Swap.
      </div>

      {/* des */}
      <div className="flex justify-center">
        <div className="felx justify-center items-center text-center text-xl px-3 text-green">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h1 className="text-xl mr-2 font-extrabold">0,2% fee burning</h1>
        <h1 className="text-xl">your supply while trading</h1>
      </div>
    </div>
  );
}

export default Step;
