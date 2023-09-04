/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('cliente')
@ApiTags('Cliente')
@ApiSecurity('api-key') // this is the name you set in Document builder
@UseGuards(AuthGuard('api-key'))
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('criar')
  @ApiOperation({ summary: 'Criar um Cliente' })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get('listar-todos')
  @ApiOperation({ summary: 'Listar Todos Os Clientes' })
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Cliente Pelo ID' })
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({ summary: 'Atualizar Um Cliente Pelo ID' })
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete('deletar/:id')
  @ApiOperation({ summary: 'Deletar Cliente Pelo ID' })
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
