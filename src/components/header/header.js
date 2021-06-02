import React from "react";
import MyImage from "../../Assets/img385.png";
import styled from "styled-components";

const Activespan = styled.span`
    position: relative;
    right: 5px;
    border: 4px solid #361736;
    width: 17px;
    top: 14px;
    height: 17px;
    background: green;
    border-radius: 10px;
}`;

function Header() {
  return (
    <div className="bg-slack px-5 py-2">
      <div className="justify-center items-center flex space-x-4 text-gray-400">
        <div className="flex w-36" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-iconcolor"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="px-4 w-2/4 relative left-1 bg-slack rounded-md flex space-x-2 border border-border">
          <input
            className="w-full h-6 bg-slack text-sm outline-none placeholder-placeholder"
            placeholder="Search Thisaiveerapandian"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-iconcolor pt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-iconcolor"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex flex-grow" />
        <div className="flex relative left-5">
          <img className="rounded-md w-8 h-8" src={MyImage} alt="owner" />
          <Activespan />
        </div>
      </div>
    </div>
  );
}

export default Header;
