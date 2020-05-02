import { ListResponse, ListResponseType, UserEntity } from 'models';
import { Inject, Singleton } from 'typescript-ioc';
import { Api } from 'utils';

@Singleton
export default class UserTransport {
  @Inject api: Api;

  private TICKET_ENDPOINT: string = 'users';

  retrieveUserList(params?: object): Promise<ListResponseType<UserEntity>> {
    return this.api.get(`${this.TICKET_ENDPOINT}`, params).then(ListResponse.fromServer.bind(null, UserEntity));
  }
}
