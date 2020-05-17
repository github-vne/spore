import { AuthEntity, ListResponse, UserEntity } from 'models';
import { Inject, Singleton } from 'typescript-ioc';
import { Api } from 'utils';

interface SignIn {
  token: string;
  user: UserEntity;
}

@Singleton
export default class AccountTransport {
  @Inject api: Api;

  private SIGN_UP: string = 'sign_up';
  private SIGN_IN: string = 'sign_in';

  signUp(params?: AuthEntity): Promise<UserEntity> {
    return this.api.post(this.SIGN_UP, params).then(ListResponse.fromServer.bind(null, UserEntity));
  }

  signIn(params?: AuthEntity): Promise<SignIn> {
    return this.api.post(this.SIGN_IN, params).then(res => res);
  }
}
