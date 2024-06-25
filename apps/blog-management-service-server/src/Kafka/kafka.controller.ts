import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaService } from "./kafka.service";
import { PublishBlogDto } from "../kafka/PublishBlogDto";

@swagger.ApiTags("kafkas")
@common.Controller("kafkas")
export class KafkaController {
  constructor(protected readonly service: KafkaService) {}

  @common.Get("/:id/publish-blog")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishBlog(
    @common.Body()
    body: PublishBlogDto
  ): Promise<string> {
        return this.service.PublishBlog(body);
      }

  @common.Post("/publish-blog")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PublishBlogToKafka(
    @common.Body()
    body: PublishBlogDto
  ): Promise<string> {
        return this.service.PublishBlogToKafka(body);
      }
}
