// filepath: /home/natan/dev/copilot-test-project/src/app.module.ts
import { Module } from '@nestjs/common';
import { Example01Module } from './modules/module-01/example01.module';
import { Example02Module } from './modules/module-02/example02.module';

@Module({
  imports: [Example01Module, Example02Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
