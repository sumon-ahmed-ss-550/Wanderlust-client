import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Card = ({ item }) => {
  return (
    <div className="max-w-103 border">
      <Image
        src={item.imageUrl}
        width={412}
        height={232}
        alt={`This is image`}
        className="w-full h-auto"
        priority
      ></Image>

      <div className="mt-4 px-3">
        <div className="flex items-center gap-2">
          <GrLocation />
          <span>{item.country}</span>
        </div>

        <div className="flex justify-between items-center">
          {item.destinationName}
          <p>$ {item.price}</p>
        </div>

        <div>
          <FaRegCalendarAlt />
          <p>{item.duration} Days/6 Nights</p>
        </div>

        <Link href={`/allDestination/${item._id}`}>
          <Button
            variant="ghost"
            className="text-[#15A1BF] underline hover:bg-transparent px-0"
          >
            Book Now
            <FiArrowUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
