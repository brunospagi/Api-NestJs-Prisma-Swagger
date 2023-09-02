import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class Produto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    barras: string;
  
    @ApiProperty({ required: false, nullable: true })
    descricao: string | null;
  
    @ApiProperty()
    nome: string;
  
    @ApiProperty()
    valorcusto: Decimal;

    @ApiProperty()
    valorvenda: Decimal;
  
    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;
}
