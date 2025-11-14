import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    if (section) {
      const stmt = db.prepare('SELECT * FROM about_content WHERE section = ?');
      const content = stmt.get(section);
      return NextResponse.json(content || null);
    }

    const stmt = db.prepare('SELECT * FROM about_content');
    const content = stmt.all();

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch about content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { section, content } = body;

    const stmt = db.prepare(
      'INSERT INTO about_content (section, content) VALUES (?, ?) ON CONFLICT(section) DO UPDATE SET content = ?, updated_at = CURRENT_TIMESTAMP'
    );
    stmt.run(section, content, content);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update about content' }, { status: 500 });
  }
}
