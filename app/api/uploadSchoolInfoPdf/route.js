import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "PDF file required" }, { status: 400 });
    }

    const name = file.name || "";
    if (!name.toLowerCase().endsWith(".pdf")) {
      return NextResponse.json({ error: "Only PDF files allowed" }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const fileName = `schoolinfo-${Date.now()}-${name.replace(/\s+/g, "_")}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    const uploadPath = path.join(uploadDir, fileName);
    fs.writeFileSync(uploadPath, bytes);

    const filePath = `/uploads/${fileName}`;
    return NextResponse.json({ filePath }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
