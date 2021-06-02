import React from "react";
import SideMenuDirectMessages from "./directmessages";
import SideMenuActions from "./menuactions";
import SideMenuApp from "./menuapp";
import SideMenuChannels from "./menuchannels";

function Sidebar() {
  return (
    <div className="flex flex-col w-56 h-full overflow-hidden">
      <div className="bg-slack py-3 px-4 flex border-t h-16 border-b border-bordercolor justify-between">
        <div className="flex flex-auto items-center">
          <h1 className="font-semibold text-white text-base leading-tight truncate">
            Pandian
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-white text-black rounded-full p-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#350d36"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="bg-slack text-sm flex-grow overflow-auto space-y-4">
        <SideMenuActions />
        <SideMenuChannels />
        <SideMenuDirectMessages />
        <SideMenuApp />
      </div>
    </div>
  );
}

export default Sidebar;
