import { NextResponse } from "next/server";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const school_id = searchParams.get("school_id");

    if (!school_id) {
      return NextResponse.json({ error: "Missing school_id" }, { status: 400 });
    }

    // One row per school: latest school_info by id (no duplicate rows). LEFT JOIN so we get a row even when school_info is missing.
    const [rows] = await pool.execute(
      `SELECT 
         s.name AS school_name,
         si.principal_name, si.vice_principal_name, si.contact, si.email, si.address,
         si.motto, si.established, si.affiliation, si.student_count, si.facilities,
         si.achievements, si.student_std_division, si.medium, si.scholarship_result,
         si.ssc_result, si.hsc_result, si.mahiti_pustikka
       FROM school s
       LEFT JOIN school_info si ON si.school_id = s.school_id
         AND si.id = (SELECT MAX(id) FROM school_info WHERE school_id = s.school_id)
       WHERE s.school_id = ?`,
      [school_id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const row = rows[0];
    // Ensure all keys exist for form (MySQL may omit nulls in some drivers)
    return NextResponse.json({
      school_name: row?.school_name ?? null,
      principal_name: row?.principal_name ?? null,
      vice_principal_name: row?.vice_principal_name ?? null,
      contact: row?.contact ?? null,
      email: row?.email ?? null,
      address: row?.address ?? null,
      motto: row?.motto ?? null,
      established: row?.established ?? null,
      affiliation: row?.affiliation ?? null,
      student_count: row?.student_count ?? null,
      facilities: row?.facilities ?? null,
      achievements: row?.achievements ?? null,
      student_std_division: row?.student_std_division ?? null,
      medium: row?.medium ?? null,
      scholarship_result: row?.scholarship_result ?? null,
      ssc_result: row?.ssc_result ?? null,
      hsc_result: row?.hsc_result ?? null,
      mahiti_pustikka: row?.mahiti_pustikka ?? null,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
