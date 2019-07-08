import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocSchema } from 'src/schemas/doc.schema';
import { DocService } from './doc.service';
import { DocController } from './doc.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Doc', schema: DocSchema }])],
    providers: [DocService],
    controllers: [DocController]
})
export class DocModule { }
