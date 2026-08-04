import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { couple, event } from "@/lib/data";

export async function GET() {
  const bgPath = path.join(process.cwd(), "public", "images", "invitation-bg.jpg");
  const bgBuffer = await readFile(bgPath);
  const bgDataUri = `data:image/jpeg;base64,${bgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", position: "relative", width: "100%", height: "100%" }}>
        <img
          src={bgDataUri}
          width={1080}
          height={1350}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(to bottom, rgba(20,15,10,0.55), rgba(20,15,10,0.5) 40%, rgba(20,15,10,0.8))",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "90px 70px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#e8d9b5",
            }}
          >
            {couple.hashtag}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 100,
              color: "#ffffff",
            }}
          >
            {couple.brideName} &amp; {couple.groomName}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 34,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {couple.weddingDateDisplay}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 56,
              fontSize: 30,
              color: "#ffffff",
            }}
          >
            {event.time} &bull; {event.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              fontSize: 22,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 780,
            }}
          >
            {event.address}
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1350,
      headers: {
        "Content-Disposition": 'attachment; filename="banke-and-abel-invitation.png"',
      },
    },
  );
}
