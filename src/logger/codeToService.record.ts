import { CatLoggerService } from './services/catLogger.service';
import { DogLoggerService } from './services/dogLogger.service';

export const codeToServiceRecord = {
  0: CatLoggerService,
  1: DogLoggerService,
} as const;
