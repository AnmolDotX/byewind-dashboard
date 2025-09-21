"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations: {
  name: string;
  coordinates: [number, number];
  revenue: number;
}[] = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72000 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39000 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25000 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61000 },
];

const maxRevenue = Math.max(...locations.map((l) => l.revenue));

export default function RevenueByLocation() {
  return (
    <div className="bg-[#F7F9FB] dark:bg-white/10 p-6 rounded-2xl max-h-[328px] flex flex-col">
      <h2 className="text-sm font-semibold mb-2 flex-shrink-0">
        Revenue by Location
      </h2>

      {/* Map */}
      <div className="flex-shrink-0 h-fit w-full">
        <ComposableMap projectionConfig={{ scale: 150 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#A8C5DA80"
                  stroke="#94A3B8"
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill="#000" stroke="#fff" strokeWidth={2} />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* List with progress bars */}
      <div className="mt-2 space-y-3 overflow-y-auto hide-scrollbar flex-1">
        {locations.map((loc) => (
          <div key={loc.name}>
            <div className="flex justify-between text-xs mb-1">
              <span>{loc.name}</span>
              <span>{Math.round(loc.revenue / 1000)}K</span>
            </div>
            <div className="h-1 w-full bg-gray-100 rounded-full">
              <div
                className="h-1 bg-[#A8C5DA80] rounded-full"
                style={{ width: `${(loc.revenue / maxRevenue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
