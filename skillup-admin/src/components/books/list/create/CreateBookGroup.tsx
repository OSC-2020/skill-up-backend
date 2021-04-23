import { Form, Formik } from "formik";
import React from "react";
import { IBooks } from "../../../../redux/slices/bookGroups/bookGroups.slice";
import { arrayOfSize } from "../../../../utilities/array";
import { EditableBookGroupTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

interface IFormValues {
  groupTitle: string;
  books: IBooks[];
}

export const CreateBookGroup = (props: Props) => {
  let groupSizeArray: IBooks[] = arrayOfSize(props.groupSize || 4, {
    title: "",
    description: "",
  } as IBooks);
  const initialValues: IFormValues = {
    groupTitle: "",
    books: groupSizeArray,
  };

  const submitForm = (values: any) => {
    console.log(
      "🚀 ~ file: EditableBookTitle.tsx ~ line 40 ~ submitForm ~ values",
      values
    );
  };
  return (
    <section className="text-gray-600 body-font w-full">
      <Formik initialValues={initialValues} onSubmit={submitForm}>
        <Form>
          <EditableBookGroupTile books={initialValues.books} />
          <button
            className="mt-3 mb-3 skillup-btn"
            type="submit"
            onSubmit={submitForm}
          >
            Save
          </button>
        </Form>
      </Formik>
    </section>
  );
};
