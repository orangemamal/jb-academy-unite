'use client'

import React, { useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

export default function KakaoMapApi({selectedName, selectedAddress}) {

  useKakaoLoader();

  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {

    const checkKakaoLoaded = () => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        setIsKakaoLoaded(true);
      } else {
        console.error("Kakao Maps SDK is not fully loaded");
      }
    };

    const timer = setInterval(() => {
      checkKakaoLoaded();
    }, 100);

    if (isKakaoLoaded) {
      clearInterval(timer);

      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 300.570667),
        level: 1,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(`${selectedAddress}`, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(coords);

          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div class="map_marker">${selectedName}</div>`,
          });
          infowindow.open(map, marker);
        } else {
          console.error("Geocoding failed");
        }
      });
    }

    return () => clearInterval(timer);
  }, [isKakaoLoaded, selectedName, selectedAddress]);

  return (
    <Map
      id="map"
      center={{
        lat: 33.450701,
        lng: 300.570667,
      }}
      level={5}
      ref={mapRef}
    >
      <MapMarker
        position={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      />
    </Map>
  );
}
