import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './mensajes/entities/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje])
  ],
  providers: [MensajesService],
})

export class AppModule {}