import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatchAllFilter } from './shared/catch-all.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new CatchAllFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();

  await app.listen(8080, () => {
    console.log(`
        \n
        ================================================================
                    Application started at port: 8080
        ================================================================
        \n
    `);
  });
}
bootstrap();
