import AdviceCard from "../components/adviceme";
import React from "react";
import logo from "./pattern-divider-desktop.svg";
import newmobile from "./pattern-divider-mobile.svg";
import MainBtn from "../components/newbutton";

function QuoteBox() {
  return (
    <div>
      {/* // for responsiveness, I imported Advice Card to go along with the Svgs to contain them all together for mobile look.
      // 375 px from ReadMe Instructions  */}
      <div className="text-center w-[100%] mx-auto my-auto rounded-tr-lg rounded-tl-lg lg:max-w-[375px]">
        <AdviceCard />
        <img
          src={logo}
          alt="logo"
          className="w-full bg-[rgba(49,58,73,255)] pb-20 rounded-br-lg rounded-bl-lg min-[320px]:max-md:hidden lg:relative"
        />

        <img
          src={newmobile}
          alt="newmobile"
          className="w-full bg-[rgba(49,58,73,255)] pb-20 rounded-br-lg rounded-bl-lg md:hidden"
        />
      </div>

      <MainBtn/>
    </div>
  );
}

export default QuoteBox;
