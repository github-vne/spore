import { PageName, PageType } from 'const/pages';
import { action, computed, observable } from 'mobx';
import { Singleton } from 'typescript-ioc';

@Singleton
export default class MainStore {
  @observable private _currentPage: PageType;

  @computed get currentPage(): PageType {
    return this._currentPage;
  }

  @action.bound
  changeCurrentPage(page: PageType): void {
    if (this.currentPage === page) return;
    this._currentPage = page;
    document.title = `Spore: ${PageName[page]}`;
  }
}
