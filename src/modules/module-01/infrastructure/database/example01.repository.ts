import { Example01 } from '../../domain/entities/example01.entity';
import { IExample01Repository } from '../../domain/repositories/example01.repository.interface';

export class Example01RepositoryInMemory implements IExample01Repository {
  private readonly fakeDb: Example01[] = [];

  async findAll(): Promise<Example01[]> {
    return this.fakeDb;
  }

  async findById(id: string): Promise<Example01 | null> {
    const user = this.fakeDb.find((user) => user.id === id);
    return user || null;
  }

  async save(data: Example01): Promise<Example01> {
    this.fakeDb.push(data);
    return data;
  }

  async update(id: string, data: Example01): Promise<void> {
    const userIndex = this.fakeDb.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.fakeDb[userIndex] = data;
    }
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.fakeDb.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.fakeDb.splice(userIndex, 1);
    }
  }
}
