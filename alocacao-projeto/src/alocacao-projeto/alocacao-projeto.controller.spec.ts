import { Test, TestingModule } from '@nestjs/testing';
import { AlocacaoProjetoController } from './alocacao-projeto.controller';
import { AlocacaoProjetoService } from './alocacao-projeto.service';

describe('AlocacaoProjetoController', () => {
  let controller: AlocacaoProjetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlocacaoProjetoController],
      providers: [AlocacaoProjetoService],
    }).compile();

    controller = module.get<AlocacaoProjetoController>(AlocacaoProjetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
