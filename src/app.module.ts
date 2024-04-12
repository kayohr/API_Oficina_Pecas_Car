// src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarPartController } from './controllers/car-part.controller';
import { CarPartService } from './service/car-part.service';
import { CarPart } from './models/car-part.model';
import { CarPartRepository } from './repositories/car-part.repository';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'seu_nome_de_usuario',
      password: process.env.DB_PASSWORD || 'sua_senha',
      database: process.env.DB_DATABASE || 'nome_do_banco_de_dados',
      // autoLoadModels: true,
      synchronize: false, // Cuidado com isso em produção, use migrações
    }),
    SequelizeModule.forFeature([CarPart]),
  ],
  controllers: [CarPartController],
  providers: [CarPartService, CarPartRepository],
})
export class AppModule {}
