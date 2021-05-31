import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import MyImage from "../Assets/img385.png";
import styled from "styled-components";

const Activespan = styled.span`
  position: relative;
  right: 6px;
  border: 2px solid #361736;
  width: 11px;
  top: 12px;
  height: 11px;
  background: green;
  border-radius: 10px;
}`;

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

function SideMenuActions() {
  const [showMenu, setshowMenu] = useState(false);
  const container = useRef(null);

  const handleClick = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!showMenu) return;
        setshowMenu(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [showMenu, container]);

  return (
    <div className="py-2">
      <SideMenuAction
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        }
        text="Threads"
        to="Threads"
      />
      <div
        ref={container}
        onClick={handleClick}
        className="flex items-center py-0.5 pl-3 pb-1 pb-1 pt-1 mt-2 space-x-4 cursor-pointer"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="18px"
          className="text-sidebartextcolor"
          height="18px"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
        <span className="text-sidebartextcolor">Menu</span>
      </div>
      {showMenu && (
        <div
          className="origin-top-right z-10 absolute left-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-5 mt-2 cursor-pointer text-menucolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <span
                className="text-menucolor block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-0"
                id="menu-item-0"
              >
                All unreads
              </span>
            </div>
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-5 mt-2 cursor-pointer text-menucolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span
                className="text-menucolor block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-0"
                id="menu-item-0"
              >
                All DMs
              </span>
            </div>
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-5 mt-2 cursor-pointer text-menucolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <span
                className="text-menucolor block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-0"
                id="menu-item-0"
              >
                Mentions {"&"} reactions
              </span>
            </div>
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-5 mt-2 cursor-pointer text-menucolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <span
                className="text-menucolor block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-0"
                id="menu-item-0"
              >
                Saved items
              </span>
            </div>
            <div className="grid grid-cols-1 mt-2 mb-2 divide-y divide-menuitemborder">
              <div></div>
              <div></div>
            </div>
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-5 mt-2 cursor-pointer text-menucolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                />
              </svg>
              <span
                className="text-menucolor block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-0"
                id="menu-item-0"
              >
                File browser
              </span>
            </div>
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-5 mt-2 cursor-pointer text-menucolor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span
                className="text-menucolor block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-0"
                id="menu-item-0"
              >
                Apps
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SideMenuAction({ icon, text, to }) {
  return (
    <NavLink
      activeClassName="bg-activeTab font-semibold text-white"
      className="flex items-center text-sidebartextcolor py-0.5 pl-3 pb-1 pt-1 space-x-4 hover:bg-tabhover"
      to={`/channel/${to}`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </NavLink>
  );
}

function SideMenuChannels() {
  const channels = [
    {
      id: "General",
      name: "general",
    },
    {
      id: "Penguin",
      name: "penguin",
    },
    {
      id: "Slack",
      name: "slack",
    },
  ];

  return (
    <ToggleMenu text="Channels">
      {channels.map((channel) => (
        <NavLink
          key={channel.id}
          activeClassName="bg-activeTabBg font-semibold text-sidebartextcolor"
          className="flex items-center pl-6 py-1 px-4 text-sidebartextcolor space-x-4 hover:bg-tabhover"
          to={`/channel/${channel.id}`}
        >
          <span>#</span>
          <span>{channel.name}</span>
        </NavLink>
      ))}
      <div className="pl-4 flex py-1 px-4 space-x-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 bg-addchannelhover py-1 rounded-md"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-sidebartextcolor">Add channels</span>
      </div>
    </ToggleMenu>
  );
}

function ToggleMenu({ text, children }) {
  const [open, setOpen] = useState(true);
  const toggleHide = () => setOpen(!open);

  return (
    <div>
      <div
        className="px-2 mb-1 flex items-center space-x-1 cursor-pointer select-none"
        onClick={toggleHide}
      >
        {open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sidebartextcolor"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sidebartextcolor"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <div className="text-sidebartextcolor">{text}</div>
      </div>
      {open && <>{children}</>}
    </div>
  );
}

function SideMenuDirectMessages() {
  const channels = [
    {
      id: "Pandian",
      name: "Pandian",
    },
  ];

  return (
    <ToggleMenuDirectMessages text="Direct messages">
      {channels.map((channel) => (
        <NavLink
          key={channel.id}
          activeClassName="bg-activeTabBg font-semibold text-white"
          className="flex items-center pl-6 py-1 px-4 space-x-4 hover:bg-tabhover"
          to={`/channel/${channel.id}`}
        >
          <div className="flex relative right-1">
            <img className="rounded-sm w-5 h-5" src={MyImage} alt="owner" />
            <Activespan />
          </div>
          <p className="relative right-5 text-sidebartextcolor">
            {channel.name}
          </p>
        </NavLink>
      ))}
      <div className="pl-4 flex py-1 px-4 space-x-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 bg-addchannelhover py-1 rounded-md"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-sidebartextcolor">Add teammates</span>
      </div>
    </ToggleMenuDirectMessages>
  );
}

function ToggleMenuDirectMessages({ text, children }) {
  const [openmsg, setOpenmsg] = useState(true);
  const toggleHideMsg = () => setOpenmsg(!openmsg);

  return (
    <div>
      <div
        className="px-2 mb-1 flex items-center space-x-1 cursor-pointer select-none"
        onClick={toggleHideMsg}
      >
        {openmsg && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sidebartextcolor"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!openmsg && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sidebartextcolor"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <div className="text-sidebartextcolor">{text}</div>
      </div>
      {openmsg && <>{children}</>}
    </div>
  );
}

function SideMenuApp() {
  return (
    <ToggleMenuApp text="Apps">
      <div className="pl-4 flex py-1 px-4 space-x-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 bg-addchannelhover py-1 rounded-md"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-sidebartextcolor">Add apps</span>
      </div>
    </ToggleMenuApp>
  );
}

function ToggleMenuApp({ text, children }) {
  const [openapp, setOpenApp] = useState(true);
  const toggleHideMsg = () => setOpenApp(!openapp);

  return (
    <div>
      <div
        className="px-2 mb-1 flex items-center space-x-1 cursor-pointer select-none"
        onClick={toggleHideMsg}
      >
        {openapp && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sidebartextcolor"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!openapp && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sidebartextcolor"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <div className="text-sidebartextcolor">{text}</div>
      </div>
      {openapp && <>{children}</>}
    </div>
  );
}

export default Sidebar;
