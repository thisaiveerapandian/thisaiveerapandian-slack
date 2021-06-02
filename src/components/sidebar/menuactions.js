import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

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
        className="flex items-center py-0.5 pl-3 pb-1 pt-1 mt-2 space-x-4 cursor-pointer"
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

export default SideMenuActions;