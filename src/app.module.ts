import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TdlModule } from './tdl.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://guilhermescrv:87372021@dev0.hfgwwln.mongodb.net/test',
    ),
    TdlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
