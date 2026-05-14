"use client";

import { Person } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [toggle, isToggle] = useState(false);

  const linkOne = (
    <>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/allDestination`}
        >
          Destinations
        </Link>
      </li>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/myBookings`}
        >
          My Bookings
        </Link>
      </li>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/addDestination`}
        >
          Add Destination
        </Link>
      </li>
    </>
  );

  const linkTwo = (
    <>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/profile`}
        >
          <div className="flex items-center gap-1">
            <Person></Person>
            Profile
          </div>
        </Link>
      </li>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/login`}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
          href={`/signUp`}
        >
          Sign Up
        </Link>
      </li>
    </>
  );

  return (
    <nav className="flex justify-between items-center bg-[#FFFFFF] px-6 py-4">
      {/* Navbar one */}
      <div className="flex items-center gap-4">
        <div onClick={() => isToggle(!toggle)} className="block lg:hidden">
          {toggle ? (
            <IoClose className="text-2xl"></IoClose>
          ) : (
            <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">{linkOne}</ul>
        </div>
      </div>

      {/* Navbar logo */}
      <div>
        <Image
          src={`/assets/Wanderlast.png`}
          width={162}
          height={24}
          alt="This is header image"
        ></Image>
      </div>

      {/* Navbar two */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-8">{linkTwo}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
