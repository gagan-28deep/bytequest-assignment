import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
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
        <div class="flex md:text-left text-center md:justify-between justify-center items-center"></div>
        <div class="my-10">
          <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <FontAwesomeIcon class="w-10 h-10" icon={faTooth} />
              <div class="font-bold mt-4 text-center">Dental Care</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              
              <div class="font-bold mt-4 text-center">Fashion</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img
                class="h-20 w-20"
                src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/69c6589653afdb9a.png"
                alt="Electronics"
              />
              <div class="font-bold mt-4 text-center">Electronics</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img
                class="h-20 w-20"
                src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/ab7e2b022a4587dd.jpg"
                alt="Home"
              />
              <div class="font-bold mt-4 text-center">Home</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img
                class="h-20 w-20"
                src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/0ff199d1bd27eb98.png"
                alt="Appliances"
              />
              <div class="font-bold mt-4 text-center">Appliances</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img
                class="h-20 w-20"
                src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/71050627a56b4693.png"
                alt="Travel"
              />
              <div class="font-bold mt-4 text-center">Travel</div>
            </a>
            <a
              class="bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              href=""
            >
              <img
                class="h-20 w-20"
                src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/dff3f7adcf3a90c6.png"
                alt="Beauty, Toys &amp; More"
              />
              <div class="font-bold mt-4 text-center">
                Beauty, Toys &amp; More
              </div>
            </a>
          </div>
        </div>
        <div class="md:hidden flex items-center justify-center mt-8 font-medium uppercase text-gray-500">
          All Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="ml-1 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;
