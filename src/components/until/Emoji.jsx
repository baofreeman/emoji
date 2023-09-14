function Emoji() {
  return (
    <div className="max-w-full relative bg-blue px-[220px] pt-[220px] sm:px-[10px] sm:pt-[110px]">
      <div className="absolute right-[90px] top-[260px] max-w-[200px] sm:max-w-[60px] sm:max-w-[120px]">
        <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroEmoji.b518ae42.png&w=3840&q=75" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-7">
        <img
          className=""
          src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroText.f789580f.png&w=3840&q=75"
        />
        <h1 className="text-3xl sm:text-sm text-yellow font-wonderland text-center">
          The meme coin of the digital era
        </h1>
        <button className="px-4 py-2 bg-white border-[3px] rounded-[20px] shadow-2xl cursor-pointer text-xl font-wonderland drop-shadow-3xl hover:text-yellow hover:border-yellow hover:drop-shadow-2xl">
          PRESALE
        </button>
      </div>
      <div className="mx-auto mt-4 sm:hidden">
        <div className="flex mx-auto justify-end w-full px-[200px]">
          <div className="w-[160px]">
            <img src="https://www.emojibsc.com/_next/image?url=%2FHeroEmojiSmile.gif&w=3840&q=75" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-60px] sm:bottom-[-10px] sm:relative flex justify-center items-center">
        <div className="w-[300px] sm:w-[250px]">
          <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroEmoji2.a943d8fe.png&w=3840&q=75" />
        </div>
      </div>
    </div>
  );
}

export default Emoji;
