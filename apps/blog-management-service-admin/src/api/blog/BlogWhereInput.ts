import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BlogWhereInput = {
  author?: IntNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  title?: StringNullableFilter;
};
