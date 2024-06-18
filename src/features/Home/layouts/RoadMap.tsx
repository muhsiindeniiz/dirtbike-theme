import { Map } from "@vis.gl/react-google-maps";
import React from "react";
import { Marker } from "react-simple-maps";

const RoadMap = () => {
  const center = {
    lat: 37.72,
    lng: -121.698,
  };

  const position = {
    lat: 37.72,
    lng: -121.698,
  };

  return (
    <div className="mt-10 w-full">
      <Map
        style={{ width: "100%", height: "500px" }}
        defaultCenter={{ lat: 43.65, lng: -79.38 }}
        defaultZoom={9}
        gestureHandling={"greedy"}
        fullscreenControl={false}
      />
    </div>
  );
};

export default RoadMap;
