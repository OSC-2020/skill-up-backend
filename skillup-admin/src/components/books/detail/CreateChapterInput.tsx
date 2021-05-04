import React, { useEffect, useState } from 'react';
import { useAppDispatch } from "../../../redux/hooks";
import { createNewChapter_MW, bcSetSavingState_AN } from '../../../redux/slices/bookChapters';
import { flagStatus } from '../../../redux/store';

interface Props {
    saving: flagStatus;
}

export const CreateChapterInput = (props: Props) => {
    const dispatch = useAppDispatch();
    const [newChapterInput, setNewChapterInput] = useState("");

    useEffect(() => {
        if (props.saving === "done") {
            setNewChapterInput("");
            dispatch(bcSetSavingState_AN(''));
        }
    }, [props.saving, dispatch, setNewChapterInput]);
    const handleKeyDownOnInput = (e: any) => {
        const val = e.target.value;
        const isValidValue = val && val.trim() !== '';
        if (e.key === "Enter" && isValidValue) {
            dispatch(createNewChapter_MW({
                title: val,
                completedByCount: 0
            }));
        };
    };
    return (
        <input
            value={newChapterInput}
            onChange={(e) => setNewChapterInput(e.target.value)}
            className="w-full p-2 rounded"
            placeholder="Add new chapter"
            onKeyDown={(e: any) => handleKeyDownOnInput(e)}
        />
    );
};
