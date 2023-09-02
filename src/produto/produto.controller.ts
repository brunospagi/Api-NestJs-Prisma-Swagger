/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('produto')
@ApiTags('Produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post('criar')
  @ApiOperation({ summary: 'Criar um Produto' })
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get('listar-todos')
  @ApiOperation({ summary: 'Listar Todos Os Produtos' })
  findAll() {
    return this.produtoService.findAll();
  }

  
  @Get(':id')
  @ApiOperation({ summary: 'Buscar Produto Pelo ID' })
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({ summary: 'Atualizar Um Produto Pelo ID' })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete('deletar/:id')
  @ApiOperation({ summary: 'Deletar Produto Pelo ID' })
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
