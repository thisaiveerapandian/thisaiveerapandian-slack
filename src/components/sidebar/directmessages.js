import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MyImage from "../../Assets/img385.png";

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

export default SideMenuDirectMessages;
