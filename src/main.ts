import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // remove campos que não estão no DTO
      forbidNonWhitelisted: true, // dá erro se mandarem campo extra
      transform: true,            // converte o JSON para a classe do DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();