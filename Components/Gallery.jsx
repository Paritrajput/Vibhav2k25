import Bg1 from "../public/Assets/Homepage/t1.webp";
import Bg2 from "../public/Assets/Homepage/t2.webp";
import Bg3 from "../public/Assets/Homepage/t3.webp";
import Bg4 from "../public/Assets/Homepage/t4.webp";
import Bg5 from "../public/Assets/Homepage/t5.webp";
import Bg6 from "../public/Assets/Homepage/t6.webp";
import Bg7 from "../public/Assets/Homepage/t7.webp";
import Bg8 from "../public/Assets/Homepage/t8.webp";
import Bg9 from "../public/Assets/Homepage/t9.webp";
import { Fade } from "react-awesome-reveal";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const usersData1 = [
  { name: ".", background: Bg1 },
  { name: ".", background: Bg2 },
  { name: ".", background: Bg3 },
  { name: ".", background: Bg4 },
  { name: ".", background: Bg5 },
];
const usersData2 = [
  { name: ".", background: Bg6 },
  { name: ".", background: Bg7 },
  { name: ".", background: Bg8 },
  { name: ".", background: Bg9 },
  { name: ".", background: Bg1 },
];

function UserCard(props) {
  const { user } = props;
  return (
    <div
      className="flex h-[250px] w-[250px] flex-col items-center rounded-[31px] p-10 sm:h-[300px] sm:w-[400px] "
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${user.background.src}),linear-gradient(138deg,rgba(116,202,255,.8),#f46692 58%,#ffe16a)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

function Row1() {
  const { ref } = useParallax({
    translateX: ["-50%", "0%"],
  });

  return (
    <div
      ref={ref}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {usersData1.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

function Row2() {
  const { ref } = useParallax({
    translateX: ["0", "-50%"],
  });

  return (
    <div
      ref={ref}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {usersData2.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="bg-black py-20 bg-opacity-25">
      <div className="flex flex-col gap-28 overflow-hidden text-gray-200">
        <div className="mx-auto">
          <Fade>
            <div className="flex flex-col place-items-center gap-4 text-center">
              <h2 className="w-full max-w-6xl font-[poppins] text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-clip-text  text-gray-200">
                REFLECTING ON THE JOURNEY
              </h2>

              <p className="w-full max-w-lg px-2 text-lg md:max-w-xl">
                A glimpse into our team's past adventures, memories that shape
                our present.
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex rotate-6 transform flex-col gap-4 py-24 -mt-24 md:mt-0">
          <ParallaxProvider>
            <Row1 />
            <Row2 />
          </ParallaxProvider>
        </div>
      </div>
    </div>
  );
}
