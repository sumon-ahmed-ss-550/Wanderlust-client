import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { headers } from "next/headers";

// Update data
export const updateData = async (_id, formData) => {
  "use server";
  const formInfo = Object.fromEntries(formData.entries());

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/destination/${_id}`, {
    method: "PATCH",
    body: JSON.stringify(formInfo),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.matchedCount > 0) {
    revalidatePath("/allDestination/[userId]");
  }
  console.log(data);
};

// Delete data
export const deleteData = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:5000/destination/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    redirect("/allDestination");
  }
};
