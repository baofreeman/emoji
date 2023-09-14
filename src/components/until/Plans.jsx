import { useRef, useState } from "react";

function Plans() {
  const data = [
    {
      Phase1: {
        name: "Phase 1",
        des1: "0",
        des2: "1",
      },
    },

    {
      name: "Phase 2",
      des1: "2",
      des2: "3",
    },

    {
      name: "Phase 3",
      des1: "4",
      des2: "5",
    },

    {
      name: "Phase 4",
      des1: "6",
      des2: "7",
    },
  ];

  return (
    <div className="max-w-full my-auto mt-[-1.25rem] px-[100px] pb-[100px] sm:px-[12px] flex justify-center items-center flex-col sm:block relative bg-blue clip-path-style sm:clip-path-style-sm z-1">
      <h1 className="text-center pt-[20px] mx-auto font-wonderland text-5xl text-green drop-shadow-3xl">
        UPCOMING PLANS
      </h1>
      <div className="flex max-w-full justify-center gap-[1.25rem] mb-[6.25rem] sm:flex-col">
        <div className="w-full flex items-center justify-center sm:w-full sm:max-w-[26rem] sm:min-h-[15rem] min-h-[21.75rem] border-2 border-solid border-black rounded-md drop-shadow-3xl bg-white py-[2.375rem] px-[1.5625rem] relative overflow-hidden">
          <div className="flex items-center justify-center cursor-pointer bg-white w-full h-full top-0 left-0">
            <h1 className="text-3xl font-wonderland leading-[1.3rem]">
              PHASE 1
            </h1>
          </div>
          <ul className="hidden">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-center sm:w-full sm:max-w-[26rem] sm:min-h-[15rem] min-h-[21.75rem] border-2 border-solid border-black rounded-md drop-shadow-3xl bg-white py-[2.375rem] px-[1.5625rem] relative overflow-hidden">
          <div className="flex items-center justify-center cursor-pointer bg-white w-full h-full top-0 left-0">
            <h1 className="text-3xl font-wonderland leading-[1.3rem]">
              PHASE 1
            </h1>
          </div>
          <ul className="hidden">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-center sm:w-full sm:max-w-[26rem] sm:min-h-[15rem] min-h-[21.75rem] border-2 border-solid border-black rounded-md drop-shadow-3xl bg-white py-[2.375rem] px-[1.5625rem] relative overflow-hidden">
          <div className="flex items-center justify-center cursor-pointer bg-white w-full h-full top-0 left-0">
            <h1 className="text-3xl font-wonderland leading-[1.3rem]">
              PHASE 1
            </h1>
          </div>
          <ul className="hidden">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-center sm:w-full sm:max-w-[26rem] sm:min-h-[15rem] min-h-[21.75rem] border-2 border-solid border-black rounded-md drop-shadow-3xl bg-white py-[2.375rem] px-[1.5625rem] relative overflow-hidden">
          <div className="flex items-center justify-center cursor-pointer bg-white w-full h-full top-0 left-0">
            <h1 className="text-3xl font-wonderland leading-[1.3rem]">
              PHASE 1
            </h1>
          </div>
          <ul className="hidden">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Plans;
