import React, { useState } from "react";
import { FaPencilAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../../redux/hooks';
import { updateBookTitle_MW } from '../../../redux/slices/bookChapters';
interface Props {
  title: string;
  totalChapters: number;
}
function BookChaptersSideNav(props: Props) {
  const dispatch = useAppDispatch();

  const [isUpdatingTitle, setIsUpdatingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const activateTitleEditor = () => {
    setIsUpdatingTitle(true);
    setNewTitle(props.title);
  };

  const handleSubmit = (event: any) => {
    console.log('🚀 ~Submitting ', newTitle);
    if (newTitle && newTitle.trim() !== '') {
      dispatch(updateBookTitle_MW(newTitle));
      setIsUpdatingTitle(false);
    }
    event.preventDefault();
  };
  return (
    <nav className="p-3 rounded-md skillup-background-color-bg font-medium shadow-lg w-1/4">
      <div className="cursor-pointer">
        {isUpdatingTitle ?
          <form onSubmit={handleSubmit}>
            <input placeholder="New title" className="pl-4 pr-4" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          </form> :
          <span className="flex items-center" onClick={activateTitleEditor}>
            Title: {props.title} <FaPencilAlt className="ml-4 text-xs text-gray-600" />
          </span>
        }
      </div>
      <div>Total Chapters: {props.totalChapters}</div>
    </nav>
  );
}

export default BookChaptersSideNav;