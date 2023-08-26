import Map from "@/components/Game/map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { data } from "./data";
// @ts-ignore
import geojson2svg from "geojson-to-svg";
import SVG from "react-inlinesvg";

export default function Game() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const svg = geojson2svg()
    .styles({ Polygon: { fill: "none", stroke: "red" } })
    .data(data)
    .render()
    .replace("/></g></svg>", 'stroke-width="0.01" /></g></svg>');

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <SVG src={svg} style={{ transform: "rotate(180deg)" }}></SVG>
      <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY!} render={render}>
        <Map></Map>
      </Wrapper>
    </div>
  );
}
