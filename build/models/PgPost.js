"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class PgPost {
    constructor(dbase, id) {
        this.dbase = dbase;
        this.props = {
            id: id,
        };
    }
    id() {
        return this.props.id;
    }
    title() {
        return __awaiter(this, void 0, Promise, function* () {
            const { title } = yield this.dbase.one(`SELECT title FROM posts WHERE id = $1`, this.props.id);
            return title;
        });
    }
    rename(title) {
        return __awaiter(this, void 0, Promise, function* () {
            return yield this.dbase.none(`UPDATE posts SET title = $2 WHERE id = $1`, this.props.id, title);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PgPost;
