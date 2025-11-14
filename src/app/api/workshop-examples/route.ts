import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    // If slug is provided, fetch single example
    if (slug) {
      const stmt = db.prepare('SELECT * FROM workshop_examples WHERE slug = ?');
      const example = stmt.get(slug);

      if (!example) {
        return NextResponse.json({ error: 'Example not found' }, { status: 404 });
      }

      return NextResponse.json(example);
    }

    // Otherwise fetch all examples
    const stmt = db.prepare('SELECT * FROM workshop_examples ORDER BY created_at DESC');
    const examples = stmt.all();

    return NextResponse.json(examples);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch workshop examples' }, { status: 500 });
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
    const { title, slug, description, image_url, gallery_images } = body;

    const stmt = db.prepare(
      'INSERT INTO workshop_examples (title, slug, description, image_url, gallery_images) VALUES (?, ?, ?, ?, ?)'
    );
    const result = stmt.run(
      title,
      slug,
      description,
      image_url || null,
      gallery_images ? JSON.stringify(gallery_images) : null
    );

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create workshop example' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, title, slug, description, image_url, gallery_images } = body;

    const stmt = db.prepare(
      'UPDATE workshop_examples SET title = ?, slug = ?, description = ?, image_url = ?, gallery_images = ? WHERE id = ?'
    );
    stmt.run(
      title,
      slug,
      description,
      image_url || null,
      gallery_images ? JSON.stringify(gallery_images) : null,
      id
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update workshop example' }, { status: 500 });
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

    const stmt = db.prepare('DELETE FROM workshop_examples WHERE id = ?');
    stmt.run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete workshop example' }, { status: 500 });
  }
}
