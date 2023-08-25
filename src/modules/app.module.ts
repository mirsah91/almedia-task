import { Module } from '@nestjs/common';
import configs from '../config';
import {ConfigModule} from "@nestjs/config";
import {OfferModule} from "./offer";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
    OfferModule,
  ],
})
export class AppModule {}
