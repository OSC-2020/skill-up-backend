import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchBookDetail } from '../../../redux/slices/bookChapters/bookChapters.slice';
import { IChapterInfoModel } from '../../../redux/slices/chapterDetail/chapterDetail';
import { MobileLayout } from "../../shared/MobileLayout";
import ScrollToBottom from "../../shared/ScrollToBottom";
import "./BookChapters.css";
import BookChaptersSideNav from "./BookDetailSideNav";
import ChapterTile from "./ChapterTile";

function deleteChapterFromList(id: number | string) {
  console.log(
    "🚀 ~ file: BookDetail.tsx ~ line 9 ~ deleteChapterFromList ~ id",
    id
  );
}
function moveChapterUpInList(id: number | string) {
  console.log(
    "🚀 ~ file: BookDetail.tsx ~ line 13 ~ moveChapterUpInList ~ id",
    id
  );
}
function moveChapterDownInList(id: number | string) {
  console.log(
    "🚀 ~ file: BookDetail.tsx ~ line 17 ~ moveChapterDownInList ~ id",
    id
  );
}

function handleKeyDownOnInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    console.log("do validate");
  }
}

export const BookChapters = ({ match }: any) => {
  const dispatch = useAppDispatch();
  const bookDetailSlice = useAppSelector((state) => state.currentBookDetail);

  const bookId = match.params.bookId;
  if (!bookDetailSlice.loadedOnce) {
    dispatch(fetchBookDetail(bookId));
  }
  const bookInfo = bookDetailSlice.bookInfo;
  return (
    <main className="flex py-5 w-full">
      <BookChaptersSideNav />
      <section className="w-full ml-5 px-5 flex flex-col items-center">
        <section className="w-72 pb-4 pt-2">
          <input
            className="w-full p-2 rounded"
            placeholder="Add new chapter"
            onKeyDown={(e: any) => handleKeyDownOnInput(e)}
          />
        </section>
        <MobileLayout>
          <ScrollToBottom
            scrollBehaviour="smooth"
            className="h-full flex flex-col-reverse"
          >
            <div className="flex flex-col-reverse overflow-y-auto bookChapters__chapters">
              {bookInfo?.chapters.map((chapter: IChapterInfoModel, index: number) => (
                <div key={index}>
                  <ChapterTile
                    id={chapter.id}
                    title={chapter.title}
                    index={index}
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