import { useEffect, useState } from "react";
import FetchData from "../../service/FetchData";

const fetchData = new FetchData();

// eslint-disable-next-line no-unused-vars
const useLaunches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData
      .getLaunches()
      .then((launches) => setData((state) => [...launches]));
  }, []);

  return { data };
};

export default useLaunches;
