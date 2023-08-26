import Map from "@/components/Game/map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { data } from "./data";
// @ts-ignore
import geojson2svg from "geojson-to-svg";
import SVG from "react-inlinesvg";
import { useState } from "react";

export default function Game() {
  const [questionNum, setQuestionNum] = useState(1);
  const [questionGeoJson, setQuestionGeoJson] = useState(null);
  const [modelF, setModalF] = useState(true);

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const svg = geojson2svg()
    .styles({ Polygon: { fill: "rgba(255,00,00,0.05)", stroke: "red" } })
    .data(data)
    .render()
    .replace("/></g></svg>", 'stroke-width="0.15" /></g></svg>');

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          margin: 0,
          padding: 0,
          zIndex: 10,
          position: "absolute",
          backgroundColor: "RGBA(74,72,75,0.7)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            zIndex: 15,
            position: "absolute",
            borderColor: "black",
            borderWidth: "5px",
            width: "70%",
            height: "90%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10%",
            textAlign: "center",
            display: "table",
          }}
        >
          <div style={{ display: "table-cell", verticalAlign: "middle" }}>
            <div style={{ fontSize: 56, fontWeight: "bold" }}>
              第 {questionNum} 問
            </div>
            <SVG
              src={svg}
              style={{
                transform: "rotate(180deg)",
                margin: "30 30",
              }}
            ></SVG>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl">
              スタート
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          margin: 0,
          padding: 0,
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY!} render={render}>
          <Map></Map>
        </Wrapper>
      </div>
    </>
  );
}
