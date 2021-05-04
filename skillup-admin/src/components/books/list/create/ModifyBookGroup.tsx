import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookGroupWithId_DB } from "../../../../Firebase/bookGroups/crud";
import DBError from "../../../../Firebase/DBError";
import { useAppDispatch } from "../../../../redux/hooks";
import { IBookGroups, modifyBookGroup_MW } from "../../../../redux/slices/bookGroups";
import { EditableBookGroupTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

export const ModifyBookGroup = (props: Props) => {
  const { groupId } = useParams() as { groupId: string; };
  const dispatch = useAppDispatch();
  const [groupInfo, setgroupInfo] = useState<IBookGroups | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setgroupInfo(await getBookGroupWithId_DB(groupId));
        setLoading(false);
      } catch (error) {
        if (error instanceof DBError && error.code === 404) {
          setNotFound(true);
        } else {
          console.error(error.message);
        }
      }
    })();
  }, [groupId]);

  const submitForm = (values: IBookGroups) => {
    dispatch(modifyBookGroup_MW(values));
  };
  if (notFound) {
    return <h2>Group Id not found</h2>;
  }
  if (loading) {
    return <h2>Loading data from DB</h2>;
  }
  const info = groupInfo as IBookGroups;
  return (
    <section className="text-gray-600 body-font w-full">
      <Formik initialValues={info} onSubmit={submitForm}>
        <Form>
          <EditableBookGroupTile books={info.books} />
          <button className="mt-3 mb-3 skillup-btn-primary" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </section>
  );
};
