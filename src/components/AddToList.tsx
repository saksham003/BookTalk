import React, { useState } from "react";
import { IoIosArrowDown, IoIosAdd } from "react-icons/io";

const AddToList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const lists = ["Read", "Currently Reading"];
  return (
    <div className="w-44 sm:w-48">
      <div className="relative mt-1">
        <div className="relative w-full flex text-left bg-white rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <button className="w-full hover:bg-gray-50 hover:text-gray-700 py-3 pl-3 pr-3 flex items-center">
            <span className="block ml-3 truncate">Want to Read</span>
          </button>
          <button
            className="inset-y-0 right-0 flex items-center px-3 hover:bg-gray-50 hover:text-gray-700"
            onClick={toggleMenu}
          >
            <span
              className={`ml-auto transition duration-300 shrink-0 ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown className="w-4 h-4" />
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
            <ul className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {lists.map((name) => (
                <li className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-gray-50 hover:text-gray-700 pr-9">
                  <div className="flex items-center">
                    <span className="block ml-3 font-normal truncate">
                      {name}
                    </span>
                  </div>
                </li>
              ))}
              <li className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-gray-50 hover:text-gray-700 pr-3">
                <div className="flex items-center">
                  <span className="flex justify-between ml-3 font-normal truncate w-full h-full items-center">
                    Add Shelf <IoIosAdd className="w-5 h-5" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToList;
