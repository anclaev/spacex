/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useLaunches from "../useLaunches";
import "./details.css";

import Main from "../Main";

const Details = (props) => {
  const [launch, setLaunch] = useState(null);

  const { getLaunch } = useLaunches();

  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id));
  }, [getLaunch, props.match.params.id]);

  console.log(launch);

  const history = useHistory();

  if (!launch) return null;

  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="details-content">
              <p className="details-description">{launch?.details}</p>
            </div>
          </div>
          <div></div>
        </div>
        <a onClick={history.goBack} className="button button-back">
          GO BACK
        </a>
      </main>
    </>
  );
};

export default Details;
