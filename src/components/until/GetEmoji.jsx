function GetEmoji() {
  return (
    <div className="max-w-full bg-hero-3 mx-auto h-full px-[100px] py-[200px] bg-cover z-1">
      <div className="flex justify-center items-center min-w-full relative">
        <div className="w-[500px]">
          <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGetEmojiTitle.834ee90d.png&w=1920&q=75" />
        </div>
        <div className="absolute top-[2px] right-[50px]">
          <div className="w-[180px]">
            <img src="https://www.emojibsc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGetEmojiImg.94986299.png&w=1080&q=75" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[400px] my-[40px] gap-3">
        <div className="p-[40px] basis-6/12">
          <div className="bg-white w-full rounded-lg overflow-hidden drop-shadow-3xl">
            <div className="bg-hero-4 bg-no-repeat bg-cover w-full">
              <div className="h-[300px] flex justify-start mt-[20px] px-[30px] items-center flex-col">
                <h1 className="text-3xl font-wonderland">CONTRACT</h1>
                <p className="inline-block text-sm font-wonderland text-red">
                  0x95f9882E505A6fb95547EcD35CbdB10B7786Db81
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full p-[40px] basis-6/12">
          <div className="flex flex-col gap-3 justify-between items-stretch h-full w-full">
            <div className="flex flex-col w-full px-[20px] py-[40px] justify-center items-center bg-white rounded-lg overflow-hidden drop-shadow-3xl">
              <h1 className="text-3xl font-wonderland text-red">
                1.000.000.000
              </h1>
              <p className="text-sm font-wonderland">supply</p>
            </div>

            <div className="flex flex-col w-full px-[20px] py-[40px] justify-center items-center bg-white rounded-lg overflow-hidden drop-shadow-3xl">
              <h1 className="text-3xl font-wonderland text-red">3/3</h1>
              <p className="text-sm font-wonderland">tax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetEmoji;
