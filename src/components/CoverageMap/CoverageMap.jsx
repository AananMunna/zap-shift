import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import warehouses from "../../data/warehouses.json";
import CoverageSearch from "../CoverageSearch/CoverageSearch";

// Fix Leaflet marker icons in Vite
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CoverageMap = () => {
  const [filteredWarehouses, setFilteredWarehouses] = useState(warehouses);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();

    const filtered = warehouses.filter((item) =>
      item.district.toLowerCase().includes(lowerQuery) ||
      item.city.toLowerCase().includes(lowerQuery) ||
      item.covered_area.some((area) =>
        area.toLowerCase().includes(lowerQuery)
      )
    );

    setFilteredWarehouses(filtered);
  };

  return (
    <div className="w-full p-4 z-0">
      <h2 className="text-3xl text-black font-bold text-center mb-2">
        We are available in 64 districts
      </h2>

      <CoverageSearch onSearch={handleSearch} />

      <h3 className="text-xl font-semibold text-center mb-4 text-black">
        We deliver almost all over Bangladesh.
      </h3>

      <div className="w-9/12 mx-auto h-[500px]">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full rounded-lg shadow-lg z-10"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredWarehouses.map((item, index) => (
            <Marker
              key={index}
              position={[item.latitude, item.longitude]}
            >
              <Popup>
                <div>
                  <h2 className="font-bold text-lg">{item.district}</h2>
                  <p className="text-sm">
                    <strong>Areas:</strong> {item.covered_area.join(", ")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
