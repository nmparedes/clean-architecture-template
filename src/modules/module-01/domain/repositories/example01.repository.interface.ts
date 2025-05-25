import { Example01 } from '../entities/example01.entity';

export interface IExample01Repository {
  save(data: Example01): Promise<Example01>;
  findById(id: string): Promise<Example01>;
  findAll(): Promise<Example01[]>;
  update(id: string, data: Example01): Promise<void>;
  delete(id: string): Promise<void>;
}
