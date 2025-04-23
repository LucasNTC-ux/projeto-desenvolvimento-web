import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAlocacaoProjetoDto {
  @IsString()
  @IsNotEmpty()
  tecnico: string;

  @IsNumber()
  id_tecnico: number;

  @IsString()
  @IsNotEmpty()
  projeto_categoria: string;

  @IsNumber()
  id_projeto_categoria: number;

  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsNumber()
  id_usuario: number;

  @IsString()
  @IsNotEmpty()
  cliente: string;

  @IsNumber()
  id_cliente: number;

  @IsNumber()
  qtd_horas_alocadas: number;

  @IsNumber()
  qtd_horas_comerciais: number;
}