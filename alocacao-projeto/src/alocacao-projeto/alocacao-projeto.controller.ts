import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AlocacaoProjetoService } from './alocacao-projeto.service';
import { CreateAlocacaoProjetoDto } from './dto/create-alocacao-projeto.dto';
import { UpdateAlocacaoProjetoDto } from './dto/update-alocacao-projeto.dto';

@Controller('alocacao-projeto')
export class AlocacaoProjetoController {
  constructor(private readonly alocacaoProjetoService: AlocacaoProjetoService) {}

  @Post()
  create(@Body() createAlocacaoProjetoDto: CreateAlocacaoProjetoDto) {
    return this.alocacaoProjetoService.create(createAlocacaoProjetoDto);
  }

  @Get()
  findAll() {
    return this.alocacaoProjetoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alocacaoProjetoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlocacaoProjetoDto: UpdateAlocacaoProjetoDto) {
    return this.alocacaoProjetoService.update(+id, updateAlocacaoProjetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alocacaoProjetoService.remove(+id);
  }
}