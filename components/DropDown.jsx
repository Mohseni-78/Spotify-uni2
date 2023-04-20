import React, { Fragment } from "react";
// Imported Headless ui ==========>
import { Menu, Transition } from "@headlessui/react";
// Imported Icons ==========>
import { MdOutlineSettings } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

const DropDown = ({ user }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <MdOutlineSettings className="text-[#CCCCCC] iconStyle" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#1DB954] text-white" : "text-gray-900"
                  } group flex gap-3 w-full items-center rounded-md  px-2 py-2 text-sm`}
                >
                  <BsFillPersonFill className={`text-black`} />
                  {user.email.substring(0, user.email.indexOf("@"))}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    try {
                      signOut();
                      toast.success("LogOut success");
                    } catch (err) {
                      toast.error(`Error : ${err}`);
                    }
                  }}
                  className={`${
                    active ? "bg-red-500 text-white" : "text-gray-900"
                  } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <CiLogout className={`text-black`} />
                  LogOut
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
