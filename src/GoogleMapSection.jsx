import React, { useContext, useState, useEffect } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
} from "@react-google-maps/api";
import { SourceContext } from "./SourceContext";
import { DestinationContext } from "./DestinationContext";
import sourceImage from "./source.png";
import destinationImage from "./destination.png";
  
const GoogleMapSection = () => {
  const containerStyle = {
    width: "100%",
    height: window.innerWidth * 0.45,
  };

  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [map, setMap] = React.useState(null);
  const [directionRoutePoints, setDirectionRoutePoints] = useState([]);

  useEffect(() => {
    if (source.length != [] && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }
    if(source!=null && destination!=null){
      directionRoute();
    }
  }, [source]);

  useEffect(() => {
    if (destination.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
    if(source!=null && destination!=null){
      directionRoute();
    }
  }, [destination]);


  const directionRoute = () => {
    const DirectionService = new window.google.maps.DirectionsService();
    DirectionService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionRoutePoints(result);
        } else {
          console.log("Error:", status);
        }
      }
    );
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "fb94117ae0a786da" }}
    >
      {source.length != [] ? (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: sourceImage,
            scaledSize: {
              width: 30,
              height: 30,
            },
          }}
        >
          <OverlayView
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-white font-bold inline-block">
              <p className="text-black text-[16px]">
                {source.label && source.label.split(",")[0]}
              </p>
            </div>
          </OverlayView>
        </MarkerF>
      ) : null}
      {destination.length != [] ? (
        <MarkerF
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: destinationImage,
            scaledSize: {
              width: 30,
              height: 30,
            },
          }}
        >
          <OverlayView
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-white font-bold inline-block">
              <p className="text-black text-[16px]">
                {destination.label && destination.label.split(",")[0]}
              </p>
            </div>
          </OverlayView>
        </MarkerF>
      ) : null}
      <DirectionsRenderer directions={directionRoutePoints} options={{
        polylineOptions:{
          strokeColor: '#000',
          strokeWeight:5  
        },
        suppressMarkers:true
      }} />
    </GoogleMap>
  );
};

export default GoogleMapSection;
