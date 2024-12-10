import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Nest JS Rodando na Porta 3000';
  }
}
