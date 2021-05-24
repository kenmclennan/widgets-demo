import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { Widget } from './entities/widget.entity';

@Injectable()
export class WidgetService {
    private readonly logger = new Logger(WidgetService.name);

    constructor(
        @InjectRepository(Widget)
        private widgetRepository: Repository<Widget>,
    ) {}

    async create(createWidgetDto: CreateWidgetDto) {
        return this.widgetRepository.save(this.widgetRepository.create(createWidgetDto));
    }

    async findAll() {
        return this.widgetRepository.find();
    }

    async findOne(id: string) {
        return this.widgetRepository.findOne(id);
    }

    async update(id: string, updateWidgetDto: UpdateWidgetDto) {
        await this.widgetRepository.update(id, updateWidgetDto);
        return this.findOne(id);
    }

    async remove(id: string) {
        return this.widgetRepository.delete(id);
    }
}
