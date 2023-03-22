import React from "react";

const Specialist = () => {
  return (
    <>
      <div class="text-center">
        <h1>We Have The Best Specialist</h1>
        <h3>We have a wide experience in experience design and strategy,</h3>
        <h3>with locally-rooted knowledge.</h3>
      </div>
      {/* Card Part */}
      <div class="flex justify-around">
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="bg-blue-300 shadow-lg rounded-lg w-96 h-5/7 ">
            <div class="h-full p-6">
              {/* <!-- Top part of the card with 70% height --> */}
            </div>
            <div class="h-3/7 bg-gray-200  items-center justify-center">
              {/* <!-- Bottom part of the card with 30% height --> */}
              <div class="text-gray-700 text-base flex justify-start mx-10">
                Dr. Awaatif Ali
              </div>
              <p class="text-gray-700 text-base mx-10 mt-3">Dental Care</p>
            </div>
          </div>
        </div>
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="bg-blue-300 shadow-lg rounded-lg w-96 h-5/7 ">
            <div class="h-full p-6">
              {/* <!-- Top part of the card with 70% height --> */}
            </div>
            <div class="h-3/7 bg-gray-200 items-center justify-center">
              {/* <!-- Bottom part of the card with 30% height --> */}
              <p class="text-gray-700 text-base  mx-10">Dr. Filipa Gaspar</p>
              <p class="text-gray-700 text-base mt-3 mx-10">Cardiology</p>
            </div>
          </div>
        </div>
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="bg-blue-300 shadow-lg rounded-lg w-96 h-5/7 ">
            <div class="h-full p-6">
              {/* <!-- Top part of the card with 70% height --> */}
            </div>
            <div class="h-3/7 bg-gray-200  items-center justify-center">
              {/* <!-- Bottom part of the card with 30% height --> */}
              <p class="text-gray-700 text-base  mx-10">Dr. Suckmeet Gorae</p>
              <p class="text-gray-700 text-base mt-3 mx-10">Neurological</p>
            </div>
          </div>
        </div>
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="bg-blue-300 shadow-lg rounded-lg w-96 h-5/7 ">
            <div class="h-full p-6">
              {/* <!-- Top part of the card with 70% height --> */}
            </div>
            <div class="h-3/7 bg-gray-200  items-center justify-center">
              {/* <!-- Bottom part of the card with 30% height --> */}
              <p class="text-gray-700 text-base mx-10">Dr. Siri Jakobsson</p>
              <p class="text-gray-700 text-base mt-3 mx-10">Prediatrics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialist;
