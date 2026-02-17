import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT id, title, file_path FROM activity ORDER BY id DESC"
    );

    const updated = rows.map((item) => {
      let files = [];

      try {
        files = JSON.parse(item.file_path);
        if (!Array.isArray(files)) files = [];
      } catch (e) {
        console.log("JSON parse error for file_path:", item.file_path);
        files = [];
      }

      return {
        ...item,
        file_path: files,
      };
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json([], { status: 200 });
  }
}
