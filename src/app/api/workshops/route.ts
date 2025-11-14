import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const upcoming = searchParams.get('upcoming');
    const slug = searchParams.get('slug');

    // If slug is provided, fetch single workshop
    if (slug) {
      const stmt = db.prepare('SELECT * FROM workshops WHERE slug = ?');
      const workshop = stmt.get(slug);

      if (!workshop) {
        return NextResponse.json({ error: 'Workshop not found' }, { status: 404 });
      }

      return NextResponse.json(workshop);
    }

    // Otherwise fetch all workshops
    let query = 'SELECT * FROM workshops';
    if (upcoming !== null) {
      query += ' WHERE is_upcoming = ?';
    }
    query += ' ORDER BY date IS NULL, date DESC';

    const stmt = db.prepare(query);
    const workshops = upcoming !== null ? stmt.all(upcoming === 'true' ? 1 : 0) : stmt.all();

    return NextResponse.json(workshops);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch workshops' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Check admin auth
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, description, date, location, image_url, is_upcoming } = body;

    const stmt = db.prepare(
      'INSERT INTO workshops (title, slug, description, date, location, image_url, is_upcoming) VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(title, slug, description, date || null, location || null, image_url || null, is_upcoming ? 1 : 0);

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create workshop' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, title, slug, description, date, location, image_url, is_upcoming } = body;

    const stmt = db.prepare(
      'UPDATE workshops SET title = ?, slug = ?, description = ?, date = ?, location = ?, image_url = ?, is_upcoming = ? WHERE id = ?'
    );
    stmt.run(title, slug, description, date || null, location || null, image_url || null, is_upcoming ? 1 : 0, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update workshop' }, { status: 500 });
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

    const stmt = db.prepare('DELETE FROM workshops WHERE id = ?');
    stmt.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete workshop' }, { status: 500 });
  }
}
