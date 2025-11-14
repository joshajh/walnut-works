import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    // If slug is provided, fetch single artist with their artworks
    if (slug) {
      const artistStmt = db.prepare('SELECT * FROM artists WHERE slug = ?');
      const artist = artistStmt.get(slug);

      if (!artist) {
        return NextResponse.json({ error: 'Artist not found' }, { status: 404 });
      }

      const artworksStmt = db.prepare('SELECT * FROM artworks WHERE artist_id = ? ORDER BY created_at DESC');
      const artworks = artworksStmt.all((artist as any).id);

      return NextResponse.json({ ...artist, artworks });
    }

    // Otherwise fetch all artists
    const stmt = db.prepare('SELECT * FROM artists ORDER BY name ASC');
    const artists = stmt.all();

    return NextResponse.json(artists);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch artists' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, slug, bio, profile_image_url, website, instagram, twitter, email } = body;

    const stmt = db.prepare(
      'INSERT INTO artists (name, slug, bio, profile_image_url, website, instagram, twitter, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, slug, bio, profile_image_url || null, website || null, instagram || null, twitter || null, email || null);

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create artist' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, name, slug, bio, profile_image_url, website, instagram, twitter, email } = body;

    const stmt = db.prepare(
      'UPDATE artists SET name = ?, slug = ?, bio = ?, profile_image_url = ?, website = ?, instagram = ?, twitter = ?, email = ? WHERE id = ?'
    );
    stmt.run(name, slug, bio, profile_image_url || null, website || null, instagram || null, twitter || null, email || null, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update artist' }, { status: 500 });
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

    const stmt = db.prepare('DELETE FROM artists WHERE id = ?');
    stmt.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete artist' }, { status: 500 });
  }
}
