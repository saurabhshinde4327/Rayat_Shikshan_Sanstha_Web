import { NextResponse } from "next/server";
import pool from "@/lib/db";
import fs from "fs";
import path from "path";

// GET method to fetch notices
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT `id`, `title`, `file_path`, `created_at` FROM `pdf_links` ORDER BY created_at DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching notices:", error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}

// POST method to upload PDF
export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const file = formData.get("pdfFile");

    if (!title || !file) {
      return NextResponse.json({ error: "Title and PDF are required" }, { status: 400 });
    }

    // Convert file to buffer and save
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, buffer);

    // Save path to DB (relative to public folder)
    const dbFilePath = `/uploads/${fileName}`;
    await pool.execute(
      "INSERT INTO `pdf_links` (`title`, `file_path`) VALUES (?, ?)",
      [title, dbFilePath]
    );

    return NextResponse.json({ message: "PDF uploaded successfully" });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
