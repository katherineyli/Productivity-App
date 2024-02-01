import React from "react";

const Settings = (props) => {
  return (
    <div className="grow relative flex flex-col">
      <div className="h-24 ml-12 text-3xl font-semibold flex">
        <div className="mt-12">Settings</div>
      </div>
      <div className="ml-12 flex mt-3 flex-col">
        <h1 className="text-lg">Color Customization</h1>
        <div className="ml-3 mt-4">
          <div className="mb-8 flex items-center">
            <p className="mr-5">Color 1</p>
            <div className="flex">
              <button
                onClick={() => props.setPrimary("red")}
                className={`w-14 h-14 bg-red-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "red"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("orange")}
                className={`w-14 h-14 bg-orange-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "orange"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("yellow")}
                className={`w-14 h-14 bg-yellow-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "yellow"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("lime")}
                className={`w-14 h-14 bg-lime-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "lime"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("green")}
                className={`w-14 h-14 bg-green-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "green"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("teal")}
                className={`w-14 h-14 bg-teal-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "teal"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("cyan")}
                className={`w-14 h-14 bg-cyan-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "cyan"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("sky")}
                className={`w-14 h-14 bg-sky-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "sky"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("blue")}
                className={`w-14 h-14 bg-blue-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "blue"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("indigo")}
                className={`w-14 h-14 bg-indigo-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "indigo"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("purple")}
                className={`w-14 h-14 bg-purple-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "purple"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("fuchsia")}
                className={`w-14 h-14 bg-fuchsia-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "fuchsia"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("pink")}
                className={`w-14 h-14 bg-pink-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "pink"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("rose")}
                className={`w-14 h-14 bg-rose-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "rose"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setPrimary("slate")}
                className={`w-14 h-14 bg-slate-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.primary === "slate"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-5">Color 2</p>
            <div className="flex">
              <button
                onClick={() => props.setSecondary("red")}
                className={`w-14 h-14 bg-red-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "red"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("orange")}
                className={`w-14 h-14 bg-orange-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "orange"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("yellow")}
                className={`w-14 h-14 bg-yellow-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "yellow"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("lime")}
                className={`w-14 h-14 bg-lime-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "lime"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("green")}
                className={`w-14 h-14 bg-green-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "green"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("teal")}
                className={`w-14 h-14 bg-teal-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "teal"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("cyan")}
                className={`w-14 h-14 bg-cyan-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "cyan"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("sky")}
                className={`w-14 h-14 bg-sky-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "sky"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("blue")}
                className={`w-14 h-14 bg-blue-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "blue"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("indigo")}
                className={`w-14 h-14 bg-indigo-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "indigo"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("purple")}
                className={`w-14 h-14 bg-purple-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "purple"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("fuchsia")}
                className={`w-14 h-14 bg-fuchsia-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "fuchsia"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("pink")}
                className={`w-14 h-14 bg-pink-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "pink"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("rose")}
                className={`w-14 h-14 bg-rose-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "rose"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
              <button
                onClick={() => props.setSecondary("slate")}
                className={`w-14 h-14 bg-slate-300 rounded-full mr-3 hover:border-gray-400 ${
                  props.secondary === "slate"
                    ? "border-4 border-gray-400"
                    : "border-4"
                }`}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-12 flex mt-6 flex-col">
        <h1 className="text-lg">Weather Location</h1>
        <div className="flex mt-2 ml-2">
          <p>City name:</p>
          <input type="text" className="border border-gray-300 ml-3 rounded-lg"/>
        </div>
      </div>
      <button
        onClick={() => props.updatePreferences(props.userId)}
        className="w-40 h-12 bg-gray-300 rounded-lg hover:bg-gray-400 absolute bottom-12 right-12"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default Settings;
