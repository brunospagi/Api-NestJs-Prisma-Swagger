import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Loja Teste')
    .setDescription('Api Representa Operações Basicas de Uma Loja ou Pdv')
    .setVersion('0.1')
    .addApiKey(
      {
        type: 'apiKey', // this should be apiKey
        name: 'X-API-KEY', // this is the name of the key you expect in header
        in: 'header',
      },
      'api-key', // this is the name to show and used in swagger
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
