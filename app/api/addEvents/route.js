import pool from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Upload directory
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const files = formData.getAll("file"); // ⬅️ GET ALL FILES

    if (!title || files.length === 0) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    let filePaths = [];

    // Save all uploaded files
    for (const file of files) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, fileBuffer);

      filePaths.push(`/uploads/${fileName}`);
    }

    // Save to DB — store JSON array of file paths
    await pool.execute(
      "INSERT INTO activity (title, file_path) VALUES (?, ?)",
      [title, JSON.stringify(filePaths)]
    );

    return NextResponse.json(
      { message: "Event added successfully!", files: filePaths },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error uploading event", error: error.message },
      { status: 500 }
    );
  }
}
