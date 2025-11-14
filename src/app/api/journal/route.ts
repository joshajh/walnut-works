import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const publishedOnly = searchParams.get('published') !== 'false';

    if (slug) {
      const stmt = db.prepare('SELECT * FROM journal_entries WHERE slug = ?');
      const entry = stmt.get(slug);
      return NextResponse.json(entry || null);
    }

    let query = 'SELECT * FROM journal_entries';
    if (publishedOnly) {
      query += ' WHERE published = 1';
    }
    query += ' ORDER BY created_at DESC';

    const stmt = db.prepare(query);
    const entries = stmt.all();

    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch journal entries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, content, excerpt, image_url, published } = body;

    const stmt = db.prepare(
      'INSERT INTO journal_entries (title, slug, content, excerpt, image_url, published) VALUES (?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(title, slug, content, excerpt || null, image_url || null, published ? 1 : 0);

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create journal entry' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, title, slug, content, excerpt, image_url, published } = body;

    const stmt = db.prepare(
      'UPDATE journal_entries SET title = ?, slug = ?, content = ?, excerpt = ?, image_url = ?, published = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    );
    stmt.run(title, slug, content, excerpt || null, image_url || null, published ? 1 : 0, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update journal entry' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const stmt = db.prepare('DELETE FROM journal_entries WHERE id = ?');
    stmt.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete journal entry' }, { status: 500 });
  }
}
