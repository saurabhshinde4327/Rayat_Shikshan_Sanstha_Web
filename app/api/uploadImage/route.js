import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import pool from "@/lib/db";

export const runtime = "nodejs"; // REQUIRED for fs access

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

    // ✅ Correct filesystem path
    const uploadDir = path.join(process.cwd(), "public/uploads");

    // ✅ Ensure directory exists
    await mkdir(uploadDir, { recursive: true });

    const uploadPath = path.join(uploadDir, fileName);

    await writeFile(uploadPath, buffer);

    // ✅ Public URL path
    const filePath = `/uploads/${fileName}`;

    await pool.execute(
      "INSERT INTO slider (file_path) VALUES (?)",
      [filePath]
    );

    return NextResponse.json({
      message: "Image uploaded successfully",
      filePath,
    });

  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { message: "Error uploading image", error: error.message },
      { status: 500 }
    );
  }
}
