import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LOGGER_TOKEN } from './logger/constants/loggerToken';
import { AbstractLoggerService } from './logger/services/abstractLogger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // fails on versions below 8.0.0 !!!
  const logger = await app.resolve<AbstractLoggerService>(LOGGER_TOKEN);

  logger.setContext('bootstrap');

  app.useLogger(logger);

  await app.listen(3000);
}
bootstrap();
