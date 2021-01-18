import React, { Component } from 'react';


export default class BooksList extends Component {
    state = {};
    data = [
        {
            sub: 'SUBTITLE',
            title: 'Chichen Itza',
            footer: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
        },
        {
            sub: 'SUBTITLE',
            title: 'Colosseum Roma',
            footer: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
        },
        {
            sub: 'SUBTITLE',
            title: 'Great Pyramid of Giza',
            footer: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
        },
        {
            sub: 'SUBTITLE',
            title: 'San Francisco',
            footer: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
        },
    ];
    titles = ["Interview", 'Basic', "intermediate"];

    render() {
        return (
            <section className="text-gray-600 body-font">
                {this.titles.map(v => (
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-10">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{v}</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {this.data.map(v => (
                                <div className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                                        <h3
                                            className="tracking-widest text-indigo-500 text-xs font-medium title-font"
                                        >
                                            {v.sub}
                                        </h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            {v.title}
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            {v.footer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

        );
    }
}
