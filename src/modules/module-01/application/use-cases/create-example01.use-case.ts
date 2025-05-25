import { Inject, Injectable } from '@nestjs/common';
import { IExample01RepositoryToken } from '../../domain/repositories/example01.repository.token';
import { Example01 } from '../../domain/entities/example01.entity';
import { CreateExample01Dto } from '../dto/create-example01.dto';
import { IExample01Repository } from '../../domain/repositories/example01.repository.interface';

@Injectable()
export class CreateExample01UseCase {
  constructor(
    @Inject(IExample01RepositoryToken)
    private readonly example01Repository: IExample01Repository
  ) {}

  async execute(data: CreateExample01Dto): Promise<Example01> {
    const example01 = Example01.create(data.name, data.description);

    return await this.example01Repository.save(example01);
  }
}
