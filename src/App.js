import React from "react";
import Header from "./components/Header";
import "./css/style.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <section className="main">
        <h1 className="title">Falcon 1</h1>

        <div className="video-container">
          <video
            className="video"
            autoPlay
            loop
            muted
            src="./video/moon.mp4"
          ></video>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
