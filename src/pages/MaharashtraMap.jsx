import React, { useMemo, useCallback, useRef } from "react";
import Navbar from "../component/Navbar";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import UnipoleData from "../data/unipoleData";

export default function MaharashtraMap() {
  const maharashtraBounds = useMemo(
    () => ({ north: 22.1, south: 15.6, west: 72.6, east: 80.9 }),
    []
  );

  const center = useMemo(() => ({ lat: 19.7515, lng: 75.7139 }), []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const options = useMemo(
    () => ({
      mapTypeId: "hybrid",
      gestureHandling: "greedy",
      zoomControl: true,
      rotateControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      restriction: { latLngBounds: maharashtraBounds, strictBounds: true },
      minZoom: 5,
      maxZoom: 20,
      ...(import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
        ? { mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID }
        : {}),
    }),
    [maharashtraBounds]
  );

  const mapRef = useRef(null);
  const onLoad = useCallback(
    (m) => {
      mapRef.current = m;
      try {
        m.setCenter(center);
        m.setZoom(7);
      } catch (e) {
        // ignore
      }
    },
    [center]
  );

  const markers = UnipoleData.map((d) => ({
    id: d.id,
    position: { lat: d.lat, lng: d.lng },
    title: d.name,
  }));

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-0 md:p-6">
        {!isLoaded ? (
          <div className="h-[70vh] flex items-center justify-center text-gray-600">
            Loading map...
          </div>
        ) : (
          <div className="h-[70vh] md:h-[78vh] rounded-none md:rounded-xl overflow-hidden border border-gray-200">
            <GoogleMap
              mapContainerClassName="w-full h-full"
              center={center}
              zoom={7}
              options={options}
              onLoad={onLoad}
            >
              {markers.map((m) => (
                <Marker key={m.id} position={m.position} title={m.title} />
              ))}
            </GoogleMap>
          </div>
        )}
      </main>
    </>
  );
}
