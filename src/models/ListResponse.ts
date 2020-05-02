import { Clazz, createModelSchema, custom, deserialize, list, object, serializable } from 'serializr';

export interface ListResponseType<T> {
  results: Array<T>;
}

export default class ListResponse {
  @serializable(
    custom(
      val => val,
      val => val
    )
  )
  results: Array<any>;

  static fromServer<T>(model: Clazz<T>, rawData?: object): ListResponseType<T> {
    createModelSchema(ListResponse, {
      results: list(object(model))
    });
    return deserialize(ListResponse, rawData);
  }
}
