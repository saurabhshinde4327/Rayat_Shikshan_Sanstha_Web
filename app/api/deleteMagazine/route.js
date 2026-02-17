import pool from "@/lib/db"; // ✅ shared DB pool

export async function DELETE(request) {
  try {
    // ✅ Get ID from query string
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ Delete record from DB
    const [result] = await pool.query(
      "DELETE FROM rayat_magazine WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: "Record not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error deleting magazine:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete record" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
