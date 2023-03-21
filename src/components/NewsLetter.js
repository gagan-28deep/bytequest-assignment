import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div class="bg-blue-600  flex-col lg:flex-row items-center lg:p-16">
        <h1 class="text-center text-white text-5xl">Subscribe to Newsletter</h1>
        <h3 class="text-center text-white text-2xl mt-7">
          W have a wide experinece in experience design and strategy,
        </h3>
        {/* Email Input */}
        <div class="flex w-full max-w-sm justify-center items-center space-x-2 mt-36">
          <input
            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="email"
            placeholder="Email"
          />
          <button class="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
