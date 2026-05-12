import { Person } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#FFFFFF] px-6 py-4">
      <ul>
        <li className="flex items-center gap-8">
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/home`}
          >
            Home
          </Link>
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/destinations`}
          >
            Destinations
          </Link>
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/myBookings`}
          >
            My Bookings
          </Link>
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/admin`}
          >
            Admin
          </Link>
        </li>
      </ul>

      <div>
        <Image
          src={`/assets/Wanderlast.png`}
          width={162}
          height={24}
          alt="This is header image"
        ></Image>
      </div>

      <ul>
        <li className="flex items-center gap-8">
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/profile`}
          >
            <div className="flex items-center gap-1">
              <Person></Person>
              Profile
            </div>
          </Link>
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/login`}
          >
            Login
          </Link>
          <Link
            className="font-medium text-base leading-6 tracking-[0.5%] text-[#0C0B0B]"
            href={`/signup`}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
