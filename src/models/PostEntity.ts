import { observable } from 'mobx';
import { serializable } from 'serializr';
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
  img: string;
}
