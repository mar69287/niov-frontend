// File: app/api/waitlist/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Extract data from the request body
    const { fullName, email } = await request.json();
    console.log('Received form data:', { fullName, email });

    // Send a success response
    return NextResponse.json({ message: 'Waitlist submission successful' }, { status: 200 });
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json({ message: 'Failed to submit waitlist' }, { status: 500 });
  }
}
