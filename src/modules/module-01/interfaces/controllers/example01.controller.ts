import { Body, Controller, Post } from '@nestjs/common';
import { CreateExample01UseCase } from '../../application/use-cases/create-example01.use-case';
import { CreateExample01Dto } from '../../application/dto/create-example01.dto';

@Controller('example01')
export class Example01Controller {
  constructor(
    private readonly createExample01UseCase: CreateExample01UseCase
  ) {}

  @Post()
  async create(@Body() createExample01Dto: CreateExample01Dto) {
    return this.createExample01UseCase.execute(createExample01Dto);
  }
}
