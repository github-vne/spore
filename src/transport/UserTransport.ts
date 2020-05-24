import axios from 'axios';
import { AuthEntity, ListResponse, ListResponseType, UserEntity } from 'models';
import { Inject, Singleton } from 'typescript-ioc';
import Api, { BACKEND_URL } from 'utils/Api';

interface SignIn {
  token: string;
  user: UserEntity;
}

@Singleton
export default class UserTransport {
  @Inject private api: Api;

  private USER_LIST_ENDPOINT: string = 'users';
  private CURRENT_USER: string = 'users/current';

  retrieveUserList(params?: object): Promise<ListResponseType<UserEntity>> {
    return this.api.get(this.USER_LIST_ENDPOINT, params).then(ListResponse.fromServer.bind(null, UserEntity));
  }

  retrieveUser(id?: string): Promise<UserEntity> {
    return this.api.get(`${this.USER_LIST_ENDPOINT}/${id}`).then(UserEntity.fromServer);
  }

  updateUserInfo(user: UserEntity): Promise<UserEntity> {
    return this.api.patch(`${this.USER_LIST_ENDPOINT}/info`, { ...user.toServer(), id: 1 }).then(UserEntity.fromServer);
  }

  uploadPhoto(photoId: number): Promise<UserEntity> {
    return this.api.patch(`${this.USER_LIST_ENDPOINT}/photo`, { id: 1, photo_id: photoId }).then(UserEntity.fromServer);
  }

  /* Auth */
  getCurrentUser(): Promise<UserEntity> {
    return this.api.get(this.CURRENT_USER).then(UserEntity.fromServer);
  }

  signUp(params?: AuthEntity): Promise<UserEntity> {
    return axios.post(`${BACKEND_URL}sign_up`, params).then(ListResponse.fromServer.bind(null, UserEntity));
  }

  signIn(params?: AuthEntity): Promise<SignIn> {
    return axios.post(`${BACKEND_URL}sign_in`, params).then(res => res.data);
  }
}
