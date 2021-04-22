import React from "react";
import Firebase, { FirebaseContext } from "../../../../Firebase";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { incrementByAmount } from "../../../../redux/slices/bookGroups.slice";
import { RootState } from "../../../../redux/store";
import { EditableBookGroupTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

export const CreateBookGroup = (props: Props) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.bookGroups.value);
  return (
    <FirebaseContext.Consumer>
      {(_firebase: Firebase | null) => {
        return (
          <section className="text-gray-600 body-font w-full">
            <h2>{count}</h2>
            <EditableBookGroupTile />
            <button
              className="mt-3 mb-3 skillup-btn"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              Save
            </button>
          </section>
        );
      }}
    </FirebaseContext.Consumer>
  );
};
