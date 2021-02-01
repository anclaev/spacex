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

  const getLaunch = (id) => data.find((item) => item.id === id);
  return { data, getLaunch };
};

export default useLaunches;
