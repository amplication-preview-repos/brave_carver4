import { Injectable } from "@nestjs/common";

@Injectable()
export class KafkaService {
  constructor() {}
  async ConsumeBlogFromKafka(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
