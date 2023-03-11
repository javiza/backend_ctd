import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './controller/admin.controller';
import { Admin } from './entities/admin.entities';
import { AdminService } from './service/admin.service';

@Module({
  imports: [
  
  TypeOrmModule.forFeature([Admin])
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}