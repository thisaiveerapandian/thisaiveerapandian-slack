import { useState } from "react";

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

export default SideMenuApp;
