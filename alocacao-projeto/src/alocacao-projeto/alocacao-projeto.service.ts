import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAlocacaoProjetoDto } from './dto/create-alocacao-projeto.dto';
import { UpdateAlocacaoProjetoDto } from './dto/update-alocacao-projeto.dto';

@Injectable()
export class AlocacaoProjetoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAlocacaoProjetoDto) {
    return this.prisma.alocacaoProjeto.create({ data });
  }

  findAll() {
    return this.prisma.alocacaoProjeto.findMany();
  }

  findOne(id: number) {
    return this.prisma.alocacaoProjeto.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateAlocacaoProjetoDto) {
    return this.prisma.alocacaoProjeto.update({
      where: { id: Number(id) },
      data,
    });
  }  

  remove(id: number) {
    return this.prisma.alocacaoProjeto.delete({ where: { id } });
  }
}

