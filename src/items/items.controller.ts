import { Param } from '@nestjs/common/decorators';
import { CreateItemDto } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item[]> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Body() createItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, createItemDto);
  }
}
