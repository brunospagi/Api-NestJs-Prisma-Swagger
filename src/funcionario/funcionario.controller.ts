/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('funcionario')
@ApiTags('Funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post('criar')
  @ApiOperation({ summary: 'Criar um Funcionario' })
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  @Get('listar-todos')
  @ApiOperation({ summary: 'Listar Todos Os Funcionarios' })
  findAll() {
    return this.funcionarioService.findAll();
  }

  @Get('listar/:id')
  @ApiOperation({ summary: 'Buscar Funcionario Pelo ID' })
  findOne(@Param('id') id: string) {
    return this.funcionarioService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({ summary: 'Atualizar Um Funcionario Pelo ID' })
  update(
    @Param('id') id: string,
    @Body() updateFuncionarioDto: UpdateFuncionarioDto,
  ) {
    return this.funcionarioService.update(+id, updateFuncionarioDto);
  }

  @Delete('delatar/:id')
  @ApiOperation({ summary: 'Deletar Funcionario Pelo ID' })
  remove(@Param('id') id: string) {
    return this.funcionarioService.remove(+id);
  }
}
