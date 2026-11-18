import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { ServicosService } from './servicos.service.js';
import { CreateServicoDto } from './dto/create-servico.dto.js';
import { UpdateServicoDto } from './dto/update-servico.dto.js';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Post()
  create(@Body() dto: CreateServicoDto) {
    return this.servicosService.create(dto);
  }

  @Get()
  findAll() {
    return this.servicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servicosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateServicoDto) {
    return this.servicosService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.servicosService.remove(id);
  }
}