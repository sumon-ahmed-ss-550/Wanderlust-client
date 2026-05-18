import { headers } from "next/headers";
import { auth } from "./auth";

export const getData = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();
  return data;
};

// get one data
export const getOneData = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(), // you need to pass the headers object.
  });

  const res = await fetch(`http://localhost:5000/destination/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
