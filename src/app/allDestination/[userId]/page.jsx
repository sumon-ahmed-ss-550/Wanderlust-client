import { deleteData } from "@/lib/actions";
import { getOneData } from "@/lib/data";
import AlertDialogBox from "@/components/AlertDialogBox";
import EditUser from "@/components/EditUser";
import { ArrowChevronLeft } from "@gravity-ui/icons";
import { Button, ButtonGroup } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const DetailsPage = async ({ params }) => {
  const { userId } = await params;
  const data = await getOneData(userId);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <Link href={`/allDestination`}>
          <Button variant="ghost">
            <ArrowChevronLeft></ArrowChevronLeft> Back to Destination
          </Button>
        </Link>

        <div className="flex items-center gap-4">
          <EditUser data={data}></EditUser>
          <AlertDialogBox data={data} deleteData={deleteData}></AlertDialogBox>
        </div>
      </div>

      <div>
        <Image
          src={data.imageUrl}
          width={1024}
          height={992}
          alt="This is details image"
          className="w-full h-auto object-cover"
          priority
        ></Image>
        <div>
          <div className="flex items-center gap-2">
            <GrLocation />
            {data.country}
          </div>
          <h2 className="text-[60px]">{data.destinationName}</h2>

          <div className="mb-10">
            <h2 className="text-[30px]">Overview</h2>
            <p>{data.description}</p>
          </div>

          <div>
            <h2 className="text-[30px]">Highlights</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
