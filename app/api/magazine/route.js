import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";

// Handle GET: Fetch all magazines
export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, month, pdf_link, cover_link, created_at FROM rayat_magazine ORDER BY created_at DESC"
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch magazines" }, { status: 500 });
  }
}

// Handle POST: Upload a new magazine
export async function POST(req) {
  try {
    const formData = await req.formData();
    const month = formData.get("month");
    const pdfFile = formData.get("pdf");
    const coverFile = formData.get("cover");

    if (!month || !pdfFile || !coverFile) {
      return NextResponse.json({ error: "Month, PDF, and Cover Image required" }, { status: 400 });
    }

    // Save PDF
    const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());
    const pdfPath = path.join(process.cwd(), "public", "uploads", pdfFile.name);
    await writeFile(pdfPath, pdfBuffer);
    const pdfUrl = `/uploads/${pdfFile.name}`;

    // Save Cover Image
    const coverBuffer = Buffer.from(await coverFile.arrayBuffer());
    const coverPath = path.join(process.cwd(), "public", "uploads", coverFile.name);
    await writeFile(coverPath, coverBuffer);
    const coverUrl = `/uploads/${coverFile.name}`;

    // Save to database
    await pool.query(
      "INSERT INTO rayat_magazine (month, pdf_link, cover_link) VALUES (?, ?, ?)",
      [month, pdfUrl, coverUrl]
    );

    return NextResponse.json({ message: "Magazine uploaded successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
