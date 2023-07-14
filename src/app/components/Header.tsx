"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { status, data } = useSession();
  const handleLogin = () => {
    signIn();
  };
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  return (
    <div className="container mx-auto p-5 flex justify-between">
      <div className="relative h-[32px] w-[182px] items-center mt-2">
        <Image src="/Logo.png" alt="logo do app" fill />
      </div>

      {status === "unauthenticated" && (
        <button
          onClick={handleLogin}
          className="text-primary_color text-sm font-semibold"
        >
          Login
        </button>
      )}
      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border border-solid border-grey_lighter rounded-full p-2 relative ">
          <Image
            className="cursor-pointer"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            src="/Menu.png"
            width={16}
            height={16}
            alt="logo do app"
          />
          <Image
            className="rounded-full shadow-md"
            src={data.user.image!}
            width={30}
            height={30}
            alt={data.user.name!}
          />
          {menuIsOpen && (
            <div className="absolute top-12 left-0 w-full h-full bg-white rounded-full shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary_color text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
