import { GlobeAltIcon, LinkIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <GlobeAltIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div key="1" className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <LinkIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                <a href="https://github.com/DimaAlabsi">GitHub</a>
              </span>
            </div>
          </div>
          <div key="2" className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <LinkIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
              <a href="https://www.linkedin.com/in/dima-alabsi8/">LinkedIn</a>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}