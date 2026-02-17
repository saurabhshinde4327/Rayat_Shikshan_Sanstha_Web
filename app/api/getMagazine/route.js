import pool from "@/lib/db";

export async function GET() {
  try {
    // ✅ Fetch all magazines, newest first
    const [rows] = await pool.execute(
      "SELECT id, month, pdf_link, created_at, cover_link FROM rayat_magazine ORDER BY created_at DESC"
    );

    // ✅ No 15-day filtering, return data as-is
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Database Error:", error);
    return new Response(
      JSON.stringify({ message: "Database connection failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
