/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('produto')
@ApiTags('Produto')
@ApiSecurity('api-key') // this is the name you set in Document builder
@UseGuards(AuthGuard('api-key'))
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
