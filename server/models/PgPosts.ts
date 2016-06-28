import PgPost from './PgPost';

class PgPosts implements Posts {
  private dbase;

  constructor(dbase) {
    this.dbase = dbase;
  }

  public async add(title: string): Promise<Post> {
    const { id } = await this.dbase.one(
      `INSERT INTO posts (title) VALUES ($1) RETURNING id`,
      title
    );
    return new PgPost(this.dbase, id);
  }

  public async iterate(): Promise<Iterable<Post>> {
    const ids = await this.dbase.query(
      `SELECT id FROM posts`
    );
    return ids.map(({ id }) => {
      return new PgPost(this.dbase, id);
    });
  }

  public call(dbase): Callable {
    this.dbase = dbase;
    return this; 
  }
}
// Also can be class `OrderedPgPosts` where will be implemented methods for order entries. Or `OrderedEntries` if need to implement ordering in many models.

export default PgPosts;
