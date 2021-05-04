import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deleteChapter, fetchBookDetail, updateChapterTitle_MW } from '../../../redux/slices/bookChapters';
import { IChapterInfo } from '../../../redux/slices/chapterDetail/chapterDetail';
import { MobileLayout } from "../../shared/MobileLayout";
import ScrollToBottom from "../../shared/ScrollToBottom";
import "./BookChapters.css";
import BookChaptersSideNav from "./BookDetailSideNav";
import ChapterTile from "./ChapterTile";
import { CreateChapterInput } from "./CreateChapterInput";



export const BookChapters = ({ match }: any) => {
  const dispatch = useAppDispatch();
  const bookDetailSlice = useAppSelector((state) => state.currentBookDetail);
  const bookId = match.params.bookId;

  if (!bookDetailSlice.loadedOnce) {
    dispatch(fetchBookDetail(bookId));
  }
  const bookInfo = bookDetailSlice.bookInfo;

  const deleteChapterFromList = (chapterId: string) => {
    dispatch(deleteChapter(chapterId));
  };
  const updateChapterTitle = (chapterId: string, title: string) => {
    dispatch(updateChapterTitle_MW({ chapterId, title }));
  };

  const moveChapterUpInList = (id: string) => {
    console.log(
      "🚀 ~ file: BookDetail.tsx ~ line 13 ~ moveChapterUpInList ~ id",
      id
    );
  };
  const moveChapterDownInList = (id: string) => {
    console.log(
      "🚀 ~ file: BookDetail.tsx ~ line 17 ~ moveChapterDownInList ~ id",
      id
    );
  };


  return (
    <main className="flex py-5 w-full">
      <BookChaptersSideNav />
      <section className="w-full ml-5 px-5 flex flex-col items-center">
        <section className="w-72 pb-4 pt-2">
          <CreateChapterInput savingState={bookDetailSlice.savingState} />
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
    </main>
  );
};
