class PgPost implements Post {
  private dbase;
  private props: {
    id: number,
  };
  // Implement caching

  constructor(dbase, id: number) {
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
