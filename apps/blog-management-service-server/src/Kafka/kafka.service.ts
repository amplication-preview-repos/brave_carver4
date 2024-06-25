import { Injectable } from "@nestjs/common";
import { PublishBlogDto } from "../kafka/PublishBlogDto";

@Injectable()
export class KafkaService {
  constructor() {}
  async PublishBlog(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PublishBlogToKafka(args: PublishBlogDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
