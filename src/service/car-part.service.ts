import { Injectable } from '@nestjs/common';
import { CarPartRepository } from '../repositories/car-part.repository';
import { CarPart } from '../models/car-part.model';

@Injectable()
export class CarPartService {
  constructor(private readonly carPartRepository: CarPartRepository) {}

  async getAllCarParts(): Promise<CarPart[]> {
    return this.carPartRepository.findAll();
  }

  async getCarPartById(id: number): Promise<CarPart> {
    return this.carPartRepository.findById(id);
  }

  async createCarPart(carPart: CarPart): Promise<CarPart> {
    return this.carPartRepository.create(carPart);
  }

  async updateCarPart(id: number, carPartData: CarPart): Promise<CarPart> {
    return this.carPartRepository.update(id, carPartData);
  }

  async deleteCarPart(id: number): Promise<CarPart> {
    return this.carPartRepository.delete(id);
  }
}
