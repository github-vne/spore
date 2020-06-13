import { ListResponse, ListResponseType, PostEntity } from 'models';
import { LikeEntity } from 'models/PostEntity';
import { Inject, Singleton } from 'typescript-ioc';
import { Api } from 'utils';

@Singleton
export default class PostTransport {
  @Inject api: Api;

  private LIKES: string = 'likes/change';
  private POST_ENDPOINT: string = 'posts';

  retrievePostList(): Promise<ListResponseType<PostEntity>> {
    return this.api.get(this.POST_ENDPOINT).then(ListResponse.fromServer.bind(null, PostEntity));
  }

  createPost(post?: PostEntity): Promise<PostEntity> {
    return this.api.post(this.POST_ENDPOINT, post.toServer()).then(PostEntity.fromServer);
  }

  changeLike(id: number): Promise<LikeEntity> {
    return this.api.patch(this.LIKES, { id, type: 'post' }).then(LikeEntity.fromServer);
  }
}
