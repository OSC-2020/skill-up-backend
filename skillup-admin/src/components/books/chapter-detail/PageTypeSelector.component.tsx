import React from 'react'
import { ToggleSwitch } from "../../shared/ToggleSwitch.component";
interface Props {

}

export const PageTypeSelector = (props: Props) => {
    return (
        <main className="flex justify-evenly items-center">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 pr-8">Theory</h2>
            <ToggleSwitch onSwitchCallback={(val) => console.log(val)} initialVal={false} size="md"/>
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 pl-8">Quiz</h2>
        </main>
    )
}

