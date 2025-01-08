"use client";
import { useState } from "react";
import saveIcon from "@/images/save.png";
import Image from "next/image";
import SecondPostCardImg from "./secondPostCardImg";

const SecondPostCard = () => {
  const [like, setLike] = useState<number>(0);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xs container bg-white rounded-xl shadow-2xl transform">
        <div>
          <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
            Lampara Look
          </h1>
          <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
            #by Saca Tuerca
          </p>
        </div>
        <SecondPostCardImg
          setLike={setLike}
          src="https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <div className="flex p-4 justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer hover:scale-125"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{like}</span>
            </div>
            {/* <img
              className="w-10 rounded-full"
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
              alt="sara"
            />
            <h2 className="text-gray-800 font-bold cursor-pointer">
              Felipe Sacudon
            </h2> */}
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center cursor-pointer">
              <span>
                <Image
                  className="transition duration-100 hover:scale-125"
                  src={saveIcon}
                  width={15}
                  height={15}
                  alt="save post"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPostCard;
