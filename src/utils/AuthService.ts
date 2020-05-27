import { OAUTH } from 'const';
import { action, computed, observable } from 'mobx';
import { Singleton } from 'typescript-ioc';

@Singleton
export default class AuthService {
  @observable private _token: string;

  @computed get token(): string {
    return this._token;
  }

  @action.bound
  setToken(token: string): void {
    this._token = token;
    localStorage.setItem(OAUTH, token);
  }

  async startupAuthCheck(authorizeUser: () => Promise<void>): Promise<void> {
    this._token = localStorage.getItem(OAUTH);
    if (this.token) return authorizeUser();
    return Promise.reject();
  }
}
