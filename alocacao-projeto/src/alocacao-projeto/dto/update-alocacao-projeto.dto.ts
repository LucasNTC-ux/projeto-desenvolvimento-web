import { PartialType } from '@nestjs/mapped-types';
import { CreateAlocacaoProjetoDto } from './create-alocacao-projeto.dto';

export class UpdateAlocacaoProjetoDto extends PartialType(CreateAlocacaoProjetoDto) {}
