import { Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { PageType } from 'const/pages';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button, Input, Loader, ToastType } from 'ui-kit';
import { NotificationService } from 'utils';
import { Group } from './style';

const GroupComponent = ({ title, children }: { title?: string; children?: any }) => {
  return (
    <div>
      {title ? <p>{title}</p> : null}
      {children ? <Group>{children}</Group> : null}
    </div>
  );
};

@observer
export default class PageComponents extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private notificationService: NotificationService;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.COMPONENTS);
  }

  @action.bound
  private openToast(type: ToastType): void {
    this.notificationService.example(type);
  }

  @action.bound
  private onChange = (name: string, value: string) => {
    console.info(`Name = ${name} | Value = ${value}`);
  };

  render(): JSX.Element {
    return (
      <Layout>
        <GroupComponent title="Button">
          <Button>Default</Button>
          <Button styled={STYLED.PRIMARY}>Primary</Button>
          <Button styled={STYLED.SECONDARY}>Secondary</Button>
          <Button styled={STYLED.TERTIARY}>Tertiary</Button>
        </GroupComponent>
        <GroupComponent title="Button Icon">
          <Button icon="common/send">Icon</Button>
          <Button pending>Icon</Button>
          <Button disabled>Disabled</Button>
        </GroupComponent>
        <GroupComponent title="Loader">
          <Loader size={SIZE.EXTRA_LARGE} />
          <Loader size={SIZE.LARGE} />
          <Loader />
          <Loader size={SIZE.SMALL} />
          <Loader size={SIZE.EXTRA_SMALL} />
        </GroupComponent>
        <GroupComponent title="Avatar">
          <Avatar size={SIZE.EXTRA_LARGE} image="https://randomuser.me/api/portraits/men/3.jpg" />
          <Avatar />
          <Avatar size={SIZE.MIDDLE} />
          <Avatar size={SIZE.SMALL} />
          <Avatar size={SIZE.EXTRA_SMALL} />
        </GroupComponent>
        <GroupComponent title="Input">
          <Input name="input0" onChange={this.onChange} placeholder="Label" label="With Label" />
          <Input
            type="search"
            name="input1"
            onChange={this.onChange}
            defaultValue="Search"
            innerBtn={{
              onClick: () => console.info('click')
            }}
          />
          <Input name="input2" onChange={this.onChange} placeholder="Placeholder" />
        </GroupComponent>
        <GroupComponent title="Toast">
          <Button onClick={this.openToast.bind(this, ToastType.INFO)}>Info</Button>
          <Button styled={STYLED.PRIMARY} onClick={this.openToast.bind(this, ToastType.SUCCESS)}>
            Success
          </Button>
          <Button styled={STYLED.TERTIARY} onClick={this.openToast.bind(this, ToastType.WARNING)}>
            Warning
          </Button>
          <Button styled={STYLED.SECONDARY} onClick={this.openToast.bind(this, ToastType.ERROR)}>
            Error
          </Button>
        </GroupComponent>
      </Layout>
    );
  }
}
