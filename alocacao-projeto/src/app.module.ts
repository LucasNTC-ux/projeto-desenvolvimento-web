import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlocacaoProjetoModule } from './alocacao-projeto/alocacao-projeto.module';

@Module({
  imports: [AlocacaoProjetoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
