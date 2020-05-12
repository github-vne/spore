import { serializable, serialize } from 'serializr';

export default abstract class BaseEntity {
  @serializable
  id: number;

  @serializable
  type: string;

  toServer(): object {
    return serialize(this);
  }
}
