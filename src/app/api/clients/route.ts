import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { clients } from '@/db/schema';
import { eq, like, or, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (id) {
      if (isNaN(parseInt(id))) {
        return NextResponse.json({ error: 'Valid ID is required', code: 'INVALID_ID' }, { status: 400 });
      }

      const client = await db.select()
        .from(clients)
        .where(eq(clients.id, parseInt(id)))
        .limit(1);

      if (client.length === 0) {
        return NextResponse.json({ error: 'Client not found', code: 'NOT_FOUND' }, { status: 404 });
      }

      return NextResponse.json(client[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');

    let query = db.select({
      id: clients.id,
      name: clients.name,
      company: clients.company,
      lastCallAt: clients.lastCallAt
    }).from(clients);

    if (search) {
      query = query.where(
        or(
          like(clients.name, `%${search}%`),
          like(clients.company, `%${search}%`)
        )
      );
    }

    const results = await query
      .orderBy(asc(clients.name))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, lastCallAt, email, phone } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required', code: 'MISSING_NAME' }, { status: 400 });
    }

    if (!company || typeof company !== 'string' || company.trim().length === 0) {
      return NextResponse.json({ error: 'Company is required', code: 'MISSING_COMPANY' }, { status: 400 });
    }

    if (lastCallAt !== undefined && lastCallAt !== null) {
      if (isNaN(parseInt(lastCallAt)) || !Number.isInteger(parseInt(lastCallAt))) {
        return NextResponse.json({ error: 'lastCallAt must be a valid integer', code: 'INVALID_LAST_CALL_AT' }, { status: 400 });
      }
    }

    if (email !== undefined && email !== null && email !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format', code: 'INVALID_EMAIL' }, { status: 400 });
      }
    }

    const newClient = await db.insert(clients).values({
      name: name.trim(),
      company: company.trim(),
      lastCallAt: lastCallAt ? parseInt(lastCallAt) : null,
      email: email ? email.trim() : null,
      phone: phone ? phone.trim() : null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }).returning();

    return NextResponse.json(newClient[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ error: 'Valid ID is required', code: 'INVALID_ID' }, { status: 400 });
    }

    const body = await request.json();
    const { name, company, lastCallAt, email, phone } = body;

    const updates: any = {};
    let hasUpdates = false;

    if (name !== undefined) {
      if (typeof name !== 'string' || name.trim().length === 0) {
        return NextResponse.json({ error: 'Name cannot be empty', code: 'INVALID_NAME' }, { status: 400 });
      }
      updates.name = name.trim();
      hasUpdates = true;
    }

    if (company !== undefined) {
      if (typeof company !== 'string' || company.trim().length === 0) {
        return NextResponse.json({ error: 'Company cannot be empty', code: 'INVALID_COMPANY' }, { status: 400 });
      }
      updates.company = company.trim();
      hasUpdates = true;
    }

    if (lastCallAt !== undefined) {
      if (lastCallAt !== null && (isNaN(parseInt(lastCallAt)) || !Number.isInteger(parseInt(lastCallAt)))) {
        return NextResponse.json({ error: 'lastCallAt must be a valid integer or null', code: 'INVALID_LAST_CALL_AT' }, { status: 400 });
      }
      updates.lastCallAt = lastCallAt ? parseInt(lastCallAt) : null;
      hasUpdates = true;
    }

    if (email !== undefined) {
      if (email !== null && email !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return NextResponse.json({ error: 'Invalid email format', code: 'INVALID_EMAIL' }, { status: 400 });
        }
      }
      updates.email = email ? email.trim() : null;
      hasUpdates = true;
    }

    if (phone !== undefined) {
      updates.phone = phone ? phone.trim() : null;
      hasUpdates = true;
    }

    if (!hasUpdates) {
      return NextResponse.json({ error: 'No valid fields provided for update', code: 'NO_UPDATES' }, { status: 400 });
    }

    updates.updatedAt = new Date().toISOString();

    const updatedClient = await db.update(clients)
      .set(updates)
      .where(eq(clients.id, parseInt(id)))
      .returning();

    if (updatedClient.length === 0) {
      return NextResponse.json({ error: 'Client not found', code: 'NOT_FOUND' }, { status: 404 });
    }

    return NextResponse.json(updatedClient[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ error: 'Valid ID is required', code: 'INVALID_ID' }, { status: 400 });
    }

    const deletedClient = await db.delete(clients)
      .where(eq(clients.id, parseInt(id)))
      .returning();

    if (deletedClient.length === 0) {
      return NextResponse.json({ error: 'Client not found', code: 'NOT_FOUND' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Client deleted successfully', client: deletedClient[0] }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}