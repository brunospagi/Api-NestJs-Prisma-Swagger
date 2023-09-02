import { Body, Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private prisma: PrismaService) {}
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({ data: createFuncionarioDto });
  }
  findAll() {
    return this.prisma.funcionario.findMany();
  }

  findOne(id: number) {
    return this.prisma.funcionario.findUnique({ where: { id } });
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({
      where: { id },
      data: updateFuncionarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.funcionario.delete({ where: { id } });
  }
}
