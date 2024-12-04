import { NextResponse } from 'next/server';
import { prisma } from "@/utils/connect";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validation for required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Save contact data to the database
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    // Return success response
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error('Error saving contact data:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
