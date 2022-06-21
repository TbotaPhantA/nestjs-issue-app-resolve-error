import { LoggerService } from '@nestjs/common';

export class AbstractLoggerService implements LoggerService {
  private _context: string;

  public setContext(context: string): void {
    console.log(`context was ${this._context}`);
    this._context = context;
    console.log(`context became ${this._context}`);
  }

  public getContext(): string {
    return this._context;
  }

  public error(message: any, ...optionalParams: any[]): any {
    console.log(message, ...optionalParams);
  }

  public log(message: any, ...optionalParams: any[]): any {
    console.log(message, ...optionalParams);
  }

  public warn(message: any, ...optionalParams: any[]): any {
    console.log(message, ...optionalParams);
  }
}
