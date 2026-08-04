import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { couple, event } from "@/lib/data";

function drawCentered(
  page: import("pdf-lib").PDFPage,
  text: string,
  font: import("pdf-lib").PDFFont,
  size: number,
  y: number,
  color: ReturnType<typeof rgb>,
  pageWidth: number,
) {
  const textWidth = font.widthOfTextAtSize(text, size);
  page.drawText(text, { x: (pageWidth - textWidth) / 2, y, size, font, color });
}

export async function GET() {
  const bgPath = path.join(process.cwd(), "public", "images", "invitation-bg.jpg");
  const bgBuffer = await readFile(bgPath);

  const pdfDoc = await PDFDocument.create();
  const width = 540;
  const height = 675;
  const page = pdfDoc.addPage([width, height]);

  const bgImage = await pdfDoc.embedJpg(bgBuffer);
  page.drawImage(bgImage, { x: 0, y: 0, width, height });
  // pdf-lib has no native gradient fill, so a flat scrim stands in for the
  // web hero's CSS gradient — layered rectangles produced visible seams.
  page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(0.08, 0.06, 0.04), opacity: 0.6 });

  const serifBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const serifItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const sans = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const white = rgb(1, 1, 1);
  const gold = rgb(0.91, 0.85, 0.71);
  const whiteMuted = rgb(0.85, 0.85, 0.85);

  drawCentered(page, couple.hashtag, sans, 14, height - 100, gold, width);
  drawCentered(page, `${couple.brideName} & ${couple.groomName}`, serifBold, 42, height - 160, white, width);
  drawCentered(page, couple.weddingDateDisplay.toUpperCase(), sans, 16, height - 200, white, width);
  drawCentered(page, `${event.time} • ${event.name}`, serifItalic, 16, height - 260, white, width);
  drawCentered(page, event.address, sans, 10, height - 280, whiteMuted, width);

  const pdfBytes = await pdfDoc.save();

  return new Response(new Uint8Array(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="banke-and-abel-invitation.pdf"',
    },
  });
}
