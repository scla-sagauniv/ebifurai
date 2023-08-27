import Map from "@/components/Game/map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { data } from "./data";
// @ts-ignore
import geojson2svg from "geojson-to-svg";
import SVG from "react-inlinesvg";
import { useState } from "react";
import Link from "next/link";

export default function Game() {
  const [questionNum, setQuestionNum] = useState(1);
  const [questionGeoJson, setQuestionGeoJson] = useState(null);
  const [questionModalF, setQuestionModalF] = useState(true);
  const [scoreModalF, setScoreModalF] = useState(false);

  const start = () => {
    setQuestionModalF(false);
  };

  const submit = () => {
    setScoreModalF(true);
  };

  const next = () => {
    setScoreModalF(false);
    setQuestionNum((prev) => prev + 1);
    setQuestionModalF(true);
  };

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
      {questionModalF ? (
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
              height: "80px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "10%",
              textAlign: "center",
              display: "table",
            }}
          >
            <div
              style={{
                display: "table-cell",
                verticalAlign: "middle",
              }}
            >
              <div style={{ fontSize: 56, fontWeight: "bold" }}>
                第 {questionNum} 問
              </div>
              <SVG
                src={svg}
                style={{
                  transform: "rotate(180deg)",
                  margin: "30 auto",
                  height: "500",
                }}
              ></SVG>
              <button
                onClick={start}
                className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl"
              >
                スタート
              </button>
            </div>
          </div>
        </div>
      ) : undefined}
      {scoreModalF ? (
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
              height: "80px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "10%",
              textAlign: "center",
              display: "table",
            }}
          >
            <div
              style={{
                display: "table-cell",
                verticalAlign: "middle",
              }}
            >
              <div style={{ display: "flex", gap: "30px" }}>
                <div style={{ margin: "auto" }}>
                  <div style={{ fontSize: 56, fontWeight: "bold" }}>お題</div>
                  <SVG
                    src={svg}
                    style={{
                      transform: "rotate(180deg)",
                      margin: "30 auto",
                      height: "300",
                    }}
                  ></SVG>
                </div>
                <div style={{ margin: "auto" }}>
                  <div style={{ fontSize: 56, fontWeight: "bold" }}>回答</div>
                  <SVG
                    src={svg}
                    style={{
                      transform: "rotate(180deg)",
                      margin: "30 auto",
                      height: "300",
                    }}
                  ></SVG>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "end",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                  }}
                >
                  total: {"total"}pt
                </div>
                <div
                  style={{
                    fontSize: "64px",
                    fontWeight: "bold",
                  }}
                >
                  <div>スコア</div>
                  <div>{"score"}pt</div>
                </div>
                {questionNum < 5 ? (
                  <button
                    onClick={next}
                    className="w-64 h-15 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl"
                  >
                    次へ
                  </button>
                ) : (
                  <Link href="/result">
                    <button className="w-64 h-15 mb-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xl">
                      結果発表
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
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
          <button
            onClick={submit}
            style={{
              zIndex: 5,
              position: "absolute",
              bottom: "50px",
              left: "50px",
            }}
            className="w-24 h-24 bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
          >
            決定
          </button>
        </Wrapper>
      </div>
    </>
  );
}