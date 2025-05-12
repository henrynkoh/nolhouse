"use client";

import React, { useState, useEffect } from "react";
import { AccommodationItem } from "../../types";

interface MapSearchProps {
  accommodations: AccommodationItem[];
  onSelectAccommodation: (id: string) => void;
}

interface MapState {
  center: { lat: number; lng: number };
  zoom: number;
}

declare global {
  interface Window {
    kakao: any;
    initMap?: () => void;
  }
}

export const MapSearch: React.FC<MapSearchProps> = ({
  accommodations,
  onSelectAccommodation,
}) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mapState, setMapState] = useState<MapState>({
    center: { lat: 37.5665, lng: 126.9780 }, // Seoul coordinates
    zoom: 12,
  });
  
  // Initialize map when component mounts
  useEffect(() => {
    // Dynamically load Kakao Maps API
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAPS_API_KEY&autoload=false`;
    document.head.appendChild(script);
    
    // Define initialization function that will be called by Kakao Maps
    window.initMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(mapState.center.lat, mapState.center.lng),
          level: mapState.zoom,
        };
        setMap(new window.kakao.maps.Map(container, options));
      });
    };
    
    script.onload = () => {
      window.initMap?.();
    };
    
    return () => {
      // Clean up
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);
  
  // Add markers when map is loaded and accommodations are available
  useEffect(() => {
    if (!map || !accommodations.length) return;
    
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    
    // Create new markers
    const newMarkers = accommodations.map(accommodation => {
      // Use real coordinates if available, or generate random ones around the center
      const lat = accommodation.coordinates?.lat || 
        mapState.center.lat + (Math.random() - 0.5) * 0.05;
      const lng = accommodation.coordinates?.lng || 
        mapState.center.lng + (Math.random() - 0.5) * 0.05;
      
      const position = new window.kakao.maps.LatLng(lat, lng);
      
      // Create marker
      const marker = new window.kakao.maps.Marker({
        position,
        map,
      });
      
      // Create info window with price
      const price = accommodation.price.toLocaleString();
      const content = `
        <div class="bg-white rounded-md shadow-md px-2 py-1 text-sm font-bold text-blue-600 border-2 ${selectedId === accommodation.id ? 'border-blue-500' : 'border-white'}">
          ₩${price}
        </div>
      `;
      
      const infoWindow = new window.kakao.maps.CustomOverlay({
        position,
        content,
        yAnchor: 1.2,
      });
      
      infoWindow.setMap(map);
      
      // Add click event listener
      window.kakao.maps.event.addListener(marker, 'click', function() {
        setSelectedId(accommodation.id);
        onSelectAccommodation(accommodation.id);
      });
      
      return marker;
    });
    
    setMarkers(newMarkers);
  }, [map, accommodations, selectedId, onSelectAccommodation]);
  
  return (
    <div className="w-full h-full flex flex-col">
      <div id="map" className="w-full h-full rounded-lg shadow-md"></div>
      
      <div className="mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">지도에서 숙소 찾기</h3>
          <p className="text-sm text-gray-600 mb-4">
            지도를 움직이면서 원하는 지역의 숙소를 찾아보세요. 마커를 클릭하면 상세 정보를 확인할 수 있습니다.
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (!map) return;
                map.setCenter(new window.kakao.maps.LatLng(37.5665, 126.9780)); // Seoul
                map.setLevel(9);
              }}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200"
            >
              서울
            </button>
            <button
              onClick={() => {
                if (!map) return;
                map.setCenter(new window.kakao.maps.LatLng(35.1796, 129.0756)); // Busan
                map.setLevel(9);
              }}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200"
            >
              부산
            </button>
            <button
              onClick={() => {
                if (!map) return;
                map.setCenter(new window.kakao.maps.LatLng(33.4996, 126.5312)); // Jeju
                map.setLevel(10);
              }}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200"
            >
              제주
            </button>
            <button
              onClick={() => {
                if (!map) return;
                map.setCenter(new window.kakao.maps.LatLng(37.2750, 127.0094)); // Suwon
                map.setLevel(9);
              }}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200"
            >
              수원
            </button>
          </div>
        </div>
      </div>
      
      {selectedId && (
        <div className="mt-4">
          {accommodations.filter(a => a.id === selectedId).map(accommodation => (
            <div key={accommodation.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-md overflow-hidden">
                  <img src={accommodation.imageUrl} alt={accommodation.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{accommodation.name}</h3>
                  <p className="text-gray-600 text-sm">{accommodation.location}</p>
                  <div className="flex items-center mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    <span className="ml-1 text-sm">{accommodation.rating.toFixed(1)} ({accommodation.reviewCount})</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold text-lg">{accommodation.price.toLocaleString()}원</span>
                    <span className="text-sm text-gray-500 ml-1">/ 1박</span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => onSelectAccommodation(accommodation.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    상세 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapSearch; 