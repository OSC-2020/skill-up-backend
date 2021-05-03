import React, { useEffect, useState } from 'react';
import { useAppDispatch } from "../../../redux/hooks";
import { createNewChapter, setSavingState } from '../../../redux/slices/bookChapters';

interface Props {
    savingState: '' | 'start' | 'done' | 'failed';
}

export const CreateChapterInput = (props: Props) => {
    const dispatch = useAppDispatch();
    const [newChapterInput, setNewChapterInput] = useState("");

    useEffect(() => {
        if (props.savingState === "done") {
            setNewChapterInput("");
            dispatch(setSavingState(''));
        }
    }, [props.savingState, dispatch, setNewChapterInput]);
    const handleKeyDownOnInput = (e: any) => {
        const val = e.target.value;
        const isValidValue = val && val.trim() !== '';
        if (e.key === "Enter" && isValidValue) {
            dispatch(createNewChapter({
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
