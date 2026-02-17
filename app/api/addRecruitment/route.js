import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import pool from '@/lib/db';

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get('title');
  const date = formData.get('date');
  const file = formData.get('file');
  const link = formData.get('link');

  if (!title || !date || (!file && !link)) {
    return NextResponse.json(
      { message: 'Title, date and file or link are required' },
      { status: 400 }
    );
  }

  let filePath = null;

  try {
    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = Date.now() + '_' + file.name;
      filePath = `/uploads/${fileName}`;
      await fs.writeFile(path.join(process.cwd(), 'public', 'uploads', fileName), buffer);
    }

    await pool.execute(
      'INSERT INTO recruitment (title, date, file_path, external_link) VALUES (?, ?, ?, ?)',
      [title, date, filePath, link || null]
    );

    return NextResponse.json({ message: 'Recruitment added successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error in recruitment API:', error);
    return NextResponse.json({ message: 'Upload failed', error: error.message }, { status: 500 });
  }
}
