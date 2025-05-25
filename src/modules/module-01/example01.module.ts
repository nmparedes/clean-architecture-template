import { Module } from '@nestjs/common';
import { CreateExample01UseCase } from './application/use-cases/create-example01.use-case';
import { IExample01RepositoryToken } from './domain/repositories/example01.repository.token';
import { Example01Controller } from './interfaces/controllers/example01.controller';
import { Example01RepositoryInMemory } from './infrastructure/database/example01.repository';

@Module({
  imports: [],
  controllers: [Example01Controller],
  providers: [
    CreateExample01UseCase,
    {
      provide: IExample01RepositoryToken,
      useClass: Example01RepositoryInMemory,
    },
  ],
})
export class Example01Module {}
