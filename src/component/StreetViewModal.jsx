import React, { useEffect, useRef } from "react";

export default function StreetViewModal({ open, onClose, location }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open || !location) return;
    if (typeof window === "undefined") return;
    if (!window.google || !window.google.maps || !containerRef.current) return;

    const { lat, lng } = location;

    try {
      // eslint-disable-next-line no-undef
      new window.google.maps.StreetViewPanorama(containerRef.current, {
        position: { lat, lng },
        pov: { heading: 0, pitch: 0 },
        zoom: 1,
      });
    } catch (e) {
      // ignore
    }
  }, [open, location]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-lg">Street View</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="w-full h-[60vh]" ref={containerRef}>
          {typeof window !== "undefined" && (!window.google || !window.google.maps) && (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">
              Street View is loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
