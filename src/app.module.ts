import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LogLevel } from '@sentry/types';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WidgetModule } from './widget/widget.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        SentryModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (cfg: ConfigService) => ({
                dsn: cfg.get('SENTRY_DSN'),
                environment: cfg.get('SENTRY_ENVIRONMENT'),
                logLevel: LogLevel.Error,
            }),
        }),
        TypeOrmModule.forRoot(),
        WidgetModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
