// the call to here is http://localhost:3000/api/form

import { NextResponse } from 'next/server'
import connect from '@/lib/db'
import User from '@lib/models/user'

export const POST = async request => {
  try {
    const { email, fullName } = await request.json()
    console.log({email})
    console.log({fullName})

    if (!email || !fullName) {
      return NextResponse.json(
        { error: 'Both name and fullName are required' },
        { status: 400 }
      )
    }

    await connect()
    const newUser = new User({ email, fullName })
    await newUser.save()

    return NextResponse.json(
      { message: 'User is created', user: newUser },
      { status: 201 }
    )
  } catch (error) {
    return new NextResponse('Error in creating user' + error, { status: 500 })
  }
}
