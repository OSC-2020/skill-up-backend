import React from 'react'

interface Props {

}

export const EmptyChapter = (props: Props) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-5/12  flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                        No content available.
                    </h1>
                    <button className="skillup-btn-success">
                        Add content
                    </button>
                </div>
            </div>
        </section>
    )
}
