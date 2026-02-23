import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// One-time: ALTER TABLE school_info ADD COLUMN mahiti_pustikka VARCHAR(500) NULL;

export async function POST(req) {
  try {
    const body = await req.json();
    const school_id = body.school_id;

    if (!school_id || school_id === 'undefined' || school_id === 'null') {
      return NextResponse.json({ error: 'Invalid school ID. Please log in again.' }, { status: 400 });
    }

    // Read fields explicitly (support both snake_case from form and camelCase)
    const principal_name = body.principal_name ?? body.principalName ?? null;
    const vice_principal_name = body.vice_principal_name ?? body.vicePrincipalName ?? null;
    const contact = body.contact ?? null;
    const email = body.email ?? null;
    const address = body.address ?? null;
    const motto = body.motto ?? null;
    const established = body.established ?? null;
    const affiliation = body.affiliation ?? null;
    const student_count = body.student_count ?? body.studentCount ?? null;
    const facilities = body.facilities ?? null;
    const achievements = body.achievements ?? null;
    const stdDivision = body.student_std_division ?? body.studentStdDivision ?? null;
    const medium = body.medium ?? null;
    const scholarship_result = body.scholarship_result ?? body.scholarshipResult ?? null;
    const ssc_result = body.ssc_result ?? body.sscResult ?? null;
    const hsc_result = body.hsc_result ?? body.hscResult ?? null;
    const mahiti_pustikka = body.mahiti_pustikka ?? body.mahitiPustikka ?? null;
    
    console.log("addSchoolInfo - mahiti_pustikka received:", mahiti_pustikka);

    // Same school_id: update existing row only, never insert duplicate (table has id as PK, not unique school_id)
    const [existing] = await pool.execute(
      'SELECT id FROM school_info WHERE school_id = ? LIMIT 1',
      [school_id]
    );

    if (existing.length > 0) {
      // UPDATE existing row
      const updateQuery = `
        UPDATE school_info SET
          principal_name = ?, vice_principal_name = ?, contact = ?, email = ?, address = ?,
          motto = ?, established = ?, affiliation = ?, student_count = ?, facilities = ?, achievements = ?,
          student_std_division = ?, medium = ?, scholarship_result = ?, ssc_result = ?, hsc_result = ?,
          mahiti_pustikka = ?
        WHERE school_id = ?
      `;
      const updateValues = [
        principal_name, vice_principal_name, contact, email, address,
        motto, established, affiliation, student_count, facilities, achievements,
        stdDivision ? JSON.stringify(stdDivision) : null, medium, scholarship_result, ssc_result, hsc_result,
        mahiti_pustikka,
        school_id,
      ];
      const [result] = await pool.execute(updateQuery, updateValues);
      console.log("UPDATE result - affectedRows:", result.affectedRows, "mahiti_pustikka:", mahiti_pustikka);
      if (result.affectedRows >= 0) {
        return NextResponse.json({ message: 'School information updated successfully' }, { status: 200 });
      }
    } else {
      // INSERT new row only when none exists for this school_id
      const insertQuery = `
        INSERT INTO school_info (
          school_id, principal_name, vice_principal_name, contact, email,
          address, motto, established, affiliation, student_count, facilities, achievements, student_std_division, medium, scholarship_result, ssc_result, hsc_result, mahiti_pustikka
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const insertValues = [
        school_id,
        principal_name, vice_principal_name, contact, email, address,
        motto, established, affiliation, student_count, facilities, achievements,
        stdDivision ? JSON.stringify(stdDivision) : null, medium, scholarship_result, ssc_result, hsc_result,
        mahiti_pustikka,
      ];
      const [result] = await pool.execute(insertQuery, insertValues);
      console.log("INSERT result - affectedRows:", result.affectedRows, "mahiti_pustikka:", mahiti_pustikka);
      if (result.affectedRows > 0) {
        return NextResponse.json({ message: 'School information added successfully' }, { status: 200 });
      }
    }

    return NextResponse.json({ error: 'Failed to save school information' }, { status: 500 });
  } catch (error) {
    console.error('Database Error:', error);
    console.error('Error details:', error.message, error.code);
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      details: error.message,
      hint: 'Ensure mahiti_pustikka column exists: ALTER TABLE school_info ADD COLUMN mahiti_pustikka VARCHAR(500) NULL;'
    }, { status: 500 });
  }
}
