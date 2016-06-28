import * as pgPromise from 'pg-promise';

const pgp = pgPromise({});

const dbase = pgp('postgres://ivan:123456@localhost:5432/blog');

export default dbase;
