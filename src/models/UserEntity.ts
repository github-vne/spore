import { alias, deserialize, serializable } from 'serializr';
import BaseEntity from './BaseEntity';

export default class UserEntity extends BaseEntity {
  @serializable
  login: string = '';

  @serializable
  email: string;

  @serializable(alias('first_name'))
  firstName: string = '';

  @serializable(alias('middle_name'))
  middleName: string = '';

  @serializable(alias('last_name'))
  lastName: string = '';

  @serializable
  position: string = '';

  @serializable(alias('photo_id'))
  avatar: string = '';

  static fromServer(rawData: Record<string, any>): UserEntity {
    return deserialize(UserEntity, rawData);
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
    return result.join(' ');
  }

  get initials(): string {
    return `${(this.firstName || '').charAt(0)}${(this.lastName || '').charAt(0)}`;
  }
}
