import Card from "@/components/Card";
import { getData } from "../../lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const AllDestinationPage = async () => {
  const data = await getData();

  return (
    <div className="mb-21">
      <div className="max-w-7xl mx-auto mt-19 mb-10">
        <h2 className="text-6xl mb-4">Explore All Destinations</h2>

        <div className="flex justify-between items-center">
          <p className="text-[20px] text-[#6C696D]">
            Find your perfect travel experience from our curated collection
          </p>

          <Link href={`/addDestination`}>
            <Button variant="ghost">Add Destination</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {data.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllDestinationPage;
