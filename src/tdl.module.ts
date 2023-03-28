import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TdlService } from './tdl.service';
import { TdlController } from './tdl.controller';
import { Tdl, TdlSchema } from './entities/tdl.entities';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tdl.name, schema: TdlSchema }])],
  controllers: [TdlController],
  providers: [TdlService],
})
export class TdlModule {}
