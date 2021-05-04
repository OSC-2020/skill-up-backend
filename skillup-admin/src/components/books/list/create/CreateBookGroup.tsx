import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  saveNewBookGroup_MW,
  IBookGroups,
  IBooks,
  selectSavingState,
} from "../../../../redux/slices/bookGroups";
import { arrayOfSize } from "../../../../utilities/array";
import { EditableBookGroupTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

export const CreateBookGroup = (props: Props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const savingState = useAppSelector(selectSavingState);

  if (savingState === "done") {
    setTimeout(() => {
      history.push("/books/list");
    }, 200);
  }

  let groupSizeArray: IBooks[] = arrayOfSize(props.groupSize || 4, {
    title: "",
    description: "",
  } as IBooks);
  const initialValues: IBookGroups = {
    title: "",
    books: groupSizeArray,
    isPublished: false,
  };

  const submitForm = (values: IBookGroups) => {
    dispatch(saveNewBookGroup_MW(values));
  };
  return (
    <section className="text-gray-600 body-font w-full">
      <Formik initialValues={initialValues} onSubmit={submitForm}>
        <Form>
          <EditableBookGroupTile books={initialValues.books} />
          <button className="mt-3 mb-3 skillup-btn-primary" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </section>
  );
};
