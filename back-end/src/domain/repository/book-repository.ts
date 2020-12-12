import { TBookRequestBody } from '~/src/interface/book';
import { Book } from '../entity/book';

export interface IBookRepository {
  findAll(): Promise<Book[]>;

  sampleCustomRawSelectQuery(id: number): Promise<Book[]>;

  save(item: TBookRequestBody): Promise<Book>;

  update(id: number, item: TBookRequestBody): Promise<Book>;

  delete(id: number): Promise<void>;
}