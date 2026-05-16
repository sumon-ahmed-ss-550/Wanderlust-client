"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label, Separator } from "@heroui/react";
import { Card } from "@heroui/react";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { toast } from "react-toastify";

const MyDestination = ({ information }) => {
  const [date, setDate] = useState(null);

  const { data: session } = authClient.useSession();
  const info = session?.user;

  const handleBookNowButton = async () => {
    const newData = {
      userId: info?.id,
      userName: info?.name,
      userEmail: info?.email,

      id: information._id,
      destinationName: information.destinationName,
      country: information.country,
      price: information.price,
      date: new Date(date),
      imageUrl: information.imageUrl,
    };

    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await res.json();
    if (result) {
      toast.success("Product successfully added");
    }
  };

  return (
    <Card className="w-100 rounded-none mt-10">
      <div>
        <h2 className="text-muted">Starting from</h2>
        <h3 className="font-semibold text-[40px] text-[#15A1BF]">
          ${information.price}
        </h3>
        <span className="text-muted">per person</span>

        <div className="mt-10">
          <DateField className="w-full mb-5" name="date" onChange={setDate}>
            <Label>Date</Label>
            <DateField.Group className="rounded-none">
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>

          <Separator></Separator>
          <Button
            onClick={handleBookNowButton}
            className="w-full rounded-none mt-5 bg-[#15A1BF]"
          >
            Book Now <GoArrowRight />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MyDestination;
