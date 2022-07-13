import { Pool } from 'pg'

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'personal-app',
    port: 5432,
    // ssl: { rejectUnauthorized: false }
})