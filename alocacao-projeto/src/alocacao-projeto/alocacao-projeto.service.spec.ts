import { Test, TestingModule } from '@nestjs/testing';
import { AlocacaoProjetoService } from './alocacao-projeto.service';

describe('AlocacaoProjetoService', () => {
  let service: AlocacaoProjetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlocacaoProjetoService],
    }).compile();

    service = module.get<AlocacaoProjetoService>(AlocacaoProjetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
