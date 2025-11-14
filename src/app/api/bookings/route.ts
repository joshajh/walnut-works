import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const stmt = db.prepare('SELECT * FROM booking_requests ORDER BY created_at DESC');
    const bookings = stmt.all();

    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, workshop_id } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const stmt = db.prepare(
      'INSERT INTO booking_requests (name, email, phone, message, workshop_id) VALUES (?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, email, phone || null, message, workshop_id || null);

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit booking request' }, { status: 500 });
  }
}
