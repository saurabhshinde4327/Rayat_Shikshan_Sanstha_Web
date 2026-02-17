export const runtime = "nodejs";

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const id = formData.get("id");
    const title = formData.get("title");
    const designation = formData.get("designation");
    const sub_designation = formData.get("sub_designation");
    const file = formData.get("file");

    if (!id) {
      return NextResponse.json({ error: "ID missing" }, { status: 400 });
    }

    let filePath = "";

    if (file && file.name && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const filename = `${Date.now()}-${file.name}`;
      const fullPath = path.join(uploadDir, filename);

      await fs.writeFile(fullPath, buffer);
      filePath = `/uploads/${filename}`;
    }

    let query = `
      UPDATE managements 
      SET title = ?, designation = ?, sub_designation = ?
    `;
    let params = [title, designation, sub_designation];

    if (filePath) {
      query += `, file_url = ?`;
      params.push(filePath);
    }

    query += ` WHERE id = ?`;
    params.push(id);

    await pool.query(query, params);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Update Error:", error);
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}
