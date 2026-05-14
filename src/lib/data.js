export const getData = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();
  return data;
};

export const getOneData = async (userId) => {
  const res = await fetch(`http://localhost:5000/destination/${userId}`);
  const data = await res.json();
  return data;
};
