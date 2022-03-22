import Head from "next/head";

import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [image, setImage] = useState("your QR code will appear here");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");

  useEffect(() => {
    setImage(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${translatedText}&bgcolor=${bgColor}&color=000000`
    );
  }, [size, bgColor]);

  const onButtonClick = () => {
    setTranslatedText(text);
    setImage(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${translatedText}&bgcolor=${bgColor}&color=000000`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            QR Code generator
          </div>
          <div className="mt-8">
            <form action="#" autoComplete="off">
              <div className="flex flex-col mb-2">
                <div className="flex relative "></div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex relative ">
                  <input
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    value={text}
                    placeholder="enter the QR code name"
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h5 className="mr-2">
                    Background Color{" "}
                    <input
                      className="ml-2"
                      type="color"
                      onChange={(e) => {
                        setBgColor(e.target.value.substring(1));
                      }}
                    />
                  </h5>
                  <div className="flex flex-row">
                    <h5 className="mr-2">Size</h5>
                    <input
                      className="
                  form-range
                  w-full
                  h-6
                  p-0               
                  focus:outline-none focus:ring-0 focus:shadow-none"
                      type="range"
                      min="200"
                      max="600"
                      value={size}
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <img className=" mx-auto m-4" src={image} alt="" />
              </div>
              <div className="flex items-center mb-3 mt-4">
                <div className="flex ml-auto"></div>
              </div>
              <div className="flex">
                <button
                  onClick={onButtonClick}
                  type="submit"
                  className="py-2 px-4 bg-blue-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Generate
                </button>

                <div>
                  <a href={image} download="QR Code">
                    <button
                      className="ml-2 py-2 px-4 bg-blue-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      type="button"
                    >
                      Download
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
