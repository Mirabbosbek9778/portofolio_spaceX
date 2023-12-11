import React from "react";
import { RxGithubLogo } from "react-icons/rx";

import { FaYoutube, FaTelegram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTelegram />
              <span className="text-[15px] ml-[6px]">Telegram</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTwitter />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                mirabbosabduvohidov1@gmail.com
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+998 95 058 71 99</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Mirabbosbek Abduvohidov
        </div>
      </div>
    </div>
  );
};

export default Footer;
