import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Author" source="author" />
        <TextInput label="Content" multiline source="content" />
        <BooleanInput label="Published" source="published" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
