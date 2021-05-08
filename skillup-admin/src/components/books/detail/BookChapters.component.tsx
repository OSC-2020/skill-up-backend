import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { bcMoveChapterDownInList_AN, bcMoveChapterUpInList_AN, deleteChapter_MW, fetchBookDetail_MW, updateChapterOrder_MW, updateChapterTitle_MW } from '../../../redux/slices/bookChapters';
import { IChapterInfo } from '../../../redux/slices/chapterDetail/chapterDetail';
import { selectCurrentBookDetail } from '../../../redux/store';
import { MobileLayout } from "../../shared/MobileLayout.component";
import ScrollToBottom from "../../shared/ScrollToBottom.component";
import "./BookChapters.component.css";
import BookChaptersSideNav from "./BookDetailSideNav.component";
import ChapterTile from "./ChapterTile.component";
import { CreateChapterInput } from "./CreateChapterInput.component";



export const BookChapters = ({ match }: any) => {
  const dispatch = useAppDispatch();
  const bookDetailSlice = useAppSelector(selectCurrentBookDetail);
  const bookId = match.params.bookId;
  const bookInfo = bookDetailSlice.bookInfo;
  const isChapterOrderModified = bookDetailSlice.isChapterOrderModified;

  useEffect(() => {
    dispatch(fetchBookDetail_MW(bookId));
  }, [bookId, dispatch]);
  const deleteChapterFromList = (chapterId: string) => {
    dispatch(deleteChapter_MW(chapterId));
  };
  const updateChapterTitle = (chapterId: string, title: string) => {
    dispatch(updateChapterTitle_MW({ chapterId, title }));
  };

  const moveChapterUpInList = (idx: number) => {
    dispatch(bcMoveChapterUpInList_AN(idx));
  };

  const moveChapterDownInList = (idx: number) => {
    dispatch(bcMoveChapterDownInList_AN(idx));
  };

  const saveChapterOrder = () => {
    dispatch(updateChapterOrder_MW());
  };

  return (
    <main className="flex py-5 w-full">
      <BookChaptersSideNav title={bookInfo?.title as string} totalChapters={bookInfo?.totalChapters as number} />
      <section className="w-full ml-5 px-5 flex flex-col items-center">
        <section className="w-72 pb-4 pt-2">
          <CreateChapterInput saving={bookDetailSlice.saving} />
        </section>
        <MobileLayout>
          <ScrollToBottom
            scrollBehaviour="smooth"
            className="h-full flex flex-col-reverse"
          >
            <div className="flex flex-col-reverse overflow-y-auto bookChapters__chapters">
              {bookInfo?.chapters.map((chapter: IChapterInfo, index: number) => (
                <div key={index}>
                  <ChapterTile
                    id={chapter.id as string}
                    title={chapter.title}
                    index={index}
                    onUpdateTitle={updateChapterTitle}
                    onDelete={deleteChapterFromList}
                    onMoveUp={moveChapterUpInList}
                    onMoveDown={moveChapterDownInList}
                  />
                  <span className="flex rounded my-3 w-full"></span>
                </div>
              ))}
            </div>
          </ScrollToBottom>
        </MobileLayout>
      </section>
      {isChapterOrderModified ?
        <button className="skillup-btn-success fixed right-8 bottom-8" onClick={saveChapterOrder}>Save chapter order</button> : null
      }
    </main>
  );
};

