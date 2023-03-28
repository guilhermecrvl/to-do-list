import { UpdateTdlDto } from './dtos/update-tdl.dto';
import { TdlService } from './tdl.service';
import { CreateTdlDto } from './dtos/create-tdl.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('tdl')
export class TdlController {
  constructor(private readonly tdlService: TdlService) {}

  @Post()
  create(@Body() createTdlDto: CreateTdlDto) {
    return this.tdlService.create(createTdlDto);
  }

  @Get()
  findAll() {
    return this.tdlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tdlService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTdlDto: UpdateTdlDto) {
    return this.tdlService.update(id, updateTdlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tdlService.remove(id);
  }
}
