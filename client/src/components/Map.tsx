import { FC } from 'react'
import { useState, useEffect } from 'react'
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";

const MAP_DIV_ID = "mapDiv"

const MapComp:FC = () => {
  const [_mapView, setMapView] = useState<MapView | null>(null)
  const [_graphics, _setGraphics] = useState<Graphic[]>([])

  const createMapView = () => {
    const map = new Map({
      basemap: "dark-gray",
    });

    const extent = {
      xmin: 2660574.99700981,
      ymin: 204813.859325305,
      xmax: 2750112.77856381,
      ymax: 304942.427440464,
      spatialReference: {
        wkid: 2272,
      },
    }

    const view = new MapView({
      container: MAP_DIV_ID,
      map: map,
      extent: extent,
    });

    setMapView(view);
  }

  useEffect(createMapView, []);

  return <div id={MAP_DIV_ID} />;
}

export default MapComp
