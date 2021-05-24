import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log'],
    });
    const cfg: ConfigService = app.get(ConfigService);
    await app.listen(cfg.get<number>('PORT'));
}
bootstrap();
