import { ListResponse, ListResponseType, PostEntity } from 'models';
import { Inject, Singleton } from 'typescript-ioc';
import { Api } from 'utils';

@Singleton
export default class PostTransport {
  @Inject api: Api;

  private POST_ENDPOINT: string = 'posts';

  retrievePostList(): Promise<ListResponseType<PostEntity>> {
    return this.api.get(this.POST_ENDPOINT).then(ListResponse.fromServer.bind(null, PostEntity));
  }

  createPost(post?: PostEntity): Promise<PostEntity> {
    return this.api.post(this.POST_ENDPOINT, post.toServer()).then(PostEntity.fromServer);
  }

  likePost(id: number): Promise<void> {
    return this.api.post(this.POST_ENDPOINT);
  }
}
