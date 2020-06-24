import { Dayjs } from 'dayjs';
import { observable } from 'mobx';
import { UserEntity } from 'models';
import { alias, custom, deserialize, serializable, SKIP } from 'serializr';
import { dateTimeReadOnly } from 'utils/serializers';
import BaseEntity from './BaseEntity';

export class LikeEntity {
  @observable
  @serializable
  count: number;

  @observable
  @serializable(alias('user_likes'))
  userLikes: boolean;

  static fromServer(rawData: Record<string, any>): LikeEntity {
    return deserialize(LikeEntity, rawData);
  }
}

// tslint:disable-next-line:max-classes-per-file
export default class PostEntity extends BaseEntity {
  @observable
  @serializable
  title: string;

  @observable
  @serializable(alias('date', dateTimeReadOnly))
  date: Dayjs;

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
  @serializable(custom(_ => SKIP, UserEntity.fromServer))
  owner: UserEntity;

  @observable
  @serializable(custom(_ => SKIP, LikeEntity.fromServer))
  likes: LikeEntity;

  static fromServer(rawData: object): PostEntity {
    if (!rawData) return;
    return deserialize(PostEntity, rawData);
  }
}
