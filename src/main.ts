// import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,  // Strip out properties not in the DTO
  //   forbidNonWhitelisted: true,  // Throw error if non-whitelisted property is sent
  //   transform: true,  // Automatically transform payloads to DTO instances
  // }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
