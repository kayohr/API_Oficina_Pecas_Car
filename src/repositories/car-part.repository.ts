import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CarPart } from '../models/car-part.model';

@Injectable()
export class CarPartRepository {
  constructor(
    @InjectModel(CarPart) private readonly carPartsModel: typeof CarPart,
  ) {}

  async findAll(): Promise<CarPart[]> {
    return this.carPartsModel.findAll();
  }

  async findById(id: number): Promise<CarPart> {
    const carPart = await this.carPartsModel.findByPk(id);
    if (!carPart) {
      throw new NotFoundException(`Car part with id ${id} not found`);
    }
    return carPart;
  }

  async create(carPart: CarPart): Promise<CarPart> {
    return this.carPartsModel.create(carPart);
  }

  async update(id: number, carPartData: CarPart): Promise<CarPart> {
    const [rowsUpdated, [updatedCarPart]] = await this.carPartsModel.update(
      carPartData,
      {
        where: { id },
        returning: true,
      },
    );
    if (rowsUpdated === 0) {
      throw new NotFoundException(`Car part with id ${id} not found`);
    }
    return updatedCarPart;
  }

  async delete(id: number): Promise<CarPart> {
    const deletedCarPart = await this.carPartsModel.findByPk(id);

    if (deletedCarPart) {
      await this.carPartsModel.destroy({ where: { id } });
      return deletedCarPart;
    }

    return null;
  }
}
