import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type Props = {
  setter: Dispatch<SetStateAction<string>>;
};

const Map = ({ setter }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const lastSelectedFeature = useRef<any>(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
          disableDefaultUI: true,
          zoomControl: true,
        })
      );
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.data.loadGeoJson("/test2.geojson");
      map.data.setStyle((feature) => {
        let colorOpacity = 0;
        let strokeOpacity = 0.2;
        if (feature.getProperty("isSelected")) {
          colorOpacity = 0.5;
          strokeOpacity = 1;
        }
        return {
          fillColor: "red",
          fillOpacity: colorOpacity,
          strokeWeight: 2,
          strokeColor: "red",
          strokeOpacity: strokeOpacity,
        };
      });

      // @ts-ignore
      map.data.addListener("click", (event) => {
        setter(event.feature.getProperty("NAME_JA"));
        console.log(event.feature.getProperty("NAME_JA"));
        event.feature.setProperty("isSelected", true);
        if (
          lastSelectedFeature.current &&
          event.feature.getProperty("NAME_JA") !==
            lastSelectedFeature.current.getProperty("NAME_JA")
        ) {
          lastSelectedFeature.current.setProperty("isSelected", false);
        }
        lastSelectedFeature.current = event.feature;
      });
    }
  }, [map]);

  const style = { width: "100%", height: "100%" };
  return <div ref={ref} style={style}></div>;
};

export default Map;
