import Map from "@/components/Game/map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Game() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY!} render={render}>
        <Map></Map>
      </Wrapper>
    </div>
  );
}
