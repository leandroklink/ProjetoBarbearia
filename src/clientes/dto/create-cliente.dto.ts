import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @Matches(/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/)
  phoneNumber: string;
}