/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const Home = () => {
  const [places, setPlaces] = useState([]);
  //   console.log(destinations)

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => setPlaces(data.destinations));
  }, []);
  return (
    <div>
      <Slider places={places}></Slider>
    </div>
  );
};

export default Home;
