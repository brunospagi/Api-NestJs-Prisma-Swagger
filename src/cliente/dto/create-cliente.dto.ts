import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDto {
    @ApiProperty()
    cpf: string;
  
    @ApiProperty()
    nome: string;
  
    @ApiProperty()
    email: string;
}
