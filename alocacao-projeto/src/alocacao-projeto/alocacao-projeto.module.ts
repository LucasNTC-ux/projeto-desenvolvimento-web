import { Module } from '@nestjs/common';
import { AlocacaoProjetoService } from './alocacao-projeto.service';
import { AlocacaoProjetoController } from './alocacao-projeto.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AlocacaoProjetoController],
  providers: [AlocacaoProjetoService, PrismaService],
})
export class AlocacaoProjetoModule {}
