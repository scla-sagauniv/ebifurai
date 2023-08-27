import Map from "@/components/Game/map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { data } from "../game/data";
// @ts-ignore
import geojson2svg from "geojson-to-svg";
import SVG from "react-inlinesvg";
import { useState } from "react";
import Link from "next/link";

type QuestionResult = {
  question: number;
  choiced: number;
  score: number;
};

export default function Game() {
  const [resultNum, setResultNum] = useState(1);
  const [questionGeoJson, setQuestionGeoJson] = useState(null);
  const resultData: QuestionResult[] = [
    { question: 123, choiced: 1234, score: 1 },
    { question: 123, choiced: 1234, score: 2 },
    { question: 123, choiced: 1234, score: 3 },
    { question: 123, choiced: 1234, score: 44 },
    { question: 123, choiced: 1234, score: 5 },
  ];

  const next = () => {
    setResultNum((prev) => prev + 1);
  };

  const prev = () => {
    setResultNum((prev) => prev - 1);
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
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: "5px",
              width: "50%",
              height: "600px",
              borderRadius: "10%",
              textAlign: "center",
              marginLeft: "100px",
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
                    height: "250",
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
                    height: "250",
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
              {resultNum > 1 ? (
                <button
                  onClick={prev}
                  className="w-32 h-15 mb-3 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-xl"
                >
                  前へ
                </button>
              ) : (
                <button className="w-32 h-15 mb-3 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-xl opacity-50 cursor-not-allowed">
                  前へ
                </button>
              )}
              <div
                style={{
                  fontSize: "58px",
                  fontWeight: "bold",
                }}
              >
                <div>スコア</div>
                <div>{"score"}pt</div>
              </div>
              {resultNum < 5 ? (
                <button
                  onClick={next}
                  className="w-32 h-15 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl"
                >
                  次へ
                </button>
              ) : (
                <button className="w-32 h-15 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl opacity-50 cursor-not-allowed">
                  次へ
                </button>
              )}
            </div>
          </div>
          <div style={{ marginRight: "auto" }}>
            <div
              style={{
                fontSize: "64px",
              }}
            >
              最終スコア
            </div>
            <div
              style={{
                fontSize: "64px",
                paddingLeft: "30px",
              }}
            >
              {"score"}pt
            </div>
            <div
              style={{
                fontSize: "64px",
              }}
            >
              ランキング
            </div>
            <div
              style={{
                fontSize: "64px",
                paddingLeft: "30px",
              }}
            >
              {"rank"}位
            </div>
          </div>
        </div>
        <Link
          href="/topPage"
          style={{
            margin: "0 auto",
          }}
        >
          <button className="w-32 h-16 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
            ホームへ
          </button>
        </Link>
      </div>
    </>
  );
}
