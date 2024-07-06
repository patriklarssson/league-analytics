import dotenv from 'dotenv';
import { Db, MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let dbInstance: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    await client.connect();
    dbInstance = client.db('league');
    return dbInstance;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}

export function getDb(): Db | null {
  if (!dbInstance) {
    throw new Error('Database connection not established');
  }
  return dbInstance;
}
export { client };

// import dotenv from 'dotenv';
// import { MongoClient, ServerApiVersion } from 'mongodb';

// dotenv.config();

// const uri = process.env.MONGO_URI;

// if (!uri) {
//   throw new Error(
//     'Please define the MONGO_URI environment variable inside .env'
//   );
// }

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export const connectToDb = async () => {
//   await client.connect();
// };

// connectToDb()

// export const getDb = () => {
//   return client.db('league');
// };

// export const closeConnection = async () => {
//   await client.close();
// };
