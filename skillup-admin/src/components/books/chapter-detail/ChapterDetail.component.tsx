import { useState } from 'react';
import { EmptyChapter } from "./EmptyChapter.component";
import { PageTypeSelector } from "./PageTypeSelector.component";
import { ChapterDetailFooter } from "./Footer.component";
interface Props {

}

export const ChapterDetail = (props: Props) => {
    const contentAvailable = false;
    const [isUpdatingContent, setIsUpdatingContent] = useState(false);


    function getContentEditor() {
        return (
        <main>
            <PageTypeSelector />
            <ChapterDetailFooter />
        </main>
        )
    }
    const pageContent = contentAvailable || isUpdatingContent ? getContentEditor() :
        <EmptyChapter addContentCallback={setIsUpdatingContent} />;
    return (
        <main className="w-full">
            {pageContent}
        </main>
    )
}
