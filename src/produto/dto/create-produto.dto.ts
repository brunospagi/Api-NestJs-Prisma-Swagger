import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class CreateProdutoDto {
  @ApiProperty()
  barras: string;

  @ApiProperty({ required: false })
  descricao?: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  valorcusto: Decimal;
  
  @ApiProperty()
  valorvenda: Decimal;

}