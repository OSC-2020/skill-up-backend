import React, { useEffect, useState } from 'react'

interface Props {
    onSwitchCallback: (isOn: boolean) => void;
    initialVal: boolean;
}

export const ToggleSwitch = (props: Props) => {
    const [isSet, setIsSet] = useState(props.initialVal || false);
    
    function toggleTheme() {
        setIsSet(!isSet);
    }

    useEffect(() => {
        props.onSwitchCallback(isSet);
    }, [isSet])

    let containerClass = 'w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white';
    if (isSet) {
        containerClass = `${containerClass} bg-green-400 -translate-x-2`;
    } else {
        containerClass = `${containerClass} bg-gray-700 translate-x-full`;
    }

    return (
        <button
            className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow" onClick={toggleTheme}>
            <div className={containerClass}>
            </div>
        </button>
    )
}
