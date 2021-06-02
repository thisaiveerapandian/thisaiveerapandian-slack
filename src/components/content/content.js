import { useParams } from "react-router";
import MyImage from "../../Assets/img385.png";
import DefaultImage from "../../Assets/user.svg";

function Content() {
  const { channelID } = useParams();

  return (
    <div className="flex flex-col flex-grow">
      <div className="space-y-0.5 flex flex-col flex-grow overflow-hidden">
        <ChatTop channel={channelID} />
        {channelID !== "Threads" ? (
          <ChatMessages channel={channelID} />
        ) : (
          <ThreadsContent></ThreadsContent>
        )}
      </div>
      {channelID !== "Threads" ? <ChatInput channel={channelID} /> : ""}
    </div>
  );
}

function ChatTop({ channel }) {
  return (
    <div className="flex h-16 px-6 py-2 flex-none items-center text-gray-800 border-b border-chatheaderbordercolor">
      <div>
        <div className="space-x-2 flex">
          <span className="font-bold text-sm text-black">
            {channel === "Threads" ? "" : "#"} {channel ? channel : "General"}
          </span>
          <span className="flex items-center">
            {channel !== "Threads" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 relative w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ) : (
              ""
            )}
          </span>
        </div>
        <span className="font-light text-sm">
          {channel === "Pandian" || "Threads" ? "" : "Add a topic"}
        </span>
      </div>
      <div className="flex-grow" />
      {channel !== "Threads" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        ""
      )}
    </div>
  );
}

function ThreadsContent() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <span className="text-black font-bold text-base">
        Tend to your threads
      </span>
      <span className="text-black font-100 text-sm">
        Threads you’re involved in will be collected right here.
      </span>
    </div>
  );
}

function ChatMessages({ channel }) {
  const generalChat = [
    {
      name: "Pandian",
      time: "11:30 AM",
      msg: "Hi",
      img: MyImage,
    },
    {
      name: "Linganathan",
      time: "11:33 AM",
      msg: "Hi Pandian",
      img: DefaultImage,
    },
    {
      name: "Krish",
      time: "11:35 AM",
      msg: "Hi Pandian",
      img: DefaultImage,
    },
    {
      name: "Mari",
      time: "11:37 AM",
      msg: "Hi Anna",
      img: DefaultImage,
    },
    {
      name: "Veera",
      time: "11:47 AM",
      msg: "Hi Bro",
      img: DefaultImage,
    },
    {
      name: "Pandian",
      time: "11:48 AM",
      msg: "How r u?",
      img: MyImage,
    },
    {
      name: "Veera",
      time: "11:56 AM",
      msg: "Good bro :)",
      img: DefaultImage,
    },
    {
      name: "Linganathan",
      time: "11:57 AM",
      msg: "Good Thambi :)",
      img: DefaultImage,
    },
  ];

  const commonChat = [
    {
      name: "Pandian",
      time: "11:30 AM",
      msg: "Hi",
      img: MyImage,
    },
  ];

  const uiiteration =
    channel === "General" || !channel
      ? generalChat
      : channel === "Threads"
      ? []
      : commonChat;

  const chatui = uiiteration.map((data, index) => (
    <div className="flex items-end mb-2 mt-2 text-sm" key={index}>
      <img
        src={data.img}
        alt={data.img}
        style={{ background: data.img === DefaultImage ? "#379bd1" : "" }}
        className="w-10 h-10 rounded-md mr-3"
      />
      <div className="flex-1 overflow-hidden">
        <div>
          <span className="font-bold mr-2 text-black">{data.name}</span>
          <span className="text-timecolor text-xs">{data.time}</span>
        </div>
        <p className="text-black leading-normal">{data.msg}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col flex-grow px-5 pb-5 overflow-auto">
      {chatui}
    </div>
  );
}

function ChatInput({ channel }) {
  let channelId = channel ? channel.toString().toLowerCase() : "general";
  return (
    <div className="px-5 pb-5">
      <div className="px-2 p-2 rounded-md border-gray-500 border flex space-x-4 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pr-2 border-r border-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <input
          autoFocus
          className="text-black placeholder-gray-500 bg-transparent outline-none flex-auto"
          placeholder={"Message #" + channelId}
        ></input>
      </div>
    </div>
  );
}

export default Content;
