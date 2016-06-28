"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const PgPost_1 = require('./PgPost');
class PgPosts {
    constructor(dbase) {
        this.dbase = dbase;
    }
    add(title) {
        return __awaiter(this, void 0, Promise, function* () {
            const { id } = yield this.dbase.one(`INSERT INTO posts (title) VALUES ($1) RETURNING id`, title);
            return new PgPost_1.default(this.dbase, id);
        });
    }
    iterate() {
        return __awaiter(this, void 0, Promise, function* () {
            const ids = yield this.dbase.query(`SELECT id FROM posts`);
            return ids.map(({ id }) => {
                return new PgPost_1.default(this.dbase, id);
            });
        });
    }
    call(dbase) {
        this.dbase = dbase;
        return this;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PgPosts;
