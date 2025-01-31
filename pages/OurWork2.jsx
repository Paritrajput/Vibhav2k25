import React, { useState } from "react";
import ourwork from "../data/ourwork.json";

export default function OurWork2({ id }) {
  const [cardState, setCarState] = useState(0);
  const tabs = { prev: "Previous Years", curr: "Current Year" };
  return (
    <div className="flex justify-center flex-col">
      <div className="text-[#dab971] animate-pulse justify-center flex mt-12 mb-8 font-[Azonix] text-5xl">
        {tabs[id]}
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-col-1 justify-center">
        {ourwork[tabs[id]]?.map((card, ind) => {
          return (
            <div key={ind} className="justify-center ">
              <OurWorkCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
