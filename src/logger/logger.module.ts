import { Module, Scope } from '@nestjs/common';
import { LOGGER_TOKEN } from './constants/loggerToken';
import { codeToServiceRecord } from './codeToService.record';

@Module({
  providers: [
    {
      provide: LOGGER_TOKEN,
      scope: Scope.TRANSIENT,
      useClass: codeToServiceRecord[0],
    },
  ],
  exports: [
    {
      provide: LOGGER_TOKEN,
      useClass: codeToServiceRecord[0],
    },
  ],
})
export class LoggerModule {}
