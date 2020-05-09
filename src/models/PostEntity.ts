import { observable } from 'mobx';
import { UserEntity } from 'models';
import { alias, custom, serializable, SKIP } from 'serializr';
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
  @serializable(alias('title_photo_url'))
  titlePhoto: string;

  @observable
  @serializable(custom(_ => SKIP, UserEntity.fromServer))
  owner: UserEntity;
}
