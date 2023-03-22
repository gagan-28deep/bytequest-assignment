import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import Pulmonay from "./download.png";
import Neurological from "./4006051.png";
const Services = () => {
  return (
    <div class="mt-5">
      <h2 class="text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
        Our Services
      </h2>
      <p class="text-center mt-4">
        We provide the most full medical services, so every person could
      </p>
      <p class="text-center">
        heave the opportunity to recieve qualitative medical help.
      </p>
      {/* Cards/Icons */}
      <div class="max-w-6xl px-4 mx-auto py-4 md:py-6 dark:text-gray-300 dark:bg-gray-900">
        <div class="my-10 flex md:text-left text-center md:justify-between justify-between items-center">
          <div class="grid gap-20 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <FontAwesomeIcon class="w-10 h-10" icon={faTooth} />
              <div class="font-bold mt-4 text-center">Dental Care</div>
            </a>
            <a
              class="bg-blue-500  rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img src={Pulmonay} alt="" />
              <div class="font-bold mt-4 text-white text-center">Pulmonary</div>
              <div class = "text-white" >Learn More</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img class="h-20 w-20" src={Neurological} alt="Electronics" />
              <div class="font-bold mt-4 text-center">Neurological</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img class="h-20 w-20" src={Neurological} alt="Home" />
              <div class="font-bold mt-4 text-center">Prediatrics</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
