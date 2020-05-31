import { observable } from 'mobx';
import { UserEntity } from 'models';
import { alias, custom, deserialize, serializable, SKIP } from 'serializr';
import BaseEntity from './BaseEntity';

export default class PostEntity extends BaseEntity {
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
  @serializable(alias('photo_id'))
  photoId: number;

  @observable
  @serializable(custom(_ => this.id, UserEntity.fromServer))
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
