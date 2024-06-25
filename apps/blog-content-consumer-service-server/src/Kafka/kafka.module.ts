import { Module } from "@nestjs/common";
import { KafkaService } from "./kafka.service";
import { KafkaController } from "./kafka.controller";
import { KafkaResolver } from "./kafka.resolver";

@Module({
  controllers: [KafkaController],
  providers: [KafkaService, KafkaResolver],
  exports: [KafkaService],
})
export class KafkaModule {}
