import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class PublishBlogDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    title!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    content!: string;

    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    published!: boolean;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    author!: number;
}

export { PublishBlogDto as PublishBlogDto };