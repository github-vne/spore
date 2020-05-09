import { promisedComputed, PromisedComputedValue } from 'computed-async-mobx';
import { observable } from 'mobx';
import { PostEntity } from 'models';
import PostTransport from 'transport/PostTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class PostStore {
  @Inject private transport: PostTransport;
  @observable private postsHash: Array<PostEntity>;

  postList: PromisedComputedValue<Array<PostEntity>> = promisedComputed([], async () => {
    if (this.postsHash) return this.postsHash;
    try {
      const res = await this.transport.retrievePostList();
      return (this.postsHash = res.results);
    } catch (e) {
      return (this.postsHash = []);
    }
  });

  createPost(post: PostEntity): void {
    this.transport.createPost(post);
  }
}
