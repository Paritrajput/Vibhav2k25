import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Card({ card }) {
  const [readMoreState, setReadMoreState] = useState(100);
  return (
    <>
      <div className="m-10 hover:border-4 hover:border-[#FF004D]  font-lexend w-80 bg-[#ede7dd] shadow-md rounded-lg overflow-hidden p-5 transition duration-150 ease-in transform hover:-translate-y-2 hover:shadow-lg">
        <div className="overflow-hidden rounded-lg">
          <img
            src={card.images}
            alt="image"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="text-2xl font-mono mt-4 text-right">{card.name}</div>
        <div className="mt-4">
          {card.github === "" ? (
            <div>
              {card.content.length > 140 ? (
                <p className="text-lg font-semibold text-justify text-gray-600">
                  {readMoreState === 140
                    ? card.content
                    : `${card.content.substring(0, 140)}...`}
                  <span
                    className="text-gray-800 cursor-pointer"
                    onClick={() =>
                      setReadMoreState((prev) => (prev === 140 ? 2000 : 140))
                    }
                  >
                    {readMoreState === 140 ? " Less" : " More"}
                  </span>
                </p>
              ) : (
                <p className="text-lg font-semibold text-justify text-gray-300">
                  {card.content}
                </p>
              )}
              <div className="h-[54px]"></div>
            </div>
          ) : (
            <div>
              {card.content.length > 140 ? (
                <p className="text-lg font-semibold text-justify text-gray-700">
                  {readMoreState === 140
                    ? card.content
                    : `${card.content.substring(0, 140)}...`}
                  <span
                    className="text-gray-800 cursor-pointer"
                    onClick={() =>
                      setReadMoreState((prev) => (prev === 140 ? 2000 : 140))
                    }
                  >
                    {readMoreState === 140 ? " Less" : " More"}
                  </span>
                </p>
              ) : (
                <p className="text-lg font-semibold text-justify text-gray-700">
                  {card.content}
                </p>
              )}
              <Link
                href={card.github}
                target="_blank"
                className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaGithub className="m-1" size={20} />
                Github
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
