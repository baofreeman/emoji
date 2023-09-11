import { useRef, useState } from "react";

function Plans() {
  const [isHovered, setIshovered] = useState(false);
  const handleMouseEnter = () => {
    setIshovered(true);
  };

  const handleMouseLeave = () => {
    setIshovered(false);
  };
  return (
    <div className="max-w-full h-[600px] my-auto mt-[-1.25rem] flex justify-center items-center flex-col relative bg-blue clip-path-style z-1">
      <h1 className="text-center pt-[20px] mx-auto font-wonderland text-5xl text-green drop-shadow-3xl">
        UPCOMING PLANS
      </h1>
      <div className="flex flex-row items-center justify-center gap-6 mt-[40px] px-[100px] py-[50px]">
        <div className="flex p-[100px] border-[3px] shadow-2xl rounded-md justify-center max-w-[380px] h-full items-center cursor-pointer bg-white relative drop-shadow-3xl">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex absolute justify-center items-center cursor-pointer w-full h-full t-0 b-0"
          >
            {!isHovered ? (
              <h1 className="text-xl font-wonderland">Phase 1</h1>
            ) : (
              <ul className="list-disc">
                <li>step</li>
                <li>step</li>
                <li>step</li>
                <li>step</li>
              </ul>
            )}
          </div>
        </div>

        <div className="flex p-[100px] border-[3px] shadow-2xl rounded-md justify-center max-w-[380px] h-full items-center cursor-pointer bg-white relative drop-shadow-3xl">
          <div className="flex absolute justify-center items-center cursor-pointer w-full h-full t-0 b-0">
            <h1 className="text-xl font-wonderland">Phase 1</h1>
          </div>
        </div>

        <div className="flex p-[100px] border-[3px] shadow-2xl rounded-md justify-center max-w-[380px] h-full items-center cursor-pointer bg-white relative drop-shadow-3xl">
          <div className="flex absolute justify-center items-center cursor-pointer w-full h-full t-0 b-0">
            <h1 className="text-xl font-wonderland">Phase 1</h1>
          </div>
        </div>

        <div className="flex p-[100px] border-[3px] shadow-2xl rounded-md justify-center max-w-[380px] h-full items-center cursor-pointer bg-white relative drop-shadow-3xl">
          <div className="flex absolute justify-center items-center cursor-pointer w-full h-full t-0 b-0">
            <h1 className="text-xl font-wonderland">Phase 1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
