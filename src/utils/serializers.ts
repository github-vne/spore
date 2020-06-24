import dayjs from 'dayjs';
import { custom, PropSchema, SKIP } from 'serializr';

export const dateTimeReadOnly: PropSchema = custom(
  _ => SKIP,
  val => (val ? dayjs(`${val}Z`) : null)
);

export const readOnly: PropSchema = custom(
  _ => SKIP,
  val => val
);
