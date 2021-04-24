import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { saveNewBookGroup } from "../../../../redux/slices/bookGroups/bookGroups.middleware";
import {
  IBookGroups,
  IBooks,
  selectSavingState,
} from "../../../../redux/slices/bookGroups/bookGroups.slice";
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
    history.push("..");
  }

  let groupSizeArray: IBooks[] = arrayOfSize(props.groupSize || 4, {
    title: "",
    description: "",
  } as IBooks);
  const initialValues: IBookGroups = {
    title: "",
    books: groupSizeArray,
  };

  const submitForm = (values: IBookGroups) => {
    dispatch(saveNewBookGroup(values));
  };
  return (
    <section className="text-gray-600 body-font w-full">
      <Formik initialValues={initialValues} onSubmit={submitForm}>
        <Form>
          <EditableBookGroupTile books={initialValues.books} />
          <button className="mt-3 mb-3 skillup-btn" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </section>
  );
};
