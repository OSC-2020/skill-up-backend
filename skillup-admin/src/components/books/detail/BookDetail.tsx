import React, { ReactElement } from 'react';
import ChapterTile from "./ChapterTile";
import "./BookDetail.css";
import { MobileLayout } from "../shared/MobileLayout";
interface Props {

}

export default function BookDetail({ }: Props): ReactElement {
    // let { bookId } = useParams<{ bookId: string; }>();
    const chapters = [
        {
            id: "",
            title: "string"
        },
        {
            id: "",
            title: "number"
        },
        {
            id: "",
            title: "var"
        },
        {
            id: "",
            title: "let"
        },
        {
            id: "",
            title: "const"
        },
        {
            id: "",
            title: "let"
        },
        {
            id: "",
            title: "const"
        },
        {
            id: "",
            title: "let"
        },
        {
            id: "",
            title: "const"
        },
        {
            id: "",
            title: "let"
        },
        {
            id: "",
            title: "const"
        },
        {
            id: "",
            title: "let"
        },
        {
            id: "",
            title: "const"
        },
    ];
    return (
        <main className="flex py-5 w-full">
            <nav className="p-3 rounded-md skillup-background-color-bg font-medium shadow-lg w-1/4">
                <div>Title: </div>
                <div>Total Chapters: </div>
            </nav>
            <section className="w-full ml-5 px-5 flex flex-col items-center">
                <MobileLayout>
                    {chapters.map((chapter, index) =>
                        <ChapterTile id={chapter.id} title={chapter.title} index={index} />
                    )}
                </MobileLayout>
            </section>
        </main>
    );
}
