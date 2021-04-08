import { MobileLayout } from "../../shared/MobileLayout";
import ScrollToBottom from "../../shared/ScrollToBottom";
import "./BookDetail.css";
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

export const BookDetail = () => {
  const chapters = getDummyData();
  return (
    <main className="flex py-5 w-full">
      <nav className="p-3 rounded-md skillup-background-color-bg font-medium shadow-lg w-1/4">
        <div>Title: </div>
        <div>Total Chapters: </div>
      </nav>
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
            <div className="flex flex-col-reverse overflow-y-auto bookDetail__chapters">
              {chapters.map((chapter, index) => (
                <div>
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

function getDummyData() {
  const arr = [
    {
      position: 0,
      id: "0",
      title: "string1",
    },
    {
      position: 1,
      id: "1",
      title: "number2",
    },
    {
      position: 2,
      id: "2",
      title: "var3",
    },
    {
      position: 3,
      id: "3",
      title: "let4",
    },
    {
      position: 4,
      id: "4",
      title: "const5",
    },
    {
      position: 5,
      id: "5",
      title: "let6",
    },
    {
      position: 6,
      id: "6",
      title: "const7",
    },
    {
      position: 7,
      id: "7",
      title: "let8",
    },
  ];
  return [...arr];
}
