import React from "react";

const Header = () => {
  return (
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h3 class="text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Welcome to MediaCare+ Clinic
            </h3>
            <h1 class="text-3xl font-bold leading-tight text-indigo-700 dark:text-white text-6xl mt-5">
              Best Specialists
            </h1>
            <p class="mt-5 md: text-base text-gray-600 dark:text-gray-300">
              We are on the leading edge of cancer care. Providing the full
            </p>
            <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
              continuum of cancer treatments and supportive care services in
            </p>
            <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
              a single convinent location.
            </p>
            {/* Buttons */}
            <div class="space-x-2 mt-6">
              <button class="rounded-md bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                Make an Appointment
              </button>
              <button class="rounded-md bg-white-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-blue hover:bg-indigo-500">
                Departments
              </button>
            </div>
          </div>
        </div>
        {/* Right side component */}
        <div class="max-w-4xl mx-auto my-4 md:my-6">
          <div class="overflow-hidden shadow rounded-xl">
            <div class="grid grid-cols-1 md:grid-cols-1">
              <div class="px-80 py-60 bg-blue-100 dark:bg-gray-500 dark:text-gray-900 md:px-60 md:py-60">
                <div class="flow-root">
                  <ul>
                    <li class="flex items-stretch justify-between space-x-5 py-7">
                      <div class="flex items-stretch flex-1">
                        <div class="flex flex-col justify-between ml-5">
                          <p class="mt-4 text-sm font-medium"></p>
                        </div>
                      </div>
                    </li>
                    <li class="flex items-stretch justify-between space-x-5 py-7">
                      <div class="flex items-stretch flex-1"></div>
                    </li>
                    <li class="flex items-stretch justify-between space-x-5 py-7">
                      <div class="flex items-stretch flex-1">
                        <div class="flex flex-col justify-between ml-5">
                          <p class="mt-4 text-sm font-medium"></p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <hr class="mt-6 border-gray-200" /> */}
                <form action="#" class="mt-6">
                  <div class="sm:flex sm:space-x-2.5 md:flex-col lg:flex-row md:space-x-0 lg:space-x-2.5"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
