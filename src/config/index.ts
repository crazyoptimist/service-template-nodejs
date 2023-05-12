import { config } from 'dotenv';
config();

export const FOO = process.env.FOO || 'VAR';
