import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Widget } from './entities/widget.entity';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';

@Module({
    imports: [TypeOrmModule.forFeature([Widget])],
    controllers: [WidgetController],
    providers: [WidgetService],
})
export class WidgetModule {}
