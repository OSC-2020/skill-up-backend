import { useState } from 'react';
import { EmptyChapter } from "./EmptyChapter.component";
import { PageTypeSelector } from "./PageTypeSelector.component";
import { ChapterDetailFooter } from "./Footer.component";
import { TheoryDynamicContent } from "./theory/DynamicContent.component";
interface Props {

}

export const ChapterDetail = (props: Props) => {
    const contentAvailable = false;
    const [isUpdatingContent, setIsUpdatingContent] = useState(false);


    function getContentEditor() {
        return (
            <main className="py-8">
                <PageTypeSelector />
                <TheoryDynamicContent />
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
