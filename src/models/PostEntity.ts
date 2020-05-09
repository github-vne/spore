import { observable } from 'mobx';
import { UserEntity } from 'models';
import { custom, serializable } from 'serializr';
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
}
