import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  providers: [],
})
export class AppModule {}
