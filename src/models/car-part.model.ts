import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class CarPart extends Model<CarPart> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;
}
