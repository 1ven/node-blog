"use strict";
const pgPromise = require('pg-promise');
const pgp = pgPromise({});
const dbase = pgp('postgres://ivan:123456@localhost:5432/blog');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbase;
