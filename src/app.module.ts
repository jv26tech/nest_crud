
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'postgres',
      database: 'database',
      entities: [],
      synchronize: true,
      extra: {
        trustServerCertificate: true
      },
      autoLoadEntities: true
    }),
    UsersModule,
  ],
})

export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('STATUS CONNECTION: ', dataSource.isInitialized)
  }
}