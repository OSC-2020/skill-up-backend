import { useState } from 'react';
import { EmptyChapter } from "./EmptyChapter.component";
import { PageTypeSelector } from "./PageTypeSelector.component";
interface Props {

}

export const ChapterDetail = (props: Props) => {
    const contentAvailable = false;
    const [isUpdatingContent, setIsUpdatingContent] = useState(false);

    
    function getContentEditor() {
        return <PageTypeSelector />;
    }

    return (
        <main className="w-full">
            {contentAvailable || isUpdatingContent ? getContentEditor() :
                <EmptyChapter addContentCallback={setIsUpdatingContent} />
            }
        </main>
    )
}
