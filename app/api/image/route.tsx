import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  // const title = req.url;
  const title = "My Dynamic Image";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {title}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
