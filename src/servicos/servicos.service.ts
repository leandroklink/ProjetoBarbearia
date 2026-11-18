import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto.js';
import { UpdateServicoDto } from './dto/update-servico.dto.js';
import { Servico } from './entities/servico.entity.js';

@Injectable()
export class ServicosService {
  private servicos: Servico[] = [];
  private proximoId = 1;

  create(dto: CreateServicoDto): Servico {
    const servico: Servico = { id: this.proximoId++, ...dto };
    this.servicos.push(servico);
    return servico;
  }

  findAll(): Servico[] {
    return this.servicos;
  }

  findOne(id: number): Servico {
    const servico = this.servicos.find((s) => s.id === id);
    if (!servico) throw new NotFoundException(`Serviço ${id} não encontrado`);
    return servico;
  }

  update(id: number, dto: UpdateServicoDto): Servico {
    const servico = this.findOne(id);
    Object.assign(servico, dto);
    return servico;
  }

  remove(id: number): void {
    const index = this.servicos.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException(`Serviço ${id} não encontrado`);
    this.servicos.splice(index, 1);
  }
}