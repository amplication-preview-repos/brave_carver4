import * as graphql from "@nestjs/graphql";
import { KafkaService } from "./kafka.service";

export class KafkaResolver {
  constructor(protected readonly service: KafkaService) {}

  @graphql.Query(() => String)
  async ConsumeBlogFromKafka(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConsumeBlogFromKafka(args);
  }
}
