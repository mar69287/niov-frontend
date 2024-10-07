import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME

const connect = async () => {
  if (!MONGODB_URI || !DB_NAME) {
    throw new Error(
      'MONGODB_URI or DB_NAME is not defined in environment variables'
    )
  }

  const connectionState = mongoose.connection.readyState

  if (connectionState === 1) {
    console.log('Already connected')
    return
  }

  if (connectionState === 2) {
    console.log('Connecting...')
    return
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
      bufferCommands: false
    })
    console.log('Connected!')
  } catch (error) {
    console.log('Error in connecting to database', error)
    throw new Error('Error connecting to database')
  }
}

export default connect
