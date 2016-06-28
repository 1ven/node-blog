"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const PgPosts_1 = require('./models/PgPosts');
const db_1 = require('./db');
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const posts = new PgPosts_1.default(db_1.default);
            /* await posts.add('New'); */
            for (const post of yield posts.iterate()) {
                const title = yield post.title();
                console.log(title);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
})();
