import ProjectDelete from "@/components/ProjectDelete";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const info = session?.user;

  const res = await fetch(`http://localhost:5000/product/${info?.id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto mt-15">
      <div className="mb-10">
        <h2 className="text-6xl text-[#0C0B0B] mb-4">My Bookings</h2>
        <p className="text-[20px] text-[#6C696D]">
          Manage and view your upcoming travel plans
        </p>
      </div>

      <div>
        {data.length === 0 ? (
          <div className="mb-6">
            <h2 className="text-4xl text-muted">Data is not available</h2>
          </div>
        ) : (
          data.map((item) => (
            <div key={item._id} className="mb-6">
              <Card>
                <div className="flex items-center gap-6">
                  <Image
                    src={item.imageUrl}
                    width={200}
                    height={200}
                    alt="This is booking image"
                    unoptimized
                  ></Image>
                  <div>
                    <h3 className="font-semibold text-[40px] text-[#0C0B0B]">
                      {item.destinationName}
                    </h3>
                    <p>{item.date}</p>
                    <p>{item.country}</p>
                    <p className="font-semibold text-[40px] text-[#15A1BF]">
                      ${item.price}
                    </p>

                    <ProjectDelete userId={item._id}></ProjectDelete>
                  </div>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;
