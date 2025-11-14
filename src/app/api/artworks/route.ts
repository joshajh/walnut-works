import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const artistId = searchParams.get('artist_id');

    let query = 'SELECT * FROM artworks';
    if (artistId) {
      query += ' WHERE artist_id = ?';
    }
    query += ' ORDER BY created_at DESC';

    const stmt = db.prepare(query);
    const artworks = artistId ? stmt.all(artistId) : stmt.all();

    return NextResponse.json(artworks);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch artworks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { artist_id, title, description, image_url, year, medium, dimensions } = body;

    const stmt = db.prepare(
      'INSERT INTO artworks (artist_id, title, description, image_url, year, medium, dimensions) VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(artist_id, title, description || null, image_url, year || null, medium || null, dimensions || null);

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create artwork' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, title, description, image_url, year, medium, dimensions } = body;

    const stmt = db.prepare(
      'UPDATE artworks SET title = ?, description = ?, image_url = ?, year = ?, medium = ?, dimensions = ? WHERE id = ?'
    );
    stmt.run(title, description || null, image_url, year || null, medium || null, dimensions || null, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update artwork' }, { status: 500 });
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

    const stmt = db.prepare('DELETE FROM artworks WHERE id = ?');
    stmt.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete artwork' }, { status: 500 });
  }
}
