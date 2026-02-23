import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import pool from "@/lib/db"; // ✅ Import shared pool
import bcrypt from "bcryptjs"; // ✅ Import bcrypt for password comparison

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const cookieStore = await cookies(); // ✅ Await cookies in Next.js 15

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password are required" });
    }

    console.log("Login attempt for:", email);

    // Query user by email
    let rows;
    try {
      [rows] = await pool.query(
        "SELECT id, school_id, email, password FROM users WHERE email = ?",
        [email]
      );
    } catch (dbError) {
      console.error("Database Query Error:", dbError);
      return NextResponse.json({ success: false, message: "Database connection error" }, { status: 500 });
    }

    if (rows.length === 0) {
      console.log("User not found:", email);
      return NextResponse.json({ success: false, message: "Invalid credentials" });
    }

    const user = rows[0];

    // Compare hashed password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Password mismatch for:", email);
      return NextResponse.json({ success: false, message: "Invalid credentials" });
    }

    // Store `school_id` in session cookie
    cookieStore.set("school_id", user.school_id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
    });

    console.log("Login successful for:", email);
    return NextResponse.json({ success: true, school_id: user.school_id, message: "Login successful" });
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
