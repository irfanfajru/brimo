"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function visiblePassword() {
    setPassVisible(true);
  }

  function unvisiblePassword() {
    setPassVisible(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-white bg-primary font-bold rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 w-screen md:w-80"
      >
        Login
      </button>
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="transition-transform transition-opacity ease-out duration-300"
                enterFrom="transform translate-y-full opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition-transform transition-opacity ease-in duration-300"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform translate-y-full opacity-0"
              >
                <Dialog.Panel className="fixed bottom-0 w-full max-w-md transform overflow-hidden rounded-t-2xl bg-white px-6 pt-2 pb-6 text-left align-middle shadow-xl transition-all">
                  <hr className="w-16 h-1 mx-auto bg-gray-300 border-0 rounded" />
                  <div className="grid grid-cols-3 mt-4">
                    <button
                      onClick={closeModal}
                      className="text-start text-primary font-semibold w-fit"
                    >
                      Batalkan
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-lg w-full font-medium text-center leading-6 text-gray-900"
                    >
                      Login
                    </Dialog.Title>
                  </div>
                  {/* username input */}
                  <div className="mt-8">
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                          className="fill-gray-500"
                        >
                          <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z" />
                        </svg>
                      </div>
                      <input
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-gray-300 focus:border-gray-300 rounded-lg block w-full pl-10 p-2.5 "
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  {/* password input */}
                  <div className="mt-2">
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          className="fill-gray-500"
                        >
                          <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                      </div>
                      {!passVisible ? (
                        <div
                          onClick={visiblePassword}
                          className="hover:cursor-pointer absolute inset-y-0 right-4 flex items-center pl-3.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            className="fill-gray-500"
                          >
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                          </svg>
                        </div>
                      ) : (
                        <div
                          onClick={unvisiblePassword}
                          className="hover:cursor-pointer absolute inset-y-0 right-4 flex items-center pl-3.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                            className="fill-gray-500"
                          >
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                          </svg>
                        </div>
                      )}

                      <input
                        type={passVisible ? "text" : "password"}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-gray-300 focus:border-gray-300 rounded-lg block w-full pl-10 p-2.5 "
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    {!username || !password ? (
                      <button
                        disabled
                        type="button"
                        className="bg-[#d2d4d3] border border-gray-300 text-[#858585] w-full font-bold rounded-lg text-sm px-7 py-2.5 mr-2 mb-2"
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full bg-primary text-white font-bold rounded-lg text-sm px-7 py-2.5 mr-2 mb-2"
                      >
                        Login
                      </button>
                    )}
                  </div>
                  <div className="text-center mt-8">
                    <a href="#" className="text-primary font-semibold">
                      Lupa Username/Password?
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
