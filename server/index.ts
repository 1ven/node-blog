import PgPost from './models/PgPost';
import PgPosts from './models/PgPosts';
import dbase from './db';

(async function () {
  try {
    const posts = new PgPosts(dbase);
    /* await posts.add('New'); */

    for (const post of await posts.iterate()) {
      const title = await post.title();
      console.log(title);
    }
  } catch(err) {
    console.log(err);
  }
})();
