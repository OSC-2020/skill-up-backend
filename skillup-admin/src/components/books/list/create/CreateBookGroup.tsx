import React from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { fetchAllBookGroups } from "../../../../redux/slices/bookGroups/bookGroups.slice";
import { EditableBookGroupTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

export const CreateBookGroup = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <section className="text-gray-600 body-font w-full">
      <EditableBookGroupTile />
      <button
        className="mt-3 mb-3 skillup-btn"
        onClick={() => {
          dispatch(fetchAllBookGroups());
        }}
      >
        Save
      </button>
    </section>
  );
};
