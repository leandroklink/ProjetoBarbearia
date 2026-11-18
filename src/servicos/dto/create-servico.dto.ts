import { IsString, IsNotEmpty, IsNumber, IsPositive, IsInt, Min } from 'class-validator';

export class CreateServicoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsPositive()
  preco: number;

  @IsInt()
  @Min(10)
  duracaoMinutos: number;
}