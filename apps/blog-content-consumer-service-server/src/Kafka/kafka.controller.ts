import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaService } from "./kafka.service";

@swagger.ApiTags("kafkas")
@common.Controller("kafkas")
export class KafkaController {
  constructor(protected readonly service: KafkaService) {}

  @common.Get("/:id/consume-blog-from-kafka")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeBlogFromKafka(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumeBlogFromKafka(body);
      }
}
