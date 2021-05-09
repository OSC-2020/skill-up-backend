import { useState } from 'react';
import { EmptyChapter } from "./EmptyChapter.component";
import { ChapterDetailFooter } from "./Footer.component";
import { EPageType, PageTypeSelector } from "./PageTypeSelector.component";
import { TheoryDynamicContent } from "./theory/DynamicContent.component";
import { QuizTemplate } from "./quiz/quiz.component";
interface Props {

}

export const ChapterDetail = (props: Props) => {
    const contentAvailable = false;
    const [isUpdatingContent, setIsUpdatingContent] = useState(false);
    const [currentPageType, setCurrentPageType] = useState(EPageType.THEORY);
    function getContentEditor() {
        return (
            <main className="py-8 w-2/3 m-auto">
                <PageTypeSelector
                    pageType={currentPageType}
                    changePageTypeCallback={(pageType: EPageType) => setCurrentPageType(pageType)} />
                {currentPageType === EPageType.THEORY ?
                    <TheoryDynamicContent /> :
                    <QuizTemplate />
                }
                <section className="mt-8">
                    <ChapterDetailFooter />
                </section>
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
