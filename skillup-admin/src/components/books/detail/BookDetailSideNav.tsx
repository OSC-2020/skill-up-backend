import React from "react";
interface Props {
  title: string;
  totalChapters: number;
}
function BookChaptersSideNav(props: Props) {
  return (
    <nav className="p-3 rounded-md skillup-background-color-bg font-medium shadow-lg w-1/4">
      <div>Title: {props.title}</div>
      <div>Total Chapters: {props.totalChapters}</div>
    </nav>
  );
}

export default BookChaptersSideNav;
