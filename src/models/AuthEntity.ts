import { serializable } from 'serializr';

export class AuthEntity {
  @serializable
  login: string;

  @serializable
  password: string;
}
