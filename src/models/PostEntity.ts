import { observable } from 'mobx';
import { UserEntity } from 'models';
import { custom, deserialize, serializable, SKIP } from 'serializr';
import { Singleton } from 'typescript-ioc';
import EntityWithAttaches from './EntityWithAttaches';

@Singleton
export default class PostEntity extends EntityWithAttaches {
  @observable
  @serializable
  title: string;

  @observable
  @serializable
  text: string;

  @observable
  @serializable
  photo: string;

  @observable
  @serializable(custom(_ => 1, UserEntity.fromServer))
  owner: UserEntity;

  @observable
  @serializable(
    custom(
      _ => SKIP,
      val => val.count
    )
  )
  likes: number;

  static fromServer(rawData: object): PostEntity {
    if (!rawData) return;
    return deserialize(PostEntity, rawData);
  }
}
