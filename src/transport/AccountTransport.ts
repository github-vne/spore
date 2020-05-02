import { ListResponse, ListResponseType, UserEntity } from 'models';
import { Inject, Singleton } from 'typescript-ioc';
import { Api } from 'utils';

@Singleton
export default class AccountTransport {
  @Inject api: Api;

  private AUTH: string = 'signup';

  signUp(params?: object): Promise<ListResponseType<UserEntity>> {
    return this.api.post(`${this.AUTH}`, params).then(ListResponse.fromServer.bind(null, UserEntity));
  }
}
