function GetEmoji() {
  return (
    <div className="max-w-full bg-hero-3 mx-auto h-full block px-[100px] sm:px-[0.9375rem] py-[16.875rem] sm:py-[6.125rem] bg-cover bg-no-repeat bg-[length:100%_100%] scroll-smooth  after-content=[''] after:absolute after:w-full after:h-[25rem] after:bg-green after:left-0 after:right-0 after:-z-10">
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

      <div className="flex justify-center items-stretch my-[40px] sm:my-[0] gap-3 sm:flex-col max-w-full relative">
        <div className="p-[40px] sm:p-[10px] flex-[0_0_50%] sm:flex-[0_0_100%]  sm:max-w-full">
          <div className="bg-white rounded-lg overflow-hidden w-full drop-shadow-3xl">
            <div className="bg-hero-4 bg-center-center bg-no-repeat bg-cover bg-[length:100%_100%] w-full">
              <div className="h-[300px] flex mt-[20px] px-[30px] items-center flex-col">
                <h1 className="text-3xl font-wonderland">CONTRACT</h1>
                <div className="w-full text-sm font-wonderland text-red text-center break-words">
                  0x95f9882E505A6fb95547EcD35CbdB10B7786Db81
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[40px] sm:p-[10px] flex-[0_0_50%] sm:flex-[0_0_100%] max-w-1/2 sm:max-w-full flex flex-col justify-between gap-[1.25rem]">
          <div className="text-center px-[20px] py-[40px] border-[4px] border-black bg-white rounded-lg overflow-hidden drop-shadow-3xl block">
            <div className="text-3xl font-wonderland text-red leading-[1.5rem]">
              1.000.000.000
            </div>
            <div className="text-xl font-wonderland leading-[1.5rem] mt-3">
              supply
            </div>
          </div>

          <div className="text-center px-[20px] py-[40px] border-[4px] border-black bg-white rounded-lg overflow-hidden drop-shadow-3xl block">
            <div className="text-3xl font-wonderland text-red leading-[1.5rem]">
              3/3
            </div>
            <div className="text-xl font-wonderland leading-[1.5rem]  mt-3">
              tax
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetEmoji;
