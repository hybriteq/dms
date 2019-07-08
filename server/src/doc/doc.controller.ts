import { Controller, Get, Post, Body } from '@nestjs/common';
import { DocService } from './doc.service';
import { Doc } from 'src/interfaces';

@Controller('doc')
export class DocController {
    constructor(private readonly docService: DocService) {

    }

    @Post()
    create(@Body() createDocDto: any): Promise<Doc> {
        return this.docService.create(createDocDto);
    }

    @Get()
    findAll(): Promise<Doc[]> {
        return this.docService.findAll();
    }
}
