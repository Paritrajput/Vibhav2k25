import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MdOutlineDownloadDone } from "react-icons/md";
export default function Contact({}) {
  const [state, setState] = useState({
    formSubmitted: false,
  });

  const [secondFormState, handleSubmitSecondForm] = useForm("xzbqvrrv");

  const handleSecondFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmitSecondForm(e);
      setState({ formSubmitted: true });
      setTimeout(() => {
        setState({ formSubmitted: false });
      }, 4000); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {state.formSubmitted ? (
        <div className="relative mt-24 overflow-x-hidden rounded-2xl flex pt-8 md:mt-12 md:bg-[#1a1a1d] md:bg-opacity-50 md:flex-row flex-col justify-around w-4/5 mx-auto">
          <div className="py-4 mb-12 lg:py-16 rounded-xl md:bg-transparent bg-[#1a1a1d] z-10 bg-opacity-50 max-w-screen-md basis-1/2 md:w-12 ">
            <h2 className="text-[#e9d59ae4]  text-4xl mb-12 tracking-tight font-[poppins] font-extrabold text-center dark:text-white">
              Contact Us
            </h2>
            <div className="flex items-center justify-center w-full text-xl text-sky-100 ">
              <div className="flex p-2 pl-8 pr-8 m-3 bg-gray-700 rounded-xl ">
                <MdOutlineDownloadDone className="w-8 h-8 mr-1 text-blue-400 " />
                Thanks for Messaging
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="z-10 flex mt-12">
          <div className="relative overflow-x-hidden rounded-2xl flex pt-8 mt-20 my-20 rounded-[20px] p-8 bg-gray-900 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)] md:flex-row flex-col justify-around w-4/5 mx-auto ">
            <div className=" lg:py-16  mb-12  rounded-xl mt-4 lg:px-6 lg:bg-gray-800 z-10 bg-opacity-50  max-w-screen-md basis-1/2 lg:w-12">
              <h2 className="mb-4 text-[#e9d59ae4]  text-4xl tracking-tight font-[poppins] font-extrabold text-center dark:text-[#e9d59ae4]">
                Contact Us
              </h2>
              <form onSubmit={handleSecondFormSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className=" mb-2 font-[Hero-Bold] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    name="email"
                    required
                  />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={secondFormState.errors}
                />
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-[Hero-Bold] font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <div className="sm:col-span-2 ">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-[Hero-bold] font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  ></textarea>
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={secondFormState.errors}
                />
                <button
                  type="submit"
                  name="Submit Contact us Form"
                  className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={secondFormState.submitting}
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
