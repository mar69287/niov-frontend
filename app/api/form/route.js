// the call to here is http://localhost:3000/api/form

import { NextResponse } from 'next/server'
import connect from '@/lib/db'
import User from '@lib/models/user'

export const POST = async request => {
  try {
    const { email, username } = await request.json()

    if (!email || !username) {
      return NextResponse.json(
        { error: 'Both name and username are required' },
        { status: 400 }
      )
    }

    await connect()
    const newUser = new User({ email, username })
    await newUser.save()

    return NextResponse.json(
      { message: 'User is created', user: newUser },
      { status: 201 }
    )
  } catch (error) {
    return new NextResponse('Error in creating user' + error, { status: 500 })
  }
}
