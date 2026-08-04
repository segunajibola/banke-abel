import type { RsvpFormData } from "@/types";

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      { error: "RSVP collection isn't configured yet. Please contact the couple directly." },
      { status: 500 },
    );
  }

  const data = (await request.json()) as RsvpFormData;

  if (!data.name || !data.attending) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
    });

    if (!res.ok) {
      throw new Error(`Sheet webhook responded with ${res.status}`);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("RSVP submission failed:", error);
    return Response.json(
      { error: "We couldn't save your RSVP right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
