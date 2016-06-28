interface Posts {
  iterate(): Promise<Iterable<Post>>;
  add(title: string): Promise<Post>;
}

interface Post {
  id(): number;
  title(): Promise<string>;
}

interface Callable {
  call(dbase): Callable;
}
