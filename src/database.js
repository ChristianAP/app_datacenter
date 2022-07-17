import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
    user: 'rrjxsqupfjntgw',
    password: '45ec0a83e3660822b9e224bfbaf785ed166af2520f29adbe492378f387372d69',
    database: 'd9fa3eq467bk6u',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})