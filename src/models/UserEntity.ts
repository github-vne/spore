import { alias, deserialize, serializable } from 'serializr';
import BaseEntity from './BaseEntity';

export default class UserEntity extends BaseEntity {
  @serializable
  login: string;

  @serializable(alias('first_name'))
  firstName: string;

  @serializable(alias('middle_name'))
  middleName: string;

  @serializable(alias('last_name'))
  lastName: string;

  @serializable
  status: string;

  @serializable
  photo: string;

  @serializable
  description: string;

  static fromServer(rawData: Record<string, any>): UserEntity {
    return deserialize(UserEntity, rawData);
  }

  constructor(props: Partial<UserEntity>) {
    super();
    if (!props) return;
    this.firstName = props.firstName;
    this.middleName = props.middleName;
    this.lastName = props.lastName;
    this.status = props.status;
    this.description = props.description;
  }

  get shortName(): string {
    const result = [];
    if (this.lastName) result.push(this.lastName);
    if (this.firstName) result.push(`${this.firstName.charAt(0)}.`);
    if (this.middleName) result.push(`${this.middleName.charAt(0)}.`);
    return result.join(' ');
  }

  get fullName(): string {
    const result = [];
    if (this.lastName) result.push(this.lastName);
    if (this.firstName) result.push(this.firstName);
    if (this.middleName) result.push(this.middleName);
    if (!result.length) result.push(this.login);
    return result.join(' ');
  }

  get initials(): string {
    return `${(this.lastName || '').charAt(0)}${(this.firstName || '').charAt(0)}`;
  }
}
