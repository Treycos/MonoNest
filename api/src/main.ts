import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { hi } from '@test/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log('All fine', hi());
}
bootstrap();
