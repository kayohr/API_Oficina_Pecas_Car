import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarPart } from '../models/car-part.model';
import { CarPartService } from '../service/car-part.service';

@Controller('car-parts')
export class CarPartController {
  constructor(private readonly carPartService: CarPartService) {}

  @Get()
  async getAllCarParts(): Promise<CarPart[]> {
    return this.carPartService.getAllCarParts();
  }

  @Get(':id')
  async getCarPartById(@Param('id') id: string): Promise<CarPart> {
    return this.carPartService.getCarPartById(Number(id));
  }

  @Post()
  async createCarPart(@Body() carPart: CarPart): Promise<CarPart> {
    return this.carPartService.createCarPart(carPart);
  }

  @Put(':id')
  async updateCarPart(
    @Param('id') id: string,
    @Body() carPartData: CarPart,
  ): Promise<CarPart> {
    return this.carPartService.updateCarPart(Number(id), carPartData);
  }

  @Delete(':id')
  async deleteCarPart(@Param('id') id: string): Promise<CarPart> {
    return this.carPartService.deleteCarPart(Number(id));
  }
}
