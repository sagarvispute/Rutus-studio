import React from 'react'

interface Props {
    title: string
}

export default function Pageheader(props: Props) {
    return (
        <>
            <h1 className="font-bold text-5xl mb-16">{props.title}</h1>
        </>
    )
}
