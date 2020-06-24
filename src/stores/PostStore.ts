import { promisedComputed, PromisedComputedValue } from 'computed-async-mobx';
import { action, observable } from 'mobx';
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

  @action.bound
  async createPost(post: PostEntity): Promise<void> {
    const res = await this.transport.createPost(post);
    if (res) this.postsHash.unshift(res);
  }

  @action.bound
  async likePost(id: number): Promise<void> {
    const post = this.postsHash.find(post => post.id === id);
    try {
      const res = await this.transport.changeLike(id);
      post.likes.count = res.count;
      post.likes.userLikes = res.userLikes;
    } catch (err) {
      console.error(err);
    }
  }
}
