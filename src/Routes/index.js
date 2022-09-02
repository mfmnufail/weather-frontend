import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import WeatherAlert from "../Components/WeatherAlert";
import WeatherService from "../Components/WeatherService";

const index = () => {
  return (
    <Routes>
      <Route path="/weather-alert" element={<WeatherAlert/>} />
      <Route path="/weather-service" element={<WeatherService/>} />
      <Route path="/subscribe" element={<Login/>} />
    </Routes>
  );
};

export default index;
