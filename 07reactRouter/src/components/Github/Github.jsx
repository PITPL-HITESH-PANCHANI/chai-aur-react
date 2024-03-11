import React from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/PITPL-HITESH-PANCHANI")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center flex-col items-center">
      Github followers: {data?.followers}
      <img src={data?.avatar_url} alt="git picture" width={300} />
    </div>
  );
};

export default Github;

export const githubLoaderData = async () => {
  let res = await fetch("https://api.github.com/users/PITPL-HITESH-PANCHANI");
  return res.json();
};
