import { Capture, Emoji, GetEmoji, Plans, Step } from "./until";
import { Footer } from "./index";

function Content() {
  return (
    <div className="scroll-smooth relative m-auto w-full">
      {/* Emoji */}
      <Emoji />

      {/* Capture */}
      <Capture />

      {/* Plans*/}
      <Plans />

      {/* Step */}
      <Step />

      {/* Get Emoji */}
      <GetEmoji />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Content;
