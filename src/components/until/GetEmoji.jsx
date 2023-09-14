function GetEmoji() {
  return (
    <div className="max-w-full bg-hero-3 mx-auto h-full px-[100px] sm:px-[0.9375rem] py-[200px] sm:py-[6.125rem] bg-cover z-1">
      <div className="flex justify-center items-center min-w-full relative">
        <div className="w-[500px] sm:w-[300px]">
          <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGetEmojiTitle.834ee90d.png&w=1920&q=75" />
        </div>
        <div className="absolute top-[2px] right-[50px] hidden">
          <div className="w-[180px]">
            <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGetEmojiImg.94986299.png&w=1080&q=75" />
          </div>
        </div>
      </div>

      <div className="flex justify-start items-stretch flex-wrap my-[40px] sm:my-[0] gap-3 sm:flex-col">
        <div className="p-[40px] flex-[0_0_50%] max-w-1/2">
          <div className="bg-white rounded-lg overflow-hidden drop-shadow-3xl">
            <div className="bg-hero-4 bg-center-center bg-no-repeat bg-cover w-full block">
              <div className="h-[300px] flex justify-start mt-[20px] px-[30px] items-center flex-col">
                <h1 className="text-3xl font-wonderland">CONTRACT</h1>
                <p className="inline-block text-sm font-wonderland text-red">
                  0x95f9882E505A6fb95547EcD35CbdB10B7786Db81
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[40px] flex-[0_0_50%] max-w-1/2 flex flex-col justify-between gap-[1.25rem]">
          <div className="text-center px-[20px] py-[40px] border-[4px] border-black bg-white rounded-lg overflow-hidden drop-shadow-3xl block">
            <div className="text-3xl font-wonderland text-red leading-[1.5rem]">
              1.000.000.000
            </div>
            <div className="text-3xl font-wonderland text-red leading-[1.5rem]">
              supply
            </div>
          </div>

          <div className="text-center px-[20px] py-[40px] border-[4px] border-black bg-white rounded-lg overflow-hidden drop-shadow-3xl block">
            <div className="text-3xl font-wonderland text-red leading-[1.5rem]">
              3/3
            </div>
            <div className="text-3xl font-wonderland text-red leading-[1.5rem]">
              tax
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetEmoji;
