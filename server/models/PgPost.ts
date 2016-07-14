class PgPost implements Post {
  private dbase;
  private props: {
    id: number,
  };

  constructor(dbase, id: number, cached: object) {
    this.dbase = dbase;
    this.props = {
      id,
    };
  }

  public id(): number {
    return this.props.id;
  }

  public async title(): Promise<string> {
    const { title } = await this.dbase.one(
      `SELECT title FROM posts WHERE id = $1`,
      this.props.id
    );

    return title;
  }

  public async rename(title: string): Promise<string> {
    return await this.dbase.none(
      `UPDATE posts SET title = $2 WHERE id = $1`,
      this.props.id, title
    );
  }
}

export default PgPost;

class CachedPgPost extends PgPost {
  post: Post;
  cached: object;

  constructor(post: Post, cached: object) {
    super();
    this.post = post;
    this.cached = cached;
  }

  public async title() {
    if (this.cached.title) {
      return this.cached.title;
    }

    return await this.post.title();
  }
}
