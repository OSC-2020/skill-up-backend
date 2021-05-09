import React from 'react';
import { ToggleSwitch } from "../../shared/ToggleSwitch.component";
interface Props {
    pageType: EPageType;
    changePageTypeCallback: (pageType: EPageType) => void;
}

export enum EPageType {
    THEORY,
    QUIZ
}

export const PageTypeSelector = (props: Props) => {
    const changePageType = (isSwitchSet: boolean) => {
        if (isSwitchSet) {
            props.changePageTypeCallback(EPageType.THEORY);
        } else {
            props.changePageTypeCallback(EPageType.QUIZ);
        }
    }
    const containerCss = `flex rounded p-2 justify-between items-center transition-colors duration-500 ${props.pageType === EPageType.THEORY ? "bg-gradient-to-r from-red-200" : "bg-gradient-to-l from-red-200"}`
    return (
        <main className={containerCss}>
            <h2 className="sm:text-3xl  text-2xl font-medium title-font pr-8 text-green-400">Theory</h2>
            <ToggleSwitch onSwitchCallback={(val) => changePageType(val)} initialVal={true} size="md" />
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-700 pl-8">Quiz</h2>
        </main>
    )
}

