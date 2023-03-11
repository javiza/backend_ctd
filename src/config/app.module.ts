import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingModule } from '../landing/landing.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jona',
      password: '1234',
      database: 'celulatd_database',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    
    }),
    
      
    LandingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
