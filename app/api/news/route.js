import { NextResponse } from "next/server";
import pool from "@/lib/db"; // ✅ Import shared MySQL pool

export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT id, region_name, title, date, file_path FROM news ORDER BY date DESC"
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
