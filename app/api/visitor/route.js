import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req) {
  try {
    // 1️⃣ Get IP address
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "UNKNOWN";

    const today = new Date().toISOString().split("T")[0];

    // 2️⃣ Check if this IP already visited today
    const [existing] = await pool.query(
      "SELECT id FROM visitors WHERE ip_address = ? AND visit_date = ?",
      [ip, today]
    );

    // 3️⃣ Insert only if not visited today
    if (existing.length === 0) {
      await pool.query(
        "INSERT INTO visitors (ip_address, visit_date) VALUES (?, ?)",
        [ip, today]
      );
    }

    // 4️⃣ Get total visitors
    const [rows] = await pool.query(
      "SELECT COUNT(*) AS total FROM visitors"
    );

    return NextResponse.json({ total: rows[0].total });
  } catch (error) {
    console.error("Visitor API Error:", error);
    return NextResponse.json(
      { error: "Visitor count failed" },
      { status: 500 }
    );
  }
}
