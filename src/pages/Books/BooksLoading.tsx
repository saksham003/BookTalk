import React from "react";

function loading() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 sm:py-10 mx-auto">
        <div className=" lg:w-4/5 mt-1 mx-auto flex flex-wrap justify-center">
          <div className="animate-pulse flex justify-center sm:mt-6 items-center w-40 h-56 sm:h-72 bg-gray-100 rounded sm:w-52 ">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="animate-pulse lg:w-1/2 mt-10 w-full lg:pl-10 lg:py-6 lg:mt-0">
            <div className="h-4 bg-gray-200 rounded-full w-64 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded-full w-48 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded-full w-36 mb-8"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[220px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default loading;
