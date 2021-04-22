import React from "react";
import Firebase, { FirebaseContext } from "../../../../Firebase";
import { EditableBookGroupTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

export const CreateBookGroup = (props: Props) => {
  return (
    <FirebaseContext.Consumer>
      {(_firebase: Firebase | null) => {
        return (
          <section className="text-gray-600 body-font w-full">
            <EditableBookGroupTile />
            <button className="mt-3 mb-3 skillup-btn">Save</button>
          </section>
        );
      }}
    </FirebaseContext.Consumer>
  );
};
