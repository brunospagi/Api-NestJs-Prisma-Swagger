import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";

export class CreateFuncionarioDto {
    @ApiProperty()
    cpf: string;
  
    @ApiProperty({ required: false })
    Funcao?: string;
  
    @ApiProperty()
    nome: string;
  
    @ApiProperty()
    email: string;
    
}
