import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
function TeamCardnew({ data, cardType }) {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-wrap w-80 ">
        <div className="w-full px-4">
          <div className="relative bg-gray-900  shadow-lg rounded-lg overflow-hidden  ">
            <div className=" h-70 overflow-hidden ">
              <img
                alt={data.Name}
                src={data.Profile}
                className="w-full h-full object-cover object-center"
              />
              
            </div>
            {/* <div className=" absolute bottom-0 left-1/2 top-40 transform -translate-x-1/2 -translate-y-2/3">
              <img
                alt={data.Name}
                src={data.Profile}
                className="w-32 h-32 rounded-full border-2 border-white shadow-lg"
              />
            </div> */}

            <div className="py-4 px-6 relative z-10 ">
              <br />

              <h2 className="text-xl font-semibold mb-1 text-center text-white">
                {data.Name}
              </h2>
              <small className="block mb-3 text-center text-white">
                {data.Position}
              </small>
              <div className="flex flex-row justify-center ">
                {cardType === "team" ? (
                  <Link href={data.Github} target={"_blank"}>
                    <div className="rounded-full cursor-pointer p-2 mr-2 bg-[#eae4d8] bg-opacity-50 hover:bg-[#ffffff] hover:scale-105">
                      <FiGithub className="w-6 h-6 " />
                    </div>
                  </Link>
                ) : undefined}

                <Link href={data.LinkedIn} target={"_blank"}>
                  <div className="rounded-full cursor-pointer p-2 mr-2 bg-[#eae4d8] bg-opacity-50 hover:bg-[#ffffff] hover:scale-105">
                    <FiLinkedin className="w-6 h-6 " />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCardnew;
