import * as graphql from "@nestjs/graphql";
import { PublishBlogDto } from "../kafka/PublishBlogDto";
import { KafkaService } from "./kafka.service";

export class KafkaResolver {
  constructor(protected readonly service: KafkaService) {}

  @graphql.Query(() => String)
  async PublishBlog(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PublishBlog(args);
  }

  @graphql.Mutation(() => String)
  async PublishBlogToKafka(
    @graphql.Args()
    args: PublishBlogDto
  ): Promise<string> {
    return this.service.PublishBlogToKafka(args);
  }
}
